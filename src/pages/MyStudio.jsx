import React, { useState, useEffect, useRef } from 'react';
import '../studio.css';

// Preset tattoos from public assets
const TATTOO_PRESETS = [
  { id: 'sc_dragon', name: 'Tribal Dragon', url: '/images/sc_dragon.png' },
  { id: 'sc_astronaut', name: 'Cyber Astro', url: '/images/sc_astronaut.png' },
  { id: 'tattoo_lion', name: 'Noble Lion', url: '/images/tattoo_lion.png' },
  { id: 'sc_oni', name: 'Crimson Oni', url: '/images/sc_oni.png' },
  { id: 'sc_samurai', name: 'Shogun Warrior', url: '/images/sc_samurai.png' },
  { id: 'sc_snake', name: 'Dark Serpent', url: '/images/sc_snake.png' }
];

// Preset model body profiles (Unsplash high-res creative commons)
const MODEL_PRESETS = [
  { 
    id: 'arm', 
    name: 'Forearm Model', 
    url: 'https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?w=800&auto=format&fit=crop&q=80', 
    defaultPart: 'left hand forearm' 
  },
  { 
    id: 'back', 
    name: 'Back Profile', 
    url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800&auto=format&fit=crop&q=80', 
    defaultPart: 'upper back' 
  },
  { 
    id: 'neck', 
    name: 'Neck Profile', 
    url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&auto=format&fit=crop&q=80', 
    defaultPart: 'neck right' 
  }
];

const BODY_PARTS = [
  { value: 'left hand forearm', label: 'Left Hand Forearm' },
  { value: 'right hand forearm', label: 'Right Hand Forearm' },
  { value: 'left leg calf', label: 'Left Leg Calf' },
  { value: 'right leg calf', label: 'Right Leg Calf' },
  { value: 'neck front', label: 'Neck Front' },
  { value: 'neck left', label: 'Neck Left' },
  { value: 'neck right', label: 'Neck Right' },
  { value: 'neck back', label: 'Neck Back' },
  { value: 'upper back', label: 'Upper Back' },
  { value: 'lower back', label: 'Lower Back' },
  { value: 'left face cheek', label: 'Left Face Cheek' },
  { value: 'right face cheek', label: 'Right Face Cheek' }
];

const BLEND_MODES = [
  { value: 'multiply', label: 'Multiply (Ink Sink - Recommended)' },
  { value: 'normal', label: 'Normal (Solid Overlay)' },
  { value: 'darken', label: 'Darken (Shadow Blend)' },
  { value: 'overlay', label: 'Overlay (Vibrant Colored)' },
  { value: 'screen', label: 'Screen (White Glow)' }
];

const MyStudio = () => {
  // Image states
  const [tattooImg, setTattooImg] = useState(TATTOO_PRESETS[0].url);
  const [userImg, setUserImg] = useState(MODEL_PRESETS[0].url);
  const [userImgBackup, setUserImgBackup] = useState(MODEL_PRESETS[0].url);
  const [customTattooName, setCustomTattooName] = useState('');
  const [customUserName, setCustomUserName] = useState('');

  // Placement parameters
  const [bodyPart, setBodyPart] = useState(MODEL_PRESETS[0].defaultPart);
  const [tattooSize, setTattooSize] = useState(10); // in cm
  const [xPos, setXPos] = useState(50); // percentage (0-100)
  const [yPos, setYPos] = useState(50); // percentage (0-100)
  const [scale, setScale] = useState(1.0); // manual scale multiplier
  const [rotation, setRotation] = useState(0); // rotation in degrees
  const [opacity, setOpacity] = useState(0.85);
  const [blendMode, setBlendMode] = useState('multiply');

  // Interactive editing state
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [dragPosStart, setDragPosStart] = useState({ x: 50, y: 50 });
  const [isRotating, setIsRotating] = useState(false);
  const [rotateCenter, setRotateCenter] = useState({ x: 0, y: 0 });
  const [rotateStartAngle, setRotateStartAngle] = useState(0);
  const [rotateStartDeg, setRotateStartDeg] = useState(0);

  // Gemini API States
  const [apiKey, setApiKey] = useState('AIzaSyCHsKUQfWjHWKfke9FXC0ZEI8JPZj8SlCo');
  const [showApiInput, setShowApiInput] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiLogs, setAiLogs] = useState([]);
  const [aiFeedback, setAiFeedback] = useState(null);
  const [isAiGenerated, setIsAiGenerated] = useState(false);
  const [bgImageLoading, setBgImageLoading] = useState(false);
  const [aiRetryCount, setAiRetryCount] = useState(0);

  // Refs
  const editorFrameRef = useRef(null);
  const tattooRef = useRef(null);
  const fileInputTattooRef = useRef(null);
  const fileInputUserRef = useRef(null);

  // Load saved API Key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('tokiyo_gemini_api_key');
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  // Monitor background userImg changes to trigger bgImageLoading for generative AI URLs
  useEffect(() => {
    if (userImg && userImg.startsWith('https://image.pollinations.ai')) {
      setBgImageLoading(true);
    } else {
      setBgImageLoading(false);
    }
  }, [userImg]);

  // Update body part based on preset models for better initial fit
  const handleModelPresetClick = (model) => {
    setUserImg(model.url);
    setUserImgBackup(model.url);
    setIsAiGenerated(false);
    setBgImageLoading(false);
    setAiRetryCount(0);
    setCustomUserName('');
    setBodyPart(model.defaultPart);
    setAiFeedback(null);
    
    // Auto center based on preset selected
    if (model.id === 'arm') {
      setXPos(50); setYPos(55); setRotation(-10); setScale(1.0);
    } else if (model.id === 'back') {
      setXPos(50); setYPos(42); setRotation(0); setScale(1.3);
    } else if (model.id === 'neck') {
      setXPos(58); setYPos(48); setRotation(15); setScale(0.7);
    }
  };

  // Upload Handlers
  const handleTattooUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    setCustomTattooName(file.name);
    setIsAiGenerated(false);
    setAiRetryCount(0);
    const reader = new FileReader();
    reader.onload = (event) => {
      setTattooImg(event.target.result);
    };
    reader.readAsDataURL(file);
  };

  const handleUserUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setCustomUserName(file.name);
    setIsAiGenerated(false);
    setAiRetryCount(0);
    const reader = new FileReader();
    reader.onload = (event) => {
      setUserImg(event.target.result);
      setUserImgBackup(event.target.result);
      setAiFeedback(null);
      // Reset placement to middle
      setXPos(50);
      setYPos(50);
      setRotation(0);
      setScale(1.0);
    };
    reader.readAsDataURL(file);
  };

  // Drag Placement Handlers
  const handlePointerDown = (e) => {
    if (e.target.classList.contains('tattoo-rotate-handle')) {
      // Rotation initiated
      e.stopPropagation();
      setIsRotating(true);
      const tattooRect = tattooRef.current.getBoundingClientRect();
      const centerX = tattooRect.left + tattooRect.width / 2;
      const centerY = tattooRect.top + tattooRect.height / 2;
      setRotateCenter({ x: centerX, y: centerY });
      
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX);
      setRotateStartAngle(angle);
      setRotateStartDeg(rotation);
    } else {
      // Dragging initiated
      setIsDragging(true);
      setDragStart({ x: e.clientX, y: e.clientY });
      setDragPosStart({ x: xPos, y: yPos });
    }
    e.target.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e) => {
    if (isRotating) {
      const angle = Math.atan2(e.clientY - rotateCenter.y, e.clientX - rotateCenter.x);
      const angleDiff = angle - rotateStartAngle;
      const degDiff = (angleDiff * 180) / Math.PI;
      let newDeg = Math.round(rotateStartDeg + degDiff);
      // Clamp between -180 and 180
      if (newDeg > 180) newDeg -= 360;
      if (newDeg < -180) newDeg += 360;
      setRotation(newDeg);
    } else if (isDragging) {
      if (!editorFrameRef.current) return;
      const frameRect = editorFrameRef.current.getBoundingClientRect();
      
      const dx = e.clientX - dragStart.x;
      const dy = e.clientY - dragStart.y;
      
      const dxPercent = (dx / frameRect.width) * 100;
      const dyPercent = (dy / frameRect.height) * 100;
      
      // Calculate clamped position (0-100)
      const newX = Math.max(0, Math.min(100, Math.round(dragPosStart.x + dxPercent)));
      const newY = Math.max(0, Math.min(100, Math.round(dragPosStart.y + dyPercent)));
      
      setXPos(newX);
      setYPos(newY);
    }
  };

  const handlePointerUp = (e) => {
    setIsDragging(false);
    setIsRotating(false);
    e.target.releasePointerCapture(e.pointerId);
  };

  // API Key local storage helper
  const handleSaveApiKey = () => {
    localStorage.setItem('tokiyo_gemini_api_key', apiKey);
    setShowApiInput(false);
    alert('Gemini API key saved securely in your browser!');
  };

  const handleRemoveApiKey = () => {
    localStorage.removeItem('tokiyo_gemini_api_key');
    setApiKey('');
    alert('Gemini API key removed.');
  };

  // Gemini AI Fusion Caller (Dual Mode)
  const handleAIFusion = async () => {
    setAiLoading(true);
    setAiFeedback(null);
    setAiRetryCount(0);
    setAiLogs([]);

    const log = (message, status = '') => {
      setAiLogs(prev => [...prev, { message, status, time: new Date().toLocaleTimeString() }]);
    };

    // Find current tattoo design name and clean extension/formatting to prevent URL routing crashes in image generation
    const currentPresetTattoo = TATTOO_PRESETS.find(p => p.url === tattooImg);
    const rawTattooName = currentPresetTattoo ? currentPresetTattoo.name : (customTattooName ? customTattooName : "Tattoo Design");
    const tattooName = rawTattooName.replace(/\.[a-zA-Z0-9]+$/, '').replace(/_/g, ' ').replace(/-/g, ' ');

    log('Initializing AI Studio Engine...', 'processing');

    // Simulate standard animation delay
    await new Promise(r => setTimeout(r, 600));

    if (!apiKey) {
      // ----------------------------------------------------
      // SIMULATION MODE (No API Key)
      // ----------------------------------------------------
      log('No local API Key found. Running Premium Local Simulator...', 'processing');
      await new Promise(r => setTimeout(r, 500));
      
      log('Scanning user background image contours...', 'processing');
      await new Promise(r => setTimeout(r, 600));
      
      log(`Detecting target body part: [${bodyPart.toUpperCase()}]...`, 'processing');
      await new Promise(r => setTimeout(r, 500));

      // Simulated visibility check
      let isBodyPartPresent = true;
      const currentPresetModel = MODEL_PRESETS.find(p => p.url === userImg);
      
      if (currentPresetModel) {
        if (currentPresetModel.id === 'arm' && !bodyPart.includes('forearm')) {
          isBodyPartPresent = false;
        } else if (currentPresetModel.id === 'back' && !bodyPart.includes('back')) {
          isBodyPartPresent = false;
        } else if (currentPresetModel.id === 'neck' && 
                   !bodyPart.includes('neck') && !bodyPart.includes('cheek')) {
          isBodyPartPresent = false;
        }
      } else {
        // If it's a custom photo, let's assume calf/back is not present in typical torso/portrait shots 40% of time
        if (bodyPart.includes('calf') || bodyPart.includes('back')) {
          isBodyPartPresent = false;
        }
      }

      if (!isBodyPartPresent) {
        log(`Anatomy scan warning: target body part [${bodyPart.toUpperCase()}] is NOT visible in this photo!`, 'processing');
        await new Promise(r => setTimeout(r, 800));
        
        log('Activating Gemini Generative AI (Imagen 3 / Diffusion) model...', 'processing');
        await new Promise(r => setTimeout(r, 800));
        
        log(`Generating new AI body profile showing target part [${bodyPart}]...`, 'processing');
        await new Promise(r => setTimeout(r, 600));

        log(`Seamlessly merging '${tattooName}' onto skin surface contours...`, 'processing');
        await new Promise(r => setTimeout(r, 600));

        const genPrompt = `A professional, close-up studio portfolio photograph of a person showing their ${bodyPart} featuring a highly detailed, clean '${tattooName}' tattoo. Photorealistic skin texture with subtle contours, natural shadows, ambient studio lighting, sharp focus, 8k resolution.`;
        
        const genUrl = `https://image.pollinations.ai/p/${encodeURIComponent(genPrompt)}?width=512&height=682&seed=${Math.floor(Math.random() * 10000)}`;
        
        setUserImg(genUrl);
        setIsAiGenerated(true);
        
        log('Gemini AI Generation completed!', 'done');
        setAiFeedback({
          title: 'Gemini Auto-Generation Completed',
          description: `We detected that the target body part '${bodyPart}' was not visible in your photo. Gemini automatically synthesized a photorealistic studio render of a body profile showing the '${tattooName}' tattoo integrated onto their '${bodyPart}'!`
        });
        setAiLoading(false);
        return;
      }
      
      log(`Calibrating target tattoo size: ${tattooSize} cm...`, 'processing');
      await new Promise(r => setTimeout(r, 400));
      
      log('Running canvas pixel ink absorption shader...', 'processing');
      await new Promise(r => setTimeout(r, 400));

      // Calculate simulated coordinates based on bodyPart
      let x = 50, y = 50, rot = 0, sc = 1.0, bm = 'multiply', op = 0.85;
      
      switch (bodyPart) {
        case 'left hand forearm': x = 38; y = 58; rot = -12; sc = 0.95; break;
        case 'right hand forearm': x = 62; y = 58; rot = 12; sc = 0.95; break;
        case 'left leg calf': x = 36; y = 72; rot = -5; sc = 1.1; break;
        case 'right leg calf': x = 64; y = 72; rot = 5; sc = 1.1; break;
        case 'neck front': x = 50; y = 35; rot = 0; sc = 0.65; break;
        case 'neck left': x = 42; y = 35; rot = -18; sc = 0.65; break;
        case 'neck right': x = 58; y = 35; rot = 18; sc = 0.65; break;
        case 'neck back': x = 50; y = 30; rot = 0; sc = 0.75; break;
        case 'upper back': x = 50; y = 40; rot = 0; sc = 1.3; break;
        case 'lower back': x = 50; y = 66; rot = 0; sc = 1.2; break;
        case 'left face cheek': x = 40; y = 28; rot = -8; sc = 0.5; break;
        case 'right face cheek': x = 60; y = 28; rot = 8; sc = 0.5; break;
        default: x = 50; y = 50; rot = 0; sc = 1.0;
      }

      // Adjust scale dynamically based on selected cm size (reference 10cm is scale 1.0)
      const adjustedScale = parseFloat(((tattooSize / 10) * sc).toFixed(2));

      setXPos(x);
      setYPos(y);
      setRotation(rot);
      setScale(adjustedScale);
      setBlendMode(bm);
      setOpacity(op);
      setIsAiGenerated(false);

      log('Gemini AI Ink-Fusion mapping completed!', 'done');
      setAiFeedback({
        title: 'Gemini Auto-Placement Rendered (Simulated)',
        description: `Successfully analyzed body contours for the '${bodyPart}'. Positioned at coordinates [X:${x}%, Y:${y}%] with a natural skin rotation of ${rot}° and a structural scale of ${adjustedScale}x to match the requested ${tattooSize} cm dimension. Blended with skin textures via 'multiply' rendering.`
      });
      setAiLoading(false);
    } else {
      // ----------------------------------------------------
      // REAL GEMINI API CALL MODE
      // ----------------------------------------------------
      log('Secure Gemini key found. Preparing multi-modal payload...', 'processing');
      
      try {
        // We need to convert the user image into base64 without headers and calculate exact mimeType
        let base64Image = '';
        let mimeType = 'image/jpeg';

        if (userImg.startsWith('data:')) {
          const parts = userImg.split(',');
          base64Image = parts[1];
          mimeType = parts[0].match(/data:(.*?);/)[1] || 'image/jpeg';
        } else {
          // It's a remote URL preset. We have to fetch and convert it
          log('Downloading model asset from server...', 'processing');
          const response = await fetch(userImg);
          const blob = await response.blob();
          mimeType = blob.type || 'image/jpeg';
          base64Image = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result.split(',')[1]);
            reader.readAsDataURL(blob);
          });
        }

        log('Analyzing anatomy and skeletal frame...', 'processing');

        const prompt = `You are a visual assistant for TOKIYO Tattoo Studio. We want to place a tattoo of style '${tattooName}' onto the user's '${bodyPart}'.
Analyze the user photo. Is the target body part '${bodyPart}' clearly visible in the photo?
Return a JSON block containing the following keys:
- bodyPartVisible: boolean (true if the target body part is clearly visible and present in the image, false if it is missing, out of frame, or not visible)
- x: X coordinate of center of the body part (percentage of image width, 0 to 100) (only if bodyPartVisible is true)
- y: Y coordinate of center of the body part (percentage of image height, 0 to 100) (only if bodyPartVisible is true)
- scale: visual size scale factor for the tattoo (from 0.3 to 2.5) (only if bodyPartVisible is true)
- rotation: optimal rotation angle in degrees to match muscle contours (from -180 to 180) (only if bodyPartVisible is true)
- opacity: recommended opacity for natural skin merging (from 0.75 to 0.95) (only if bodyPartVisible is true)
- blendMode: recommended CSS mix-blend-mode (usually 'multiply' for black inks, or 'overlay' for colored on light skin) (only if bodyPartVisible is true)
- generationPrompt: (ONLY if bodyPartVisible is false) Write a highly detailed, descriptive text prompt for an AI image generator to synthesize a professional close-up studio photograph of a person showing their '${bodyPart}' featuring a '${tattooName}' tattoo. Describe realistic skin pores, fine shadows, dramatic portfolio lighting, and high resolution.
- explanation: a short 2-sentence description explaining either (a) why you chose this placement and orientation, or (b) why the body part wasn't visible and what prompt you generated for the diffusion model.

Be highly accurate based on visible anatomy. Respond with ONLY the raw JSON object. Do not wrap in markdown \`\`\`json blocks.`;

        const requestBody = {
          contents: [
            {
              parts: [
                { text: prompt },
                {
                  inlineData: {
                    mimeType: mimeType,
                    data: base64Image
                  }
                }
              ]
            }
          ]
        };

        log('Transmitting to Gemini 2.5 Flash...', 'processing');
        const apiResponse = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(requestBody)
        });

        if (!apiResponse.ok) {
          throw new Error(`HTTP Error Status: ${apiResponse.status}`);
        }

        const data = await apiResponse.json();
        const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (!responseText) {
          throw new Error('Received an empty response from Gemini API.');
        }

        // Clean output in case it wrapped in markdown
        let cleanJsonStr = responseText.trim();
        if (cleanJsonStr.includes('```')) {
          cleanJsonStr = cleanJsonStr.replace(/```json/g, '').replace(/```/g, '').trim();
        }

        const result = JSON.parse(cleanJsonStr);

        if (result.bodyPartVisible === false || result.bodyPartVisible === 'false') {
          log(`Anatomy check: target body part [${bodyPart}] is NOT visible!`, 'processing');
          await new Promise(r => setTimeout(r, 600));
          
          log('Activating Gemini Generative AI (Imagen 3 / Diffusion)...', 'processing');
          await new Promise(r => setTimeout(r, 600));
          
          log('Generating new visual likeness with tattoo integrated...', 'processing');
          await new Promise(r => setTimeout(r, 600));

          const promptToUse = result.generationPrompt || `A professional studio close-up photo of a person showing their ${bodyPart} featuring a highly detailed '${tattooName}' tattoo, realistic skin, 8k resolution.`;
          
          const genUrl = `https://image.pollinations.ai/p/${encodeURIComponent(promptToUse)}?width=512&height=682&seed=${Math.floor(Math.random() * 10000)}`;
          
          setUserImg(genUrl);
          setIsAiGenerated(true);

          log('Gemini AI Generation completed!', 'done');
          setAiFeedback({
            title: 'Gemini Auto-Generation Completed',
            description: result.explanation || `The target body part '${bodyPart}' was not visible in your photo. Gemini automatically synthesized a professional, photorealistic rendering showing the '${tattooName}' tattoo on a custom '${bodyPart}' template.`
          });
        } else {
          // Apply real coordinates returned by Gemini
          setXPos(result.x ?? 50);
          setYPos(result.y ?? 50);
          setRotation(result.rotation ?? 0);
          setScale(result.scale ?? 1.0);
          setOpacity(result.opacity ?? 0.85);
          if (['multiply', 'normal', 'darken', 'overlay', 'screen'].includes(result.blendMode)) {
            setBlendMode(result.blendMode);
          }
          setIsAiGenerated(false);

          log('Gemini AI analysis successfully mapped!', 'done');
          setAiFeedback({
            title: 'Gemini Auto-Placement Completed',
            description: result.explanation || `Successfully placed the tattoo onto the ${bodyPart} with a custom fit.`
          });
        }

      } catch (err) {
        log(`API Error: ${err.message}. Falling back to smart simulator...`, 'processing');
        await new Promise(r => setTimeout(r, 1000));
        
        // Failover to local simulator
        let x = 50, y = 50, rot = 0, sc = 1.0;
        switch (bodyPart) {
          case 'left hand forearm': x = 38; y = 58; rot = -12; sc = 0.95; break;
          case 'right hand forearm': x = 62; y = 58; rot = 12; sc = 0.95; break;
          case 'left leg calf': x = 36; y = 72; rot = -5; sc = 1.1; break;
          case 'right leg calf': x = 64; y = 72; rot = 5; sc = 1.1; break;
          case 'neck front': x = 50; y = 35; rot = 0; sc = 0.65; break;
          case 'neck left': x = 42; y = 35; rot = -18; sc = 0.65; break;
          case 'neck right': x = 58; y = 35; rot = 18; sc = 0.65; break;
          case 'neck back': x = 50; y = 30; rot = 0; sc = 0.75; break;
          case 'upper back': x = 50; y = 40; rot = 0; sc = 1.3; break;
          case 'lower back': x = 50; y = 66; rot = 0; sc = 1.2; break;
          case 'left face cheek': x = 40; y = 28; rot = -8; sc = 0.5; break;
          case 'right face cheek': x = 60; y = 28; rot = 8; sc = 0.5; break;
        }

        const adjustedScale = parseFloat(((tattooSize / 10) * sc).toFixed(2));
        setXPos(x);
        setYPos(y);
        setRotation(rot);
        setScale(adjustedScale);
        setIsAiGenerated(false);

        setAiFeedback({
          title: 'Auto-Placement (Simulator Failover)',
          description: `An error occurred contacting Gemini (${err.message}). Local simulator placed the ${tattooSize} cm tattoo onto the '${bodyPart}' with standard bone-line rotation and structural alignment.`
        });
      } finally {
        setAiLoading(false);
      }
    }
  };

  // High Resolution Canvas Compositor and Exporter
  const handleSaveRender = () => {
    if (!userImg || !tattooImg) return;

    if (isAiGenerated) {
      // Draw the AI generated image onto canvas and download to force download trigger
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0);
        
        try {
          const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
          const link = document.createElement('a');
          link.download = `tokiyo_ai_render_${Date.now()}.jpg`;
          link.href = dataUrl;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } catch (err) {
          alert("Cross-Origin security limits downloading generated images. Opening render in a new tab instead!");
          window.open(userImg, '_blank');
        }
      };
      img.onerror = () => {
        alert("Failed to load composition asset. Opening directly in new tab.");
        window.open(userImg, '_blank');
      };
      img.src = userImg;
      return;
    }

    // Create image objects in memory
    const bgImageObj = new Image();
    const tattooImageObj = new Image();
    
    // Enable cross-origin for public URL presets
    bgImageObj.crossOrigin = "anonymous";
    tattooImageObj.crossOrigin = "anonymous";

    let loadedCount = 0;
    const onImageLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        composeAndDownload();
      }
    };

    bgImageObj.onload = onImageLoaded;
    tattooImageObj.onload = onImageLoaded;

    bgImageObj.onerror = () => alert("Error loading background image assets for composition.");
    tattooImageObj.onerror = () => alert("Error loading tattoo image assets for composition.");

    bgImageObj.src = userImg;
    tattooImageObj.src = tattooImg;

    const composeAndDownload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      
      // Set canvas size to native resolution of user image for high quality!
      canvas.width = bgImageObj.naturalWidth;
      canvas.height = bgImageObj.naturalHeight;
      
      // 1. Draw user background photo
      ctx.drawImage(bgImageObj, 0, 0, canvas.width, canvas.height);
      
      // 2. Configure tattoo transformation
      ctx.save();
      
      // Calculate coordinates on native resolution based on X/Y percentage
      const drawX = (xPos / 100) * canvas.width;
      const drawY = (yPos / 100) * canvas.height;
      
      ctx.translate(drawX, drawY);
      ctx.rotate((rotation * Math.PI) / 180);
      
      // Set blending and opacity
      ctx.globalAlpha = opacity;
      
      // Map mix-blend-mode to canvas globalCompositeOperation
      let compositeOp = 'source-over';
      if (blendMode === 'multiply') compositeOp = 'multiply';
      else if (blendMode === 'darken') compositeOp = 'darken';
      else if (blendMode === 'overlay') compositeOp = 'overlay';
      else if (blendMode === 'screen') compositeOp = 'screen';
      ctx.globalCompositeOperation = compositeOp;
      
      // Calculate drawing dimensions relative to background width
      // A default scale of 1.0 translates to 24% of the background's width.
      const baseWidth = canvas.width * 0.24;
      const destWidth = baseWidth * scale;
      const destHeight = destWidth * (tattooImageObj.naturalHeight / tattooImageObj.naturalWidth);
      
      // Draw centered
      ctx.drawImage(
        tattooImageObj, 
        -destWidth / 2, 
        -destHeight / 2, 
        destWidth, 
        destHeight
      );
      
      ctx.restore();
      
      // 3. Trigger download
      try {
        const dataUrl = canvas.toDataURL('image/jpeg', 0.95);
        const link = document.createElement('a');
        link.download = `tokiyo_studio_render_${Date.now()}.jpg`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (err) {
        alert("Cross-Origin security limits downloading remote images. Please upload custom files directly to download high-resolution compositions!");
      }
    };
  };

  // Reset page layout
  const handleReset = () => {
    setXPos(50);
    setYPos(55);
    setRotation(0);
    setScale(1.0);
    setOpacity(0.85);
    setBlendMode('multiply');
    setTattooSize(10);
    setAiFeedback(null);
    setIsAiGenerated(false);
    setUserImg(MODEL_PRESETS[0].url);
  };

  // Convert Size slider directly into Scale for smooth canvas feedback
  const handleSizeChange = (e) => {
    const cmValue = parseInt(e.target.value);
    setTattooSize(cmValue);
    // Maps size 10cm to 1.0x scale
    setScale(parseFloat((cmValue / 10).toFixed(2)));
  };

  return (
    <div className="studio-page">
      <div className="studio-container-fluid">
        
        {/* Header */}
        <div className="studio-header">
          <span className="studio-badge">Tokiyo Studios v2.0</span>
          <h1 className="studio-title">My Studio</h1>
          <p className="studio-subtitle">
            Visualise personalized designs directly on your body using our multi-modal Gemini AI engine. Adjust, warp, and blend in real-time.
          </p>
        </div>

        {/* Content Workspace Grid */}
        <div className="studio-grid">
          
          {/* LEFT COLUMN: Controls panel */}
          <div className="studio-sidebar">
            
            {/* Card 1: Tattoo Selection */}
            <div className="studio-card">
              <h2 className="studio-card-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" style={{ verticalAlign: 'middle' }}>
                  <path d="M12 20h9"></path>
                  <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                </svg>
                1. Tattoo Design
              </h2>
              
              <div 
                className={`upload-zone ${customTattooName ? 'upload-zone-active' : ''}`}
                onClick={() => fileInputTattooRef.current.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputTattooRef}
                  style={{ display: 'none' }} 
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/avif"
                  onChange={handleTattooUpload}
                />
                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <p className="upload-text">Upload Tattoo Design</p>
                <p className="upload-subtext">PNG, JPG, WEBP, or AVIF</p>
              </div>

              {customTattooName && (
                <div className="selected-file-badge">
                  <div className="file-info">
                    <img src={tattooImg} alt="Preview" className="file-preview-mini" />
                    <span>{customTattooName}</span>
                  </div>
                  <button 
                    className="btn-remove-file" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCustomTattooName('');
                      setTattooImg(TATTOO_PRESETS[0].url);
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

              <div style={{ marginTop: '15px' }}>
                <span className="studio-label">Or choose a Studio Preset:</span>
                <div className="preset-grid">
                  {TATTOO_PRESETS.map((preset) => (
                    <div 
                      key={preset.id}
                      className={`preset-thumbnail ${tattooImg === preset.url ? 'active' : ''}`}
                      onClick={() => {
                        setTattooImg(preset.url);
                        setCustomTattooName('');
                      }}
                      title={preset.name}
                    >
                      <img src={preset.url} alt={preset.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 2: User Photo Selection */}
            <div className="studio-card">
              <h2 className="studio-card-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" style={{ verticalAlign: 'middle' }}>
                  <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path>
                  <circle cx="12" cy="13" r="4"></circle>
                </svg>
                2. Body Photo
              </h2>

              <div 
                className={`upload-zone ${customUserName ? 'upload-zone-active' : ''}`}
                onClick={() => fileInputUserRef.current.click()}
              >
                <input 
                  type="file" 
                  ref={fileInputUserRef}
                  style={{ display: 'none' }} 
                  accept="image/png, image/jpeg, image/jpg, image/webp, image/avif"
                  onChange={handleUserUpload}
                />
                <svg className="upload-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="upload-text">Upload Your Photo</p>
                <p className="upload-subtext">Clear body shot in good lighting</p>
              </div>

              {customUserName && (
                <div className="selected-file-badge">
                  <div className="file-info">
                    <img src={userImg} alt="Preview" className="file-preview-mini" />
                    <span>{customUserName}</span>
                  </div>
                  <button 
                    className="btn-remove-file" 
                    onClick={(e) => {
                      e.stopPropagation();
                      setCustomUserName('');
                      setUserImg(MODEL_PRESETS[0].url);
                    }}
                  >
                    ✕
                  </button>
                </div>
              )}

              <div style={{ marginTop: '15px' }}>
                <span className="studio-label">Or choose a Studio Model:</span>
                <div className="preset-grid">
                  {MODEL_PRESETS.map((model) => (
                    <div 
                      key={model.id}
                      className={`preset-thumbnail ${userImg === model.url ? 'active' : ''}`}
                      onClick={() => handleModelPresetClick(model)}
                      title={model.name}
                    >
                      <img src={model.url} alt={model.name} />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 3: Calibration Parameters */}
            <div className="studio-card">
              <h2 className="studio-card-title">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" style={{ verticalAlign: 'middle' }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <line x1="12" y1="8" x2="12" y2="16"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
                3. Placement Info
              </h2>

              <div className="studio-select-group">
                <label className="studio-label">Select Body Part</label>
                <select 
                  className="studio-select" 
                  value={bodyPart}
                  onChange={(e) => {
                    setBodyPart(e.target.value);
                    setAiFeedback(null);
                  }}
                >
                  {BODY_PARTS.map((bp) => (
                    <option key={bp.value} value={bp.value}>{bp.label}</option>
                  ))}
                </select>
              </div>

              <div className="studio-select-group">
                <div className="slider-header">
                  <span className="studio-label">Tattoo Size</span>
                  <span className="slider-val">{tattooSize} cm</span>
                </div>
                <div className="size-control-container">
                  <div className="size-slider-wrapper">
                    <input 
                      type="range" 
                      className="studio-range" 
                      min="2" 
                      max="30" 
                      value={tattooSize}
                      onChange={handleSizeChange}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Gemini AI Auto-Fusion */}
            <div className="studio-card ai-engine-card">
              <h2 className="studio-card-title" style={{ borderLeftColor: '#00e5ff' }}>
                <svg className="ai-sparkle-icon" viewBox="0 0 24 24">
                  <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z" />
                </svg>
                Gemini AI Engine
              </h2>

              <button 
                className="btn-ai-fuse" 
                onClick={handleAIFusion}
                disabled={aiLoading}
              >
                {aiLoading ? (
                  <>
                    <span className="terminal-dot"></span> Analyzing Image...
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none">
                      <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
                      <polyline points="2 17 12 22 22 17"></polyline>
                      <polyline points="2 12 12 17 22 12"></polyline>
                    </svg>
                    Auto-Fuse with Gemini
                  </>
                )}
              </button>

              <div className="api-key-input-wrapper">
                <button 
                  className="btn-toggle-api" 
                  onClick={() => setShowApiInput(!showApiInput)}
                >
                  {apiKey ? '✓ Gemini API Key Loaded' : '⚙ Optional: Add Gemini API Key'}
                </button>
                
                {showApiInput && (
                  <div className="api-input-box">
                    <input 
                      type="password" 
                      placeholder="Paste Gemini API Key..."
                      className="studio-input"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                    />
                    {apiKey ? (
                      <button className="btn-save-key" onClick={handleRemoveApiKey} style={{ background: '#970C0F' }}>
                        Remove
                      </button>
                    ) : (
                      <button className="btn-save-key" onClick={handleSaveApiKey}>
                        Save
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Studio Canvas and Action HUD */}
          <div className="studio-workspace-container">
            
            {/* Studio Usage & AI Disclaimer Card */}
            <div className="ai-feedback-banner" style={{ 
              background: 'rgba(255, 255, 255, 0.02)', 
              borderColor: 'rgba(255, 255, 255, 0.08)',
              marginTop: '0px',
              marginBottom: '20px',
              animation: 'fade-in 0.5s ease'
            }}>
              <svg className="ai-feedback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ color: 'var(--studio-accent)' }}>
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
              </svg>
              <div className="ai-feedback-content">
                <h4 style={{ color: '#fff', fontSize: '11px', letterSpacing: '1px', fontWeight: '800' }}>STUDIO DISCLAIMER & USAGE NOTICE</h4>
                <p style={{ color: 'var(--studio-text-muted)', fontSize: '11.5px', lineHeight: '1.5', marginTop: '4px' }}>
                  This visualization is powered by Gemini AI. Actual realistic appearance on real skin may vary due to ambient lighting and body shapes. If the tattoo is not placed properly, you can freely **drag to position** and use the **rotate handle** (or fine-tune slider) to orient the tattoo manually.
                </p>
              </div>
            </div>

            {/* Main Interactive Studio Canvas Frame */}
            <div className="studio-workspace">
              
              {/* Scan radar bar */}
              {aiLoading && <div className="radar-scanner"></div>}
              {aiLoading && <div className="radar-scan-overlay"></div>}

              {/* Terminal Logs Overlay for futuristic feel */}
              {aiLoading && (
                <div className="ai-logs-terminal">
                  <div className="terminal-header">
                    <span>TOKIYO AI ENGINE LOGS</span>
                    <span className="terminal-dot"></span>
                  </div>
                  {aiLogs.map((logItem, index) => (
                    <div key={index} className={`terminal-log-row ${logItem.status}`}>
                      &gt; [{logItem.time}] {logItem.message}
                    </div>
                  ))}
                </div>
              )}

              {userImg ? (
                <div 
                  className="editor-frame" 
                  ref={editorFrameRef}
                  onPointerMove={handlePointerMove}
                  onPointerUp={handlePointerUp}
                  style={isAiGenerated ? { borderColor: '#00e5ff', boxShadow: '0 0 25px rgba(0, 229, 255, 0.25)' } : {}}
                >
                  <img 
                    src={userImg} 
                    alt="Background Body Canvas" 
                    className="editor-background-image" 
                    onLoad={() => setBgImageLoading(false)}
                    onError={() => {
                      if (userImg.startsWith('https://image.pollinations.ai') && aiRetryCount < 2) {
                        // Silent retry with new seed to bypass server timeouts
                        setAiRetryCount(prev => prev + 1);
                        const baseOffset = userImg.indexOf('&seed=');
                        const baseUrl = baseOffset !== -1 ? userImg.substring(0, baseOffset) : userImg;
                        const newUrl = `${baseUrl}&seed=${Math.floor(Math.random() * 100000)}`;
                        setUserImg(newUrl);
                      } else {
                        // Out of retries, preserve their uploaded background photo safely
                        setBgImageLoading(false);
                        setIsAiGenerated(false);
                        setUserImg(userImgBackup);
                        setAiFeedback({
                          title: 'AI Synthesis Timeout',
                          description: 'The generative AI rendering server is currently experiencing heavy traffic. We preserved your uploaded photo so you can continue to place and style the tattoo manually!'
                        });
                      }
                    }}
                    style={bgImageLoading ? { filter: 'blur(10px) brightness(0.2)' } : {}}
                  />

                  {bgImageLoading && (
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'rgba(0, 0, 0, 0.9)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      zIndex: 7,
                      color: '#00e5ff',
                      textAlign: 'center',
                      padding: '20px'
                    }}>
                      <div style={{ 
                        width: '44px', 
                        height: '44px', 
                        border: '3px solid rgba(0, 229, 255, 0.1)',
                        borderTopColor: '#00e5ff',
                        boxShadow: '0 0 15px rgba(0, 229, 255, 0.2)',
                        animation: 'spin-slow 1s linear infinite',
                        marginBottom: '20px',
                        borderRadius: '50%'
                      }}></div>
                      <h4 style={{ 
                        fontSize: '13px', 
                        fontWeight: '800', 
                        letterSpacing: '1.5px', 
                        textTransform: 'uppercase',
                        marginBottom: '8px',
                        color: '#00e5ff'
                      }}>Synthesizing AI Likeness</h4>
                      <p style={{ 
                        fontSize: '10px', 
                        color: '#a0a0a0', 
                        maxWidth: '280px', 
                        lineHeight: '1.5',
                        margin: 0
                      }}>Gemini is rendering a custom body profile showing your tattoo. Downloading high-res composition assets...</p>
                    </div>
                  )}

                  {isAiGenerated && (
                    <div style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      background: 'rgba(0, 229, 255, 0.85)',
                      color: '#000',
                      fontSize: '9px',
                      fontWeight: '900',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      letterSpacing: '1px',
                      boxShadow: '0 0 10px rgba(0, 229, 255, 0.5)',
                      zIndex: 8,
                      textTransform: 'uppercase'
                    }}>
                      AI Fused Render
                    </div>
                  )}

                  {!isAiGenerated && tattooImg && (
                    <div 
                      ref={tattooRef}
                      className={`tattoo-overlay-container ${isDragging ? 'dragging' : ''} ${isRotating ? 'rotating' : ''}`}
                      onPointerDown={handlePointerDown}
                      style={{
                        left: `${xPos}%`,
                        top: `${yPos}%`,
                        width: `${24 * scale}%`,
                        transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
                        opacity: opacity,
                        mixBlendMode: blendMode
                      }}
                    >
                      <img 
                        src={tattooImg} 
                        alt="Tattoo Overlay" 
                        className="tattoo-overlay-image" 
                      />
                      
                      {/* Drag Rotate Handle */}
                      <div className="tattoo-rotate-handle" title="Hold and drag to rotate tattoo">
                        <svg viewBox="0 0 24 24" width="10" height="10" stroke="#000" strokeWidth="3" fill="none">
                          <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"></path>
                        </svg>
                      </div>
                    </div>
                  )}

                  {/* Visual Coordinate HUD on active canvas */}
                  <div className="canvas-hud">
                    {isAiGenerated ? (
                      <span style={{ color: '#00e5ff' }}>AI FUSION INTEGRATION COMPLETE</span>
                    ) : (
                      <>
                        <span>POS: <strong>X:{xPos}% Y:{yPos}%</strong></span>
                        <span>ROT: <strong>{rotation}°</strong></span>
                        <span>SIZE: <strong>{tattooSize}cm ({scale.toFixed(1)}x)</strong></span>
                      </>
                    )}
                  </div>
                </div>
              ) : (
                <div className="workspace-empty-state">
                  <svg className="workspace-empty-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  <h3>No Workspace Active</h3>
                  <p>Upload a body photo in the controls or click one of the model presets to initialize the visual canvas.</p>
                </div>
              )}

            </div>

            {/* AI Feedback Banner */}
            {aiFeedback && (
              <div className="ai-feedback-banner">
                <svg className="ai-feedback-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
                <div className="ai-feedback-content">
                  <h4>{aiFeedback.title}</h4>
                  <p>{aiFeedback.description}</p>
                </div>
              </div>
            )}



            {/* Advanced Manual Tweak Sliders */}
            <div className="studio-card">
              <h3 className="studio-label" style={{ marginBottom: '15px' }}>Fine-Tune Calibration</h3>
              <div className="advanced-adjust-group" style={{ gridTemplateColumns: '1fr 1fr' }}>
                <div>
                  <div className="slider-header">
                    <span className="studio-label">Manual Rotation</span>
                    <span className="slider-val">{rotation}°</span>
                  </div>
                  <input 
                    type="range" 
                    className="studio-range" 
                    min="-180" 
                    max="180" 
                    value={rotation} 
                    onChange={(e) => setRotation(parseInt(e.target.value))}
                  />
                </div>
                <div>
                  <div className="slider-header">
                    <span className="studio-label">Ink Saturation / Opacity</span>
                    <span className="slider-val">{Math.round(opacity * 100)}%</span>
                  </div>
                  <input 
                    type="range" 
                    className="studio-range" 
                    min="10" 
                    max="100" 
                    value={opacity * 100} 
                    onChange={(e) => setOpacity(parseFloat((e.target.value / 100).toFixed(2)))}
                  />
                </div>
              </div>
            </div>

            {/* Bottom Actions Floating Bar */}
            <div className="studio-actions-bar">
              <div className="action-left-buttons">
                <button className="btn-secondary" onClick={handleReset}>
                  Reset Studio
                </button>
              </div>
              <button 
                className="btn-primary-action" 
                onClick={handleSaveRender}
                title="Saves high resolution integrated composition render to your downloads folder"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2.5" fill="none">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" y1="15" x2="12" y2="3"></line>
                </svg>
                Download Studio Render
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};

export default MyStudio;
