/* OEC practical skill stations.
   Step sequences transcribed from NSP-published 6th-edition Skill Guides
   (Southern Division compilation) and the Genesee Valley Region patient
   assessment sheet. cpi:true marks a Critical Performance Indicator — on the
   real sheets, missing any CPI fails the station outright regardless of score.
   region:true marks an item that appears on some regional sheets but not on
   national Skill Guide 7-1.                                                   */

const STATION_INTRO = {
  structure: "The OEC practical is 4 skill stations plus 2 full-patient scenarios — one trauma, one medical.",
  scoring: "To pass a station you must hit every Critical Performance Indicator AND score at least 80% on the remaining items. Scoring is per station; a strong station cannot average out a failed one.",
  retest: "Full-course candidates may fail up to 100% of stations and retest — up to 50% the same day, more than 50% on another day. Challenge and Modified Challenge candidates may fail only one station and retest it the same day; failing two means retaking the course.",
  voice: "You are graded on what the evaluator hears. Say every finding out loud — \"scene is safe,\" \"no major bleeding,\" \"airway is patent, patient is speaking in full sentences\" — and say it again if you don't see the box get checked.",
  terms: "The sheets are written in OEC's own vocabulary: Standard Precautions, CMS (circulation, motor, sensory) and LOR (level of responsiveness). BSI and Standard Precautions are used interchangeably in most courses, and CMS and LOR are close enough to their EMT equivalents that evaluators understand either — the sheet wording is worth knowing so nothing on the page surprises you, not because the synonym will be marked wrong."
};

const STATIONS = [

{id:"pa-national", code:"7-1", name:"Performing a Patient Assessment", it:true,
 pass:"13 of 16 points, plus every CPI",
 note:"The backbone station and the spine of both scenarios. Note the OEC ordering quirks: Standard Precautions comes fifth, not first; general impression sits in the primary assessment, not the size-up; and controlling life-threatening bleeding comes before you assess LOR and ABCDs.",
 groups:[
  {name:"Scene Size-Up", steps:[
   {t:"Perform a scene size-up"},
   {t:"Ensure scene safety", cpi:true},
   {t:"Introduce yourself and obtain permission to treat", cpi:true},
   {t:"Determine the mechanism of injury / nature of illness"},
   {t:"Take Standard Precautions", cpi:true},
   {t:"Determine the number of patients"},
   {t:"Determine need for additional resources, backboard, extrication"}
  ]},
  {name:"Primary Assessment", steps:[
   {t:"Form a general impression of the patient"},
   {t:"Control life-threatening bleeding", cpi:true},
   {t:"Assess level of responsiveness (LOR)"},
   {t:"Rapidly assess airway, breathing, circulation and disability (ABCDs)", cpi:true},
   {t:"Obtain the chief complaint", cpi:true},
   {t:"Update dispatch of your needs"}
  ]},
  {name:"History & Secondary Assessment", steps:[
   {t:"Obtain a complete history from the patient — SAMPLE and OPQRST", cpi:true},
   {t:"Perform the physical exam"},
   {t:"Assess vital signs"},
   {t:"Perform a head-to-toe exam using DCAP-BTLS", region:true},
   {t:"Assess for specialized equipment needs: head, spine, pelvis, femur", region:true},
   {t:"Check for a medical-alert tag", region:true}
  ]},
  {name:"Reassessment", steps:[
   {t:"Check treatment effectiveness, repeat the primary assessment, reassess vital signs, treat any change in condition"},
   {t:"Obtain a second full set of vital signs", region:true},
   {t:"Treat for shock", region:true},
   {t:"Prepare the patient for transport and select the transport method", region:true}
  ]}
 ]},

{id:"bleeding", code:"19-1", name:"Controlling Bleeding", it:true,
 pass:"3 of 4 points, plus every CPI",
 note:"Short station, and one of the nine that NSP escalates to an Instructor Trainer. Do not skip exposing the wound — you cannot claim to have controlled bleeding you never actually looked at.",
 groups:[{name:"Sequence", steps:[
   {t:"Expose the area to see the wound — open, cut or remove clothing"},
   {t:"Place a sterile dressing over the wound and apply direct pressure"},
   {t:"If bleeding does not stop, add further sterile dressings over the first and again apply direct pressure — never remove the original", cpi:true},
   {t:"Bandage the extremity"}
 ]}]},

{id:"tourniquet", code:"19-2", name:"Applying a Tourniquet", it:false,
 pass:"4 of 5 points, plus every CPI", crew:"Two rescuers",
 note:"Three of the five items are CPIs, so there is almost no margin. The one candidates forget is the last: write the time on the patient.",
 groups:[{name:"Sequence", steps:[
   {t:"Rescuer 2 applies direct pressure to a dressing over the wound while Rescuer 1 prepares the tourniquet"},
   {t:"Rescuer 1 places the tourniquet several inches proximal to the injury — never over a joint", cpi:true},
   {t:"Rescuer 2 packs large wounds with gauze if needed"},
   {t:"Rescuer 1 twists the rod only until bleeding is controlled, then secures the rod", cpi:true},
   {t:"Write the time of application on the patient", cpi:true}
 ]}]},

{id:"occlusive", code:"19-9", name:"Caring for Burns", it:false,
 pass:"3 of 4 points, plus every CPI",
 note:"Note the 5% TBSA rule on wetting the dressing — wetting a large burn drives hypothermia, which is the real killer in a cold environment.",
 groups:[{name:"Sequence", steps:[
   {t:"Remove affected clothing, stop the burning process, and cool the burn", cpi:true},
   {t:"Apply a sterile gauze dressing — wet it, with sterile solution if possible, only if the burn is under 5% of total body surface area", cpi:true},
   {t:"Bandage to keep the dressing securely in place"},
   {t:"Prepare to assist the patient in finding further medical treatment if required"}
 ]}]},

{id:"closed-soft", code:"19-7", name:"Treating Closed Soft-Tissue Injuries", it:false,
 pass:"4 of 4 — no margin for error on this one",
 note:"OEC's version of RICE swaps Compression for Splint. Say all four letters out loud.",
 groups:[{name:"RISE", steps:[
   {t:"Rest — cease activity or use of the affected limb"},
   {t:"Ice — apply cold packs or ice for pain control"},
   {t:"Splint — immobilize using a commercial or improvised splint"},
   {t:"Elevate — raise the injured area above heart level to reduce pain"}
 ]}]},

{id:"quick-splint", code:"20-9", name:"Applying a Quick Splint", it:false,
 pass:"5 of 6 points, plus every CPI", crew:"Two rescuers",
 note:"The CMS bookend — assess before, reassess after — appears on every extremity station and both halves are CPIs.",
 groups:[{name:"Sequence", steps:[
   {t:"Rescuer 1 opens the splint flat, parallel to the injured extremity or in line with and distal to the foot"},
   {t:"Rescuer 2 takes position opposite and stabilizes above and below the injury — grasping the foot with one hand and just below the knee with the other, or performing the pant-leg pinch lift", cpi:true},
   {t:"Rescuer 1 assesses CMS", cpi:true},
   {t:"On a count of three: Rescuer 2 lifts the extremity, Rescuer 1 slides the splint underneath, Rescuer 2 gently lowers the leg into the centre of the splint"},
   {t:"Rescuer 1 closes the splint like a clamshell while Rescuer 2 firmly secures the straps, rope or webbing"},
   {t:"Reassess CMS", cpi:true}
 ]}]},

{id:"boot", code:"20-12", name:"Removing a Boot", it:true,
 pass:"5 of 6 points, plus every CPI", crew:"Two rescuers",
 note:"Instructor-Trainer observed. The trap is the first CMS check: the boot is still on, so it must be assessed indirectly — tap the boot, ask the patient to wiggle their toes.",
 groups:[{name:"Sequence", steps:[
   {t:"Rescuer 1 stabilizes the boot to be removed"},
   {t:"Rescuer 2 assesses distal CMS indirectly — tap the boot, ask the patient to wiggle their toes", cpi:true},
   {t:"Rescuer 2 unbuckles or unlaces the boot completely, spreading the shell and pulling the tongue forward as far as it will go, or opening the back of a rear-entry boot"},
   {t:"Rescuer 1 slides hands inside the open boot and stabilizes the leg and ankle — one hand front and one behind, or one on each side — holding firmly throughout removal", cpi:true},
   {t:"Rescuer 2 gently removes the boot, sliding the heel away from the foot first, then the toe"},
   {t:"Reassess distal CMS", cpi:true}
 ]}]},

{id:"neutral-head", code:"21-1", name:"Performing Neutral Head Alignment", it:false,
 pass:"2 of 3 points, plus every CPI",
 note:"Two of three items are CPIs. 'Never force the head into alignment' is printed on the sheet — if you meet resistance or the patient reports pain, stop and hold where you are.",
 groups:[{name:"Sequence", steps:[
   {t:"Kneel next to the patient's head, either to the side or at the top of the head"},
   {t:"Place your hands on either side of the head, palms adjacent to the ears, fingers supporting the jaw and the back of the head", cpi:true},
   {t:"Gently move the head so the eyes look forward and the nose and chin align with the sternum — never force the head into alignment", cpi:true}
 ]}]},

{id:"helmet", code:"21-6", name:"Removing a Helmet from a Patient", it:true,
 pass:"6 of 8 points, plus every CPI", crew:"Two rescuers",
 note:"Instructor-Trainer observed, and a station where the whole point is that stabilization is never interrupted. Narrate the handoff so the evaluator hears that someone always has the head.",
 groups:[{name:"Sequence", steps:[
   {t:"Align the patient axially"},
   {t:"Rescuer 1 manually stabilizes the head and cervical spine, one hand on either side of the helmet", cpi:true},
   {t:"Rescuer 2 opens the face shield and/or removes goggles, then unfastens the chin strap"},
   {t:"Rescuer 2 places one hand at the occiput and the other at the chin, while Rescuer 1 maintains stabilization until the transfer is complete — alternatively, slide hands inside the helmet along either side of the head with fingers supporting the face up over the ears"},
   {t:"Rescuer 1 grasps the helmet straps or sides and pulls them apart, spreading the helmet"},
   {t:"Rescuer 1 pulls the helmet axially away from the head, rotating it forward off the face"},
   {t:"Rescuer 2 slides fingers to the occiput and chin, ensuring head and cervical spine remain immobilized, and continues to stabilize", cpi:true},
   {t:"Pad behind the head as needed to maintain neutral alignment once the helmet is off"}
 ]}]},

{id:"logroll", code:"5-7", name:"Logrolling a Supine Patient onto a Backboard", it:false,
 pass:"8 of 10 points, plus every CPI", crew:"Three to four rescuers",
 note:"Four CPIs here. The lead — the person at the head — calls the roll, and nobody moves until they do.",
 groups:[{name:"Sequence", steps:[
   {t:"Three or four rescuers kneel on the side of the patient away from the backboard, staggering their positions", cpi:true},
   {t:"Rescuer 1 maintains proper head and neck position of the collared patient", cpi:true},
   {t:"Assess CMS"},
   {t:"Rescuers reach across the body and place their hands under the patient"},
   {t:"Maintaining the head in axial alignment, the lead calls the roll", cpi:true},
   {t:"Rescuers roll the patient onto their side, toward themselves and up against their thighs"},
   {t:"On another command, rescuers roll the patient back onto the backboard"},
   {t:"If the patient is not centred, use long-axis drags keeping the spine straight"},
   {t:"Secure the patient onto the backboard in the usual manner"},
   {t:"Reassess CMS", cpi:true}
 ]}]},

{id:"shock", code:"10-1", name:"Managing Shock", it:false,
 pass:"6 of 8 points, plus every CPI",
 note:"Three CPIs. Note that a major bleed flips you from ABCD into the CABD sequence — bleeding first.",
 groups:[{name:"Sequence", steps:[
   {t:"Perform a primary assessment"},
   {t:"Assess for major bleeding and control it if present", cpi:true},
   {t:"Assess ABCDs — if a major bleed was found, follow the CABD sequence"},
   {t:"Correct any problems found; begin CPR if the patient has no pulse", cpi:true},
   {t:"Recognize and state that the patient is showing signs of shock", cpi:true},
   {t:"Call for help and arrange transport that includes ALS"},
   {t:"Monitor the airway and administer high-flow oxygen"},
   {t:"Keep the patient warm and dry to prevent heat loss"},
   {t:"Provide rapid transport"}
 ]}]},

{id:"epipen", code:"14-1", name:"Administration with an Epinephrine Auto-Injector", it:false,
 pass:"5 of 6 points, plus every CPI",
 note:"The CPI is the check before you ever touch the patient: right patient, right medication, not expired, not discoloured.",
 groups:[{name:"Sequence", steps:[
   {t:"Confirm the medication is prescribed to this patient by checking the name; do not use if expired or discoloured", cpi:true},
   {t:"Remove the auto-injector from its package and remove the safety cap; grasp firmly in the dominant hand, thumb clear of either end"},
   {t:"Place the tip against the outer thigh muscle, halfway between hip and knee — wipe with alcohol first if possible; in an extreme emergency it may be given through clothing"},
   {t:"Push firmly until the needle deploys, listening for the click, and hold firm pressure for 10 seconds"},
   {t:"Remove the auto-injector and dispose of it in a suitable sharps container"},
   {t:"Massage the injection site for 10 to 20 seconds"},
   {t:"Note and document the time and dose administered"}
 ]}]},

{id:"mdi", code:"13-2", name:"Assisting a Patient with a Metered-Dose Inhaler", it:false,
 pass:"4 of 5 points, plus every CPI",
 note:"Same medication check as the auto-injector, plus one detail unique to cold environments: the inhaler must be at room temperature or warmer.",
 groups:[{name:"Sequence", steps:[
   {t:"Inspect the medication — correct medication, correct patient, check the expiration date, ensure the inhaler is at room temperature or warmer", cpi:true},
   {t:"Hand the inhaler to the patient, removing the oxygen mask if applicable; instruct them to hold it upright and seal their lips around the tube"},
   {t:"Instruct the patient to press the inhaler and inhale one puff, assisting if necessary, then hold their breath at least 10 seconds"},
   {t:"Apply oxygen"},
   {t:"After 1 to 2 minutes, have the patient repeat the dose if protocol allows"}
 ]}]},

{id:"gloves", code:"3-1", name:"Removing Contaminated Gloves", it:false,
 pass:"5 of 6 points",
 note:"Prerequisites still apply even on a station this small: scene is safe, Standard Precautions initiated, self introduced and permission obtained.",
 groups:[{name:"Sequence", steps:[
   {t:"Grasp the exterior of the opposite glove at the wrist"},
   {t:"Fold the glove over and peel it back, turning it inside out"},
   {t:"Hold the removed glove in the gloved dominant hand without touching its exterior"},
   {t:"Place ungloved fingers inside the cuff of the remaining glove"},
   {t:"Peel the glove off the hand, turning it inside out"},
   {t:"Both gloves end up inside out, one contained within the other"}
 ]}]},

{id:"powerlift", code:"5-1 / 5-5", name:"Power Grip and Power Lift", it:false,
 pass:"Power grip 2 of 3; power lift 4 of 5",
 note:"Numbering for the lift skills differs between NSP source documents — learn them by title, not number.",
 groups:[
  {name:"Power Grip", steps:[
   {t:"Place your hands palms up, approximately 10 inches apart"},
   {t:"Reach underneath the object and firmly grasp it, closing your hands"},
   {t:"If possible, loop your thumb over your index and middle fingers"}
  ]},
  {name:"Power Lift", steps:[
   {t:"Maintain a wide stance, feet shoulder-width apart"},
   {t:"Bend the knees and squat, keeping the back straight and shoulders over the spine"},
   {t:"Firmly grasp the item with palms up, using the power grip"},
   {t:"Keep the back straight and the head up, looking forward"},
   {t:"Straighten the legs to lift the object"}
  ]}
 ]},

{id:"pulse-resp", code:"7-4 / 7-5", name:"Assessing Pulse and Respiratory Rate", it:false,
 pass:"Pulse 3 of 3; respirations 2 of 2",
 note:"Know which pulse site goes with which patient — that pairing is the whole point of the station.",
 groups:[
  {name:"Assessing Pulse", steps:[
   {t:"Radial pulse — rate and quality; the site for a responsive adult"},
   {t:"Carotid pulse — rate and quality; the site for an unresponsive adult"},
   {t:"Brachial pulse — rate and quality; the site for an infant"}
  ]},
  {name:"Assessing Respiratory Rate", steps:[
   {t:"Look and feel for the chest to rise and fall"},
   {t:"Assess whether breathing is within normal limits across all five: rate, rhythm, depth, effort and noise"}
  ]}
 ]}

];

/* Mandatory skills whose official step sheets are not published outside the
   OEC 6 textbook and Instructor Toolkit. Listed so the gap is visible rather
   than quietly filled in with EMT-B material. */
const STATION_GAPS = [
  {code:"21-2", name:"Sizing and Applying a Cervical Collar", it:true},
  {code:"21-4", name:"Securing the Patient onto a Long Backboard", it:true},
  {code:"20-7", name:"Applying a Traction Splint to a Femur", it:true},
  {code:"20-2", name:"Applying a Blanket Roll Splint to a Shoulder", it:true},
  {code:"24-1", name:"Stabilizing the Pelvis", it:true},
  {code:"21-3", name:"Performing the Axial Drag", it:false},
  {code:"9-1", name:"Performing the Finger Sweep", it:false},
  {code:"9-2", name:"Suctioning a Patient's Airway", it:false},
  {code:"9-3", name:"Inserting a Nasopharyngeal Airway", it:false},
  {code:"9-4", name:"Inserting an Oropharyngeal Airway", it:false},
  {code:"9-5", name:"Placing an Oxygen Cylinder into Service", it:false},
  {code:"7-6", name:"Obtaining a Blood Pressure Reading", it:false}
];
