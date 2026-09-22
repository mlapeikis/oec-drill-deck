/* Full-patient scenarios — the two scenario stations of the OEC practical.
   Built on Skill Guide 7-1, with the CPI structure of the real sheets.

   Beat types:
     info   — narrative or findings. Not scored. Moves the patient's state forward.
     recall — you say your answer out loud, then a rubric appears and you self-mark
              each item. cpi:true items are Critical Performance Indicators.
     choice — a decision with consequences. One option is ok:true. Options are
              shuffled at runtime. cpi:true on the beat makes a wrong pick fatal
              to the station, the same way it would be on the day.                 */

const SCENARIOS = [

/* ============================ TRAUMA ============================ */
{
id:"tree-strike", kind:"trauma", title:"High-speed tree strike", difficulty:"Hard",
setting:"Ridge Run, mid-mountain · 10:40 · 18°F, light snow, wind 15mph",
dispatch:"Lift ops reports a skier down in the trees, skier's left of Ridge Run below the traverse. The reporting party says he 'went in hard and isn't moving right.' You are first on scene with one partner three minutes behind you.",
teaches:"Scene safety under real pressure, the OEC primary assessment order, and the discipline of not being pulled to the obvious injury.",
beats:[

{type:"info", text:"You ski to the reporting party, who waves you into the trees. About four metres off the run you see a male in his thirties, supine, helmet on, one ski still attached. His skis and poles are scattered uphill. He is not moving. Above him the slope is steep and other skiers are still coming through the traverse."},

{type:"recall",
 prompt:"Before you touch this patient, say out loud everything you do and everything you announce. Take your time — this is the part that fails candidates.",
 rubric:[
  {t:"Perform a scene size-up", },
  {t:"State out loud that the scene is safe — or make it safe first", cpi:true},
  {t:"Address the uphill hazard: post someone, plant crossed skis above the patient, or move traffic", cpi:true},
  {t:"Introduce yourself and obtain permission to treat (implied consent if unresponsive — say so)", cpi:true},
  {t:"Determine the mechanism of injury and state it", },
  {t:"Take Standard Precautions — gloves, and say it", cpi:true},
  {t:"Determine the number of patients", },
  {t:"Call for additional resources: backboard, extrication, partner ETA", }
 ]},

{type:"choice", cpi:true,
 prompt:"You kneel at his head. He does not respond to your voice. There is blood on the snow near his shoulder. What is your first action on the patient?",
 options:[
  {t:"Take manual in-line stabilization of the head and check for life-threatening bleeding",
   ok:true, say:"Correct. You hold the head and immediately sweep for major bleed. The blood is from a scalp laceration above the ear — oozing, not spurting. Your gloved hand controls it with direct pressure while you keep the head stable."},
  {t:"Open the airway with a head-tilt chin-lift",
   say:"You have just moved the cervical spine on an unresponsive patient with a high-energy mechanism. The jaw thrust exists for exactly this patient. This is the kind of error an evaluator stops the scenario for."},
  {t:"Remove his helmet so you can see his face",
   say:"Too early, and not alone. The helmet comes off only if it prevents airway management or assessment, and it takes two rescuers with continuous stabilization. You have neither yet."},
  {t:"Check his pulse at the wrist and start counting",
   say:"You have skipped past the airway and any major bleed to a number that will not change what you do in the next thirty seconds. Radial pulse belongs in the primary assessment, but not first."}
 ]},

{type:"info", text:"The scalp bleed is controlled under a gloved hand. He is making snoring respirations — noisy, irregular, roughly 8 per minute. His skin is pale and cool. You cannot see the chest moving well under his jacket."},

{type:"choice", cpi:true,
 prompt:"Snoring respirations at 8 per minute. What do you do?",
 options:[
  {t:"Jaw thrust to open the airway while maintaining in-line stabilization, then assist ventilations",
   ok:true, say:"Correct. The jaw thrust clears the snoring immediately — it was the tongue. Rate is still inadequate at 8, so you begin assisting with a bag-valve mask, one breath every 5 to 6 seconds, watching for chest rise."},
  {t:"Insert an oropharyngeal airway immediately",
   say:"Reposition first — the snoring is the tongue and a manual manoeuvre fixes it without instrumentation. An OPA may follow if he tolerates it, but a jaw thrust is faster and carries no gag risk."},
  {t:"Apply a non-rebreather at 15 lpm and monitor",
   say:"A non-rebreather does nothing for a patient who is not moving enough air. At 8 breaths per minute with poor tidal volume he needs you to breathe for him, not to be offered richer air he cannot draw in."},
  {t:"Roll him to the recovery position to protect the airway",
   say:"Rolling a patient with this mechanism, without spinal precautions and without a reason forcing your hand, is exactly the manoeuvre the spinal CPIs exist to prevent."}
 ]},

{type:"recall",
 prompt:"Your partner arrives. Say out loud the handoff you give her in the next fifteen seconds, and what you ask her to do.",
 rubric:[
  {t:"State mechanism: high-speed tree strike, found unresponsive", },
  {t:"State what you've found and done: airway opened with jaw thrust, assisting ventilations, scalp bleed controlled", },
  {t:"State LOR — unresponsive, or responds only to pain", },
  {t:"Hand off one specific job clearly rather than describing the whole picture", },
  {t:"Ask for the backboard, collar and oxygen", },
  {t:"Ask her to update dispatch — ALS, likely head injury, need for rapid transport", }
 ]},

{type:"info", text:"Your partner takes over ventilations. You now have hands free for the rest of the primary assessment. He responds to a trapezius pinch with a groan and slight withdrawal — P on AVPU. Radial pulse is present, 58 and bounding. Skin pale, cool, dry."},

{type:"choice",
 prompt:"Pulse 58 and bounding in a trauma patient who took a high-energy hit to the head. What does this suggest?",
 options:[
  {t:"Rising intracranial pressure — watch for the rest of Cushing's triad and expedite",
   ok:true, say:"Right. Bradycardia in a trauma patient is not reassurance, it's a warning. You check the blood pressure: 168/96. Respirations are irregular. That's Cushing's triad, and it means the brain is under pressure."},
  {t:"Normal athletic resting heart rate — no concern",
   say:"A conditioned athlete can sit below 60 at rest. But this patient is unresponsive after a head strike, and reading a bradycardia as fitness is how a herniating patient gets a relaxed transport."},
  {t:"Early hypovolemic shock from the scalp laceration",
   say:"Hypovolemia drives the heart rate up, not down, and a controlled scalp laceration is not that volume. The bounding quality argues against it too."},
  {t:"Hypothermia from lying in the snow",
   say:"He has been down a few minutes, not an hour. Cold will matter shortly and you should be insulating him, but it does not explain a bounding bradycardia this early."}
 ]},

{type:"recall",
 prompt:"Given Cushing's triad, say out loud how the rest of this call goes — your priorities, packaging and transport decisions.",
 rubric:[
  {t:"Recognize this as a load-and-go — scene time is the thing you control", cpi:true},
  {t:"Maintain airway and adequate ventilation throughout", cpi:true},
  {t:"Apply a cervical collar and secure to a long backboard with in-line stabilization maintained", cpi:true},
  {t:"Insulate from the snow underneath, not just blankets on top", },
  {t:"Reassess LOR and vitals at least every 5 minutes — he is unstable", },
  {t:"Note and report the time of the injury and any change in LOR since your arrival", },
  {t:"Expedite ALS rendezvous; consider air transport per your patrol's protocol", },
  {t:"Do not delay transport to complete a detailed secondary exam on the hill", }
 ]},

{type:"info", text:"He is collared, boarded, insulated and in the toboggan within nine minutes of your arrival. On the way down his groan becomes less responsive and his right pupil is now larger than his left. You relay that to the aid room by radio before you arrive. ALS is waiting."},

{type:"recall",
 prompt:"Last one. Say your handoff report to the paramedic crew.",
 rubric:[
  {t:"Age, sex, and mechanism", },
  {t:"Chief complaint or presenting problem — unresponsive after tree strike", },
  {t:"Your findings including the trend: LOR declining, new unequal pupils", },
  {t:"Care given: airway, ventilation, bleeding control, spinal precautions, warming", },
  {t:"Vital signs with times, showing the trend rather than one set", },
  {t:"Time of injury and time of your arrival", },
  {t:"Anything you could not do and why", }
 ]}
]},

{
id:"park-spinal", kind:"trauma", title:"Terrain park — the distracting injury", difficulty:"Medium",
setting:"Lower terrain park · 14:15 · 26°F, bluebird",
dispatch:"A snowboarder came up short on the second jump and landed flat on her back. She's sitting up, awake, and park staff say she's 'fine, just wants her wrist looked at.'",
teaches:"Why an obvious painful injury is the most dangerous thing on a scene, and how to assess a patient who is actively arguing with you.",
beats:[

{type:"info", text:"You arrive to find a woman in her twenties sitting in the flat landing, cradling her left wrist, helmet still on. Her board is off. She's alert, talking, and mildly annoyed. 'I'm fine. I just need a wrap on this and I'll go down myself.' The wrist has an obvious deformity."},

{type:"recall",
 prompt:"She's awake, talking, and telling you she's fine. Say out loud your opening — everything before you look at that wrist.",
 rubric:[
  {t:"State that the scene is safe — this is a landing zone, stop uphill traffic", cpi:true},
  {t:"Post someone or close the feature above her", cpi:true},
  {t:"Introduce yourself and obtain permission to treat — she is competent and can refuse", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Determine mechanism: flat landing from height, axial load through the spine", },
  {t:"Take manual in-line stabilization before she moves further", cpi:true},
  {t:"Form a general impression and assess LOR — she is A on AVPU", },
  {t:"Obtain the chief complaint in her words, not the one you can see", cpi:true}
 ]},

{type:"choice", cpi:true,
 prompt:"She says the wrist is the only thing that hurts, and she wants to stand up. What's your move?",
 options:[
  {t:"Hold in-line stabilization, explain why, and assess the spine before anything else",
   ok:true, say:"Correct, and it takes some nerve. You explain plainly: a flat landing from that height loads the spine, and a wrist that hurts this much can mask a back that also hurts. She agrees to stay put."},
  {t:"Splint the wrist first — treating her complaint builds trust, then assess the spine",
   say:"Understandable instinct, wrong order. A distracting injury is precisely why you cannot trust her report of 'nothing else hurts.' Once she's up, the moment to protect the spine has passed."},
  {t:"She's alert and oriented and refusing — document the refusal and let her ski down",
   say:"She hasn't refused; she's told you she feels fine. Those aren't the same thing, and you haven't yet given her the information she'd need for a refusal to be informed."},
  {t:"Let her stand slowly while you watch for symptoms",
   say:"A negative walk test does not rule out an unstable spinal injury, and if she has one, you have just let her load it under her own body weight."}
 ]},

{type:"info", text:"She stays put. Her wrist is obviously angulated, fingers pink and warm. She denies neck pain but reports 'a weird ache' in her mid back. No numbness or tingling. No loss of consciousness — she remembers the whole thing."},

{type:"recall",
 prompt:"Say out loud your focused spinal assessment on this patient — what you check and what you ask.",
 rubric:[
  {t:"Palpate the spine from cervical to lumbar for midline tenderness, deformity or step-off", cpi:true},
  {t:"Assess CMS in all four extremities", cpi:true},
  {t:"Ask about numbness, tingling, weakness, or any transient symptom since the fall", },
  {t:"Ask specifically about a 'stinger' or electric sensation, which she may not volunteer", },
  {t:"Check for incontinence or a band-like sensation around the trunk", },
  {t:"Establish whether any factor makes her report unreliable — pain, distraction, intoxication, head injury", },
  {t:"Document the specific level of any tenderness you find", }
 ]},

{type:"info", text:"She has midline tenderness at roughly T6 to T8. CMS is intact and symmetrical in all four extremities. No neurologic deficit. The wrist remains deformed with good distal CMS."},

{type:"choice", cpi:true,
 prompt:"Midline thoracic tenderness, intact neuro, plus a deformed wrist. How do you sequence the care?",
 options:[
  {t:"Full spinal motion restriction first, splinting the wrist as part of packaging",
   ok:true, say:"Correct. Spine wins. You collar her, and the wrist gets splinted in a position of comfort against her body as you secure her — the splint doesn't need its own separate production."},
  {t:"Splint the wrist thoroughly, then apply spinal precautions",
   say:"You've made an unstable spine wait on a stable extremity injury, and every minute she sits unprotected is a minute a fracture can displace."},
  {t:"Spinal precautions only — the wrist can be handled at the aid room",
   say:"Closer, but an untreated deformed extremity will move and hurt during the toboggan ride, and pain makes patients move. Splint it as part of packaging."},
  {t:"Apply traction to the wrist to realign it, then board her",
   say:"Distal CMS is intact, so there's no indication to realign, and traction on a wrist is not a technique in your scope here."}
 ]},

{type:"recall",
 prompt:"She asks: 'Do I really need all this? I feel fine.' Say out loud how you answer her.",
 rubric:[
  {t:"Answer honestly and in plain language rather than deflecting", },
  {t:"Explain the specific finding — midline tenderness where you pressed", },
  {t:"Explain the risk: a fracture that isn't displaced now can displace if she moves wrong", },
  {t:"Acknowledge that she may well be fine and this may turn out to be precautionary", },
  {t:"Avoid either scaring her into compliance or minimizing to keep her calm", },
  {t:"Confirm she understands, and document her consent", }
 ]},

{type:"info", text:"She accepts. You package her with the wrist splinted across her abdomen, insulate her from the snow, and take a second set of vitals before moving. Reassessment at the aid room shows no change in CMS."}
]},

{
id:"mogul-leg", kind:"trauma", title:"Lower leg in the moguls", difficulty:"Easy",
setting:"Upper Chute, mogul field · 11:05 · 22°F",
dispatch:"Skier down in the moguls, reported leg injury, conscious and talking.",
teaches:"The bread-and-butter patrol call, and the CMS bookend that fails more candidates than any complex skill.",
beats:[

{type:"info", text:"A man in his fifties is sitting in a trough, one ski off, the other still attached. He's alert, in obvious pain, holding his right lower leg. He tells you he caught an edge and felt a crack. The slope above is steep with limited sight lines."},

{type:"recall",
 prompt:"Say out loud everything you do before you assess the leg.",
 rubric:[
  {t:"State that the scene is safe and address the uphill sight line", cpi:true},
  {t:"Post an uphill guard or plant crossed skis above", cpi:true},
  {t:"Introduce yourself and obtain permission to treat", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Determine mechanism and consider whether it could also have loaded the spine or hip", },
  {t:"Obtain the chief complaint", cpi:true},
  {t:"Complete a primary assessment — do not skip it because the injury is obvious", }
 ]},

{type:"choice", cpi:true,
 prompt:"His boot is still on the injured leg. What do you do before removing it?",
 options:[
  {t:"Assess distal CMS indirectly — tap the boot, ask him to wiggle his toes",
   ok:true, say:"Correct, and this is the item candidates forget because the boot blocks the usual check. He can wiggle his toes and feels your tap. You state the finding out loud."},
  {t:"Remove the boot first, then check CMS — you can't assess through a boot",
   say:"You can, and the skill sheet requires it. Tapping the shell and asking for toe movement is the keyed technique. Skipping straight to removal loses a CPI."},
  {t:"Skip the CMS check since the boot provides support anyway",
   say:"The boot is not a splint, and 'before' is half of a CPI that exists in matched pairs. Without a baseline you can't tell whether anything you did made him worse."},
  {t:"Cut the boot off to save time",
   say:"Ski boots are expensive and almost never need cutting. Unbuckle, spread the shell, and remove it heel first with the ankle stabilized."}
 ]},

{type:"recall",
 prompt:"Say out loud the boot removal, step by step, including who does what.",
 rubric:[
  {t:"Rescuer 1 stabilizes the boot", },
  {t:"Rescuer 2 assesses distal CMS indirectly", cpi:true},
  {t:"Unbuckle or unlace completely, spread the shell, pull the tongue fully forward", },
  {t:"Rescuer 1 slides hands inside the boot and stabilizes the leg and ankle, holding firmly throughout", cpi:true},
  {t:"Rescuer 2 removes the boot, sliding the heel away from the foot first, then the toe", },
  {t:"Reassess distal CMS once the boot is off", cpi:true}
 ]},

{type:"info", text:"The boot is off. There is obvious deformity mid-shaft of the tibia with swelling, no break in the skin. Foot is warm, pink, pulse present, he can wiggle his toes and feels your touch."},

{type:"choice", cpi:true,
 prompt:"Closed mid-shaft tibia fracture, distal CMS intact. How do you splint?",
 options:[
  {t:"Splint in the position found, immobilizing the knee and ankle, then reassess CMS",
   ok:true, say:"Correct. Circulation is intact, so there's no indication to realign. Joint above and joint below, padded, secured — then the second half of the CMS bookend."},
  {t:"Apply gentle in-line traction to straighten it, then splint",
   say:"You realign when distal circulation is absent. It is present here, so manipulating an intact limb only adds pain and risk for no gain."},
  {t:"Apply a traction splint",
   say:"Traction splints are for mid-shaft femur fractures. On a tibia — and with the ankle involved — it's contraindicated."},
  {t:"Splint the lower leg only, leaving the knee free for the toboggan ride",
   say:"Immobilizing a long bone means capturing the joint above and the joint below. A free knee lets the fracture site move with every bump."}
 ]},

{type:"recall",
 prompt:"Say out loud everything remaining before and during the toboggan ride.",
 rubric:[
  {t:"Reassess CMS after splinting and state the finding", cpi:true},
  {t:"Complete a secondary assessment — check for injuries he hasn't mentioned", },
  {t:"Obtain a full set of vital signs", },
  {t:"Take a SAMPLE history including last oral intake, since he may go to surgery", },
  {t:"Insulate him from the snow and cover him for the descent", },
  {t:"Position head uphill and secure him in the toboggan", },
  {t:"Reassess vitals and CMS during or on arrival from the descent", },
  {t:"Give a structured handoff at the aid room", }
 ]}
]},

/* ============================ MEDICAL ============================ */
{
id:"lodge-chest", kind:"medical", title:"Chest pain in the base lodge", difficulty:"Medium",
setting:"Base lodge cafeteria · 12:30 · warm, crowded, loud",
dispatch:"Lodge staff report a male guest, sixties, 'not looking well' at a table. He's clutching his chest.",
teaches:"The medical primary assessment, the nitroglycerin checks, and resisting the urge to move a cardiac patient.",
beats:[

{type:"info", text:"A man in his sixties sits slumped at a cafeteria table, pale and sweating heavily despite the warm room. His wife is beside him, visibly frightened. He's awake and talking but short of breath. The cafeteria is packed and loud."},

{type:"recall",
 prompt:"Say out loud your first sixty seconds.",
 rubric:[
  {t:"Scene size-up — state the scene is safe", cpi:true},
  {t:"Introduce yourself and obtain permission to treat", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Determine nature of illness rather than mechanism — this is medical", },
  {t:"Form a general impression: pale, diaphoretic, short of breath, sitting still", },
  {t:"Assess LOR", },
  {t:"Assess airway, breathing, circulation", cpi:true},
  {t:"Obtain the chief complaint in his own words", cpi:true},
  {t:"Call for ALS early — do not wait for a diagnosis", },
  {t:"Manage the crowd and create working space around him", }
 ]},

{type:"recall",
 prompt:"Take an OPQRST on this patient. Say every question out loud.",
 rubric:[
  {t:"Onset — what were you doing when it started, and when exactly", },
  {t:"Provocation and palliation — does anything make it better or worse", },
  {t:"Quality — describe the pain in your own words", },
  {t:"Region and radiation — where is it, does it go anywhere", },
  {t:"Severity — scale of 0 to 10", },
  {t:"Time — how long has it been going on, is it constant or coming and going", },
  {t:"Also take SAMPLE, including allergies and current medications", cpi:true}
 ]},

{type:"info", text:"Crushing substernal pressure, onset 20 minutes ago while carrying a tray upstairs, radiating to the left jaw, 8 out of 10, constant. Nausea. He has a cardiac history, takes nitroglycerin and a beta-blocker, no allergies. He took one of his own nitro tablets ten minutes ago with no relief. Pulse 92 and irregular, respirations 24, BP 138/84, skin pale and diaphoretic."},

{type:"choice", cpi:true,
 prompt:"He asks whether he should take another nitroglycerin. What do you verify before assisting?",
 options:[
  {t:"That it is his own prescription, unexpired, his systolic BP is adequate, and he hasn't taken an erectile dysfunction medication recently",
   ok:true, say:"Correct, and the last one is the question candidates skip because it's awkward with his wife sitting there. Ask it anyway — discreetly if you can. He says no. BP supports a second dose."},
  {t:"That it is his own prescription and unexpired",
   say:"Half the check. Nitroglycerin is a vasodilator and can drop pressure sharply, and combined with a phosphodiesterase inhibitor it can cause catastrophic hypotension."},
  {t:"That he has taken fewer than three doses today",
   say:"Dose count matters for deciding whether this is angina or infarction, but it isn't the safety check that governs whether you assist with the next one."},
  {t:"Nothing — it's his own prescribed medication, so he can self-administer",
   say:"Once you're assisting, the checks are yours. 'It's his prescription' doesn't transfer the responsibility back to him."}
 ]},

{type:"choice",
 prompt:"His wife asks whether they should walk out to their car and drive to the hospital — it's twenty minutes away. What do you tell her?",
 options:[
  {t:"No — he should stay still, and ALS should come to him",
   ok:true, say:"Right. Exertion raises myocardial oxygen demand in a heart that is already starved, and if he arrests in a car on the access road, nothing you carry can help him. You keep him seated and comfortable and confirm ALS is en route."},
  {t:"Driving is reasonable if he feels able to walk",
   say:"A patient feeling able to walk tells you about his stoicism, not his coronary arteries. Walking a possible infarction to the parking lot is exactly the wrong intervention."},
  {t:"Let him decide — he knows his own history",
   say:"He does know his history, and that's valuable. But this is the moment to give a clear recommendation, not to hand back a decision he isn't positioned to make."},
  {t:"Yes, if you follow behind them in a patrol vehicle",
   say:"That gets you a cardiac arrest in a moving private car with a frightened spouse driving. The patient stays; the ambulance comes."}
 ]},

{type:"recall",
 prompt:"Say out loud the rest of your care while waiting for ALS.",
 rubric:[
  {t:"Keep him in a position of comfort, usually sitting up", },
  {t:"Give oxygen if he is hypoxic or in distress, titrated rather than blanket high-flow", },
  {t:"Consider aspirin per your protocol, after checking allergies and bleeding history", },
  {t:"Assist with nitroglycerin per protocol, rechecking BP before and after each dose", cpi:true},
  {t:"Keep him calm and limit exertion — do not let him walk", cpi:true},
  {t:"Reassess vital signs at least every 5 minutes — he is unstable", cpi:true},
  {t:"Have an AED at his side before you need it", },
  {t:"Gather his medication bottles to hand to the paramedics", },
  {t:"Look after the wife — she is frightened and she is also your best history source", }
 ]}
]},

{
id:"lift-ams", kind:"medical", title:"Altered at the top of the lift", difficulty:"Medium",
setting:"Top of the summit quad · 15:20 · 12°F, wind 25mph",
dispatch:"Lift attendant reports a skier acting strangely at the unload — 'drunk or something,' unsteady and not making sense.",
teaches:"Why 'drunk' is a diagnosis of exclusion, and the sequence for a patient who can't give you a history.",
beats:[

{type:"info", text:"At the top shack a woman in her forties is sitting on the bench, glassy-eyed and sweating despite the cold. Her speech is slurred and she's answering questions a beat late. The lift attendant says she nearly fell at the unload. She smells faintly sweet. A patroller you don't know says 'she's had a few, we see this every weekend.'"},

{type:"choice", cpi:true,
 prompt:"What's your working assumption?",
 options:[
  {t:"Altered mental status of unknown cause — intoxication is one possibility among many, and the dangerous ones get ruled out first",
   ok:true, say:"Correct, and it's the whole scenario. Hypoglycemia, hypoxia, head injury, stroke and hypothermia all present like this, and the sweet smell could be ketones rather than alcohol. You work it as AMS."},
  {t:"Intoxication — the presentation and the smell both fit",
   say:"This is the assumption that kills people. A hypoglycemic patient is routinely mistaken for a drunk, and the cost of being wrong is brain injury within minutes."},
  {t:"Hypothermia from the wind on the ride up",
   say:"Worth considering and you should get her out of the wind, but a single ride at 12°F rarely produces this, and it doesn't explain the diaphoresis."},
  {t:"Anxiety or a panic attack",
   say:"Doesn't fit slurred speech and near-collapse, and reaching for a psychological explanation before excluding medical ones is the same error as assuming she's drunk."}
 ]},

{type:"recall",
 prompt:"Say out loud your assessment approach for a patient with altered mental status who can't give you a reliable history.",
 rubric:[
  {t:"State the scene is safe, and get her out of the wind into the shack", cpi:true},
  {t:"Introduce yourself and obtain permission — implied consent if she can't give it", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Assess LOR with AVPU and orientation", cpi:true},
  {t:"Assess airway, breathing, circulation", cpi:true},
  {t:"Work through causes systematically — AEIOU-TIPS", },
  {t:"Check blood glucose if trained and equipped", },
  {t:"Look for a medical-alert bracelet, necklace or anklet", cpi:true},
  {t:"Check pupils and look for facial droop or unilateral weakness", },
  {t:"Check for signs of head injury — she may have fallen before boarding the lift", },
  {t:"Get history from her companions, her phone, or her pass record", },
  {t:"Obtain a full set of vital signs", }
 ]},

{type:"info", text:"Out of the wind, you find a medical-alert bracelet: Type 1 diabetic. Her pupils are equal and reactive, no facial droop, grip equal bilaterally. No head trauma. Blood glucose reads 41 mg/dL. She's awake, following simple commands slowly, and able to hold a cup."},

{type:"choice", cpi:true,
 prompt:"Glucose 41, awake, can swallow. What do you give her?",
 options:[
  {t:"Oral glucose, or a sugar-containing drink — something she can swallow, and stay with her",
   ok:true, say:"Correct. She takes glucose gel and a juice. Within about eight minutes she's oriented, apologetic, and hungry. You keep her seated and recheck."},
  {t:"Nothing by mouth until ALS arrives",
   say:"Overcautious and harmful here. She is awake and protecting her own airway, and untreated hypoglycemia injures the brain in minutes. Nothing by mouth applies to patients who can't swallow safely."},
  {t:"Insulin, since diabetics carry it and her body clearly isn't regulating",
   say:"This would kill her. Insulin drives glucose into cells and lowers blood sugar — the opposite of what a patient at 41 needs. Never administer insulin in the field."},
  {t:"Have her ski down to the aid room where you have better supplies",
   say:"A hypoglycemic patient on skis is a patient about to become a trauma patient. Treat her here; she isn't going anywhere under her own power."}
 ]},

{type:"recall",
 prompt:"She's improving and says she's fine to ski down and go home. Say out loud how you handle that.",
 rubric:[
  {t:"Recheck blood glucose and mental status before any decision", },
  {t:"Feed her something with complex carbohydrate and protein, not just sugar, so she doesn't rebound", },
  {t:"Establish why it happened — did she skip lunch, misjudge her insulin, ski harder than planned", },
  {t:"Explain that a rebound low is a real risk over the next few hours", },
  {t:"Strongly recommend evaluation, and recommend she not ski alone or drive immediately", },
  {t:"Recognize that she is now competent and can refuse — document carefully if she does", },
  {t:"Arrange transport down rather than letting her ski, even if she feels recovered", },
  {t:"Document the whole encounter including glucose readings with times", }
 ]},

{type:"info", text:"Repeat glucose is 96. She eats a sandwich from the shack, agrees to ride down in the toboggan rather than ski, and is met by her partner at the base. You document both glucose readings, the times, and what she was given."}
]},

{
id:"anaphylaxis", kind:"medical", title:"Anaphylaxis at the mid-mountain grill", difficulty:"Hard",
setting:"Mid-mountain grill deck · 13:10 · 30°F, sunny",
dispatch:"Guest having an allergic reaction on the deck. Caller says she 'can't breathe right.'",
teaches:"Recognizing systemic involvement fast, the auto-injector checks, and why improvement doesn't end the call.",
beats:[

{type:"info", text:"A woman in her thirties is on the deck, standing and gripping a railing. Her face is flushed and swelling, there are hives on her neck, and she's making a high-pitched noise on every breath in. A friend says she ate chili that 'must have had peanuts in it.' She got the first symptoms about four minutes ago."},

{type:"choice", cpi:true,
 prompt:"That high-pitched sound on inspiration. What is it and what does it mean?",
 options:[
  {t:"Stridor — the upper airway is swelling, and this is an immediate threat to life",
   ok:true, say:"Correct. Stridor in anaphylaxis means the airway is closing. This is the most time-critical thing on your mountain right now."},
  {t:"Wheezing — bronchospasm, treat with her inhaler if she has one",
   say:"Wheezing is expiratory and lower-airway. This is inspiratory and upper-airway, which is a different and more urgent problem, and an inhaler won't touch it."},
  {t:"Crackles — fluid in the alveoli",
   say:"Crackles are a lower-airway sound heard on auscultation, associated with fluid. This is audible across the deck and it's coming from her throat."},
  {t:"Hyperventilation from panic",
   say:"She has hives, facial swelling and a known exposure. Attributing airway noise to panic here costs her the minutes she has left."}
 ]},

{type:"recall",
 prompt:"Say out loud everything in your first thirty seconds.",
 rubric:[
  {t:"State the scene is safe", cpi:true},
  {t:"Introduce yourself and obtain permission", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Recognize anaphylaxis — two or more body systems with a known exposure", cpi:true},
  {t:"Ask immediately whether she carries an epinephrine auto-injector", cpi:true},
  {t:"Call for ALS and additional resources at once, before treating", cpi:true},
  {t:"Assess airway and breathing", cpi:true},
  {t:"Obtain the chief complaint and time of exposure", }
 ]},

{type:"info", text:"She has an EpiPen in her jacket pocket. Her friend hands it to you. She is still standing, still conscious, and the stridor is getting louder."},

{type:"recall",
 prompt:"Say out loud the auto-injector administration, start to finish.",
 rubric:[
  {t:"Confirm the medication is prescribed to this patient, not expired, not discoloured", cpi:true},
  {t:"Remove the safety cap, grasp firmly in the dominant hand, thumb clear of both ends", },
  {t:"Place the tip against the anterolateral thigh, midway between hip and knee", cpi:true},
  {t:"Through clothing is acceptable in an emergency", },
  {t:"Push firmly until the needle deploys — listen for the click", },
  {t:"Hold firm pressure for about 10 seconds", cpi:true},
  {t:"Remove and dispose of it safely in a sharps container", },
  {t:"Massage the injection site for 10 to 20 seconds", },
  {t:"Note and document the time and dose", cpi:true}
 ]},

{type:"info", text:"Within about three minutes the stridor eases noticeably. Her facial swelling stops progressing. She says she feels 'shaky but better' and can speak in full sentences. Pulse 124, respirations 22, BP 104/68."},

{type:"choice", cpi:true,
 prompt:"She's dramatically better and says she just wants to sit for a bit and then ski down with her friend. What do you do?",
 options:[
  {t:"Transport regardless — a biphasic reaction can recur hours later, and the epinephrine will wear off in 10 to 20 minutes",
   ok:true, say:"Correct, and this is the decision the scenario is testing. Epinephrine buys time; it doesn't cure the reaction. She needs to be somewhere with a second dose and an airway kit when it wears off."},
  {t:"Observe her for thirty minutes and release her if she stays well",
   say:"Thirty minutes is comfortably inside the window where the epinephrine is still working. You'd be releasing her right as her protection fades, and the biphasic window extends for hours."},
  {t:"She's competent and improving — document a refusal if she declines",
   say:"She can refuse, but she hasn't yet, and framing it as her call before you've made a strong recommendation isn't informed refusal. Recommend transport first, clearly, and document only if she then declines."},
  {t:"Give a second dose now to be safe, then release her",
   say:"A second dose is for a patient who isn't improving or who deteriorates again — not prophylaxis for discharge. And no dose count makes release appropriate here."}
 ]},

{type:"recall",
 prompt:"Say out loud everything else you do while waiting for transport.",
 rubric:[
  {t:"Keep her in a position of comfort — sitting up if she's breathing better that way", },
  {t:"Give high-flow oxygen", },
  {t:"Monitor airway continuously and be ready to assist ventilation", cpi:true},
  {t:"Reassess vital signs at least every 5 minutes", cpi:true},
  {t:"Watch specifically for the stridor returning as the epinephrine wears off", cpi:true},
  {t:"Keep the used auto-injector to hand over, and find out if she has a second", },
  {t:"Identify the trigger and get the actual ingredient list from the kitchen", },
  {t:"Keep her warm — she's shaky and on a cold deck", },
  {t:"Document the time of exposure, time of dose, and her response with times", }
 ]}
]},

{
id:"sweep-hypothermia", kind:"medical", title:"Found on sweep", difficulty:"Hard",
setting:"Skier's right of Lower Bowl, off-piste · 16:45 · 8°F, wind 30mph, light failing",
dispatch:"Closing sweep. A snowboarder was reported missing by his party ninety minutes ago. You find a set of tracks leading into a gully off the edge of Lower Bowl.",
teaches:"Cold-patient handling, why afterdrop matters, and making decisions with a failing light and a long carry.",
beats:[

{type:"info", text:"Twenty metres down the gully you find a young man sitting against a tree, board still strapped to one foot, not moving. He's wearing a light jacket, no gloves — one is on the snow a few feet away. He doesn't respond when you call out. The gully is steep, the light is going, and you are about forty minutes from the nearest road access."},

{type:"recall",
 prompt:"Say out loud your scene size-up and what you call in.",
 rubric:[
  {t:"Assess the scene — steep terrain, failing light, your own exposure", cpi:true},
  {t:"State the scene is safe, or what you need to make it safe", cpi:true},
  {t:"Take Standard Precautions", cpi:true},
  {t:"Call it in immediately with your location and the resources you'll need", },
  {t:"Request the toboggan, warm packaging, and extra hands for a technical extraction", },
  {t:"State the time — light and temperature are both working against you", },
  {t:"Consider avalanche or fall hazard in the gully before descending to him", cpi:true},
  {t:"Recognize this is a patient who has been down for up to 90 minutes in extreme cold", }
 ]},

{type:"choice", cpi:true,
 prompt:"You reach him. He's unresponsive to voice. How do you approach the physical assessment?",
 options:[
  {t:"Move him as gently as possible, and assess breathing and pulse for a full 30 to 60 seconds",
   ok:true, say:"Correct on both counts. A cold heart is electrically irritable and rough handling can trigger ventricular fibrillation. And in profound hypothermia the pulse can be so slow and weak that a ten-second check misses it entirely."},
  {t:"Check a carotid pulse for 10 seconds; if absent, begin CPR immediately",
   say:"Ten seconds is not long enough in a severely hypothermic patient. You risk starting compressions on a beating heart, which can itself induce fibrillation."},
  {t:"Shake him firmly and shout to establish responsiveness",
   say:"Jostling a profoundly cold patient is precisely the mechanism that triggers fatal arrhythmia. Assess responsiveness without rough physical stimulus."},
  {t:"Sit him upright to open his airway and improve breathing",
   say:"Keep a severely hypothermic patient horizontal. Sitting them up can cause a pressure collapse in a patient whose circulation is already marginal."}
 ]},

{type:"info", text:"Over 45 seconds you find slow, shallow respirations — about 6 per minute — and a very weak carotid pulse, roughly 35. He's rigid, not shivering, and his skin is ice-cold. He makes no response to a painful stimulus. There's a golf-ball-sized lump above his left eyebrow and blood frozen in his eyebrow."},

{type:"recall",
 prompt:"Say out loud your assessment and treatment priorities for this patient.",
 rubric:[
  {t:"Recognize severe hypothermia — not shivering, rigid, altered LOR", cpi:true},
  {t:"Handle gently and keep him horizontal throughout", cpi:true},
  {t:"Maintain the airway and assist ventilations — 6 per minute is inadequate", cpi:true},
  {t:"Treat the head injury as a second problem: assume spinal involvement, he may have fallen", cpi:true},
  {t:"Remove wet clothing and insulate, including underneath him", cpi:true},
  {t:"Apply heat to the core — chest, neck, armpits, groin — not the extremities", cpi:true},
  {t:"Give nothing by mouth", },
  {t:"Handle the frozen extremities gently; do not rub and do not attempt field rewarming", },
  {t:"Protect from wind during packaging and descent", },
  {t:"Expedite transport — he needs hospital rewarming, not field rewarming", }
 ]},

{type:"choice", cpi:true,
 prompt:"A newer patroller starts vigorously rubbing the patient's bare hands to warm them. What do you say?",
 options:[
  {t:"Stop — rubbing damages frozen tissue and warming the extremities first drives cold blood to the core",
   ok:true, say:"Correct on both mechanisms. Rubbing mechanically destroys ice-laden tissue, and peripheral vasodilation sends cold acidotic blood back to a heart that is already irritable. That's afterdrop, and it kills."},
  {t:"Nothing — any warming helps a patient this cold",
   say:"Not true, and this is the exact intervention that turns a survivable hypothermia into an arrest during transport."},
  {t:"Keep going but add a chemical heat pack directly against the skin",
   say:"Two errors. The rubbing is still harmful, and a heat pack directly on the skin of a patient who can't feel it causes burns. Always use a barrier."},
  {t:"Ask him to rub the feet instead since they're more likely frostbitten",
   say:"The problem isn't which extremity, it's the technique and the sequence. Warm the core; insulate the periphery."}
 ]},

{type:"info", text:"He's packaged with insulation underneath, heat packs wrapped and placed at the core, airway managed and ventilations assisted. The carry out takes fifty minutes in the dark. On arrival his pulse is 40 and he has not regained consciousness."},

{type:"choice",
 prompt:"During the carry, he loses his pulse. A patroller says 'he's been down too long in this cold, it's over.' What's your response?",
 options:[
  {t:"Begin CPR and continue — cold dramatically reduces metabolic demand and protects the brain",
   ok:true, say:"Correct. 'Not dead until warm and dead.' Hypothermic patients have survived prolonged arrest neurologically intact, because the cold that nearly killed them also preserved them. Resuscitation continues through transport."},
  {t:"Confirm the absence of pulse for a full minute, then stop resuscitation efforts",
   say:"The longer pulse check is right — but the conclusion is wrong. Hypothermia is the one circumstance where prolonged downtime should not stop you."},
  {t:"Continue transport without CPR since compressions in a toboggan are ineffective",
   say:"They're harder, not useless, and the alternative is no perfusion at all. Stop, start compressions, and work out the logistics around that decision."},
  {t:"Attempt rapid active rewarming first, then reassess for a pulse",
   say:"Field rewarming won't raise a core temperature meaningfully in the time available, and it delays the compressions he needs right now."}
 ]},

{type:"info", text:"CPR is continued throughout the descent and handed off to ALS at the road. Cases like this have walked out of hospitals. Your job was to give him the chance, and you did."}
]}

];
