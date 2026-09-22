/* OEC practice question bank.
   Each item: { d: domain key, q: stem, c: [choices], a: correct index, e: explanation } */

const DOMAINS = [
  { key: "found",  name: "Foundations, Legal & Ethical",     short: "Foundations" },
  { key: "anat",   name: "Anatomy & Physiology",             short: "A&P" },
  { key: "assess", name: "Patient Assessment",               short: "Assessment" },
  { key: "airway", name: "Airway & Respiration",             short: "Airway" },
  { key: "circ",   name: "Circulation, Shock, CPR & AED",    short: "Circulation" },
  { key: "soft",   name: "Bleeding & Soft-Tissue Injuries",  short: "Soft Tissue" },
  { key: "msk",    name: "Musculoskeletal Injuries & Splinting", short: "Musculoskeletal" },
  { key: "head",   name: "Head, Spine & Neurologic Trauma",  short: "Head & Spine" },
  { key: "torso",  name: "Chest, Abdomen & Pelvis",          short: "Torso" },
  { key: "med",    name: "Medical Emergencies",              short: "Medical" },
  { key: "env",    name: "Environmental Emergencies",        short: "Environmental" },
  { key: "spec",   name: "Special Populations, OB, Transport & ICS", short: "Special & Transport" }
];

const QUESTIONS = [

/* ---------- FOUNDATIONS, LEGAL & ETHICAL ---------- */
{d:"found",q:"An unconscious skier is found at the base of a lift tower. Under what legal principle may you begin care without asking permission?",
c:["Implied consent","Expressed consent","Informed consent","Involuntary consent"],a:0,
e:"Implied consent assumes that a reasonable person who is unresponsive, confused, or otherwise unable to consent would want life-saving care. Expressed and informed consent both require a patient who can understand and agree."},

{d:"found",q:"Which set of elements must ALL be present for a claim of negligence to succeed?",
c:["Duty to act, breach of that duty, damages, and causation","Intent, malice, injury, and a witness","Certification, dispatch, response, and transport","Consent, documentation, protocol, and supervision"],a:0,
e:"All four must be proven: you had a duty to act, you breached the standard of care, the patient suffered harm (damages), and your breach caused that harm (proximate causation). Missing any one defeats the claim."},

{d:"found",q:"You begin caring for an injured rider, then leave to help a friend on another trail before anyone of equal or higher training takes over. This is best described as:",
c:["Abandonment","Assault","Breach of confidentiality","Battery"],a:0,
e:"Abandonment is terminating care without transferring the patient to someone of equal or higher medical training. Once you start, you are committed until properly relieved."},

{d:"found",q:"A competent adult with an obviously angulated wrist refuses all care and wants to ski down. Your best action is to:",
c:["Explain the risks clearly, try to persuade, and if he still refuses, document the refusal and have him sign if possible","Restrain him until the patrol director arrives","Treat him anyway under implied consent","Tell him he is not allowed to refuse care on resort property"],a:0,
e:"A competent adult may refuse care. Your job is to make sure the refusal is informed — explain risks in plain language, try to persuade, involve medical control if available, document thoroughly, and obtain a signature and a witness."},

{d:"found",q:"Touching or treating a patient without consent may constitute:",
c:["Battery","Negligence","Abandonment","Libel"],a:0,
e:"Battery is unlawful physical contact. Assault is placing someone in fear of that contact. Both can arise from treating a competent patient who has refused."},

{d:"found",q:"'Standard of care' is best defined as:",
c:["The care a similarly trained, reasonable person would provide under the same circumstances","The highest level of care available anywhere","Whatever the patrol director says to do","The care described in the most recent medical journal"],a:0,
e:"It is measured against a reasonable, similarly trained provider facing the same situation — not against a physician, and not against an ideal."},

{d:"found",q:"Discussing a patient's injuries by name with other patrollers in the lift line is primarily a violation of:",
c:["Patient confidentiality","Scope of practice","Duty to act","The Good Samaritan statute"],a:0,
e:"Patient information may be shared only with those who have a need to know for the patient's care. Casual disclosure breaches confidentiality and may violate HIPAA-type protections."},

{d:"found",q:"Which of the following is the FIRST priority at any incident scene?",
c:["Your own safety","The patient's airway","Calling for ALS backup","Obtaining consent"],a:0,
e:"Scene safety, starting with your own, comes before everything. An injured rescuer adds a patient and removes a responder."},

{d:"found",q:"Standard precautions (body substance isolation) assume that:",
c:["All body fluids are potentially infectious","Only blood transmits disease","Gloves are needed only for bleeding patients","Patients will disclose infectious conditions"],a:0,
e:"Standard precautions treat every patient's blood and body fluids as infectious regardless of known history. Gloves are the minimum; add eye protection and a mask when splashing or airborne risk exists."},

{d:"found",q:"Which document communicates a patient's wish that resuscitation not be attempted?",
c:["A DNR order","A HIPAA release","An incident report","A consent-to-treat form"],a:0,
e:"A Do Not Resuscitate order is a physician's order reflecting the patient's wishes. Know your resort's policy — many require the written order to be physically present."},

{d:"found",q:"Good Samaritan laws generally protect a rescuer who:",
c:["Acts in good faith, within their training, without gross negligence, and without expectation of compensation","Acts in any way at all during an emergency","Is a licensed medical professional only","Has the patient's written consent"],a:0,
e:"Protection is not absolute. It typically evaporates with gross negligence, willful misconduct, or acting far outside your scope of training. Specifics vary by state."},

{d:"found",q:"The single most effective thing an OEC technician can do to avoid disease transmission is:",
c:["Wash hands thoroughly before and after every patient contact","Wear a gown on every call","Take prophylactic antibiotics","Avoid patients who look ill"],a:0,
e:"Handwashing remains the most effective infection-control measure, and it is the one most often skipped."},

/* ---------- ANATOMY & PHYSIOLOGY ---------- */
{d:"anat",q:"In standard anatomical position, the term 'distal' means:",
c:["Farther from the trunk or point of attachment","Toward the midline of the body","Toward the front of the body","Closer to the head"],a:0,
e:"Distal = farther from the point of attachment; proximal = closer. The wrist is distal to the elbow. Medial/lateral describe distance from the midline; anterior/posterior describe front/back."},

{d:"anat",q:"A wound on the palm side of the forearm would be described as being on the:",
c:["Anterior (volar) surface","Posterior surface","Lateral surface","Dorsal surface"],a:0,
e:"In anatomical position the palms face forward, so the palm side of the forearm is anterior — also called volar or palmar. The back of the hand is dorsal."},

{d:"anat",q:"Which structure prevents food and liquid from entering the trachea during swallowing?",
c:["The epiglottis","The uvula","The cricoid cartilage","The carina"],a:0,
e:"The epiglottis is a leaf-shaped flap that folds over the glottic opening during swallowing. The cricoid is the only complete cartilage ring of the trachea; the carina is where the trachea bifurcates."},

{d:"anat",q:"The largest artery in the body, carrying blood from the left ventricle, is the:",
c:["Aorta","Pulmonary artery","Carotid artery","Vena cava"],a:0,
e:"The aorta leaves the left ventricle. The pulmonary artery leaves the right ventricle carrying deoxygenated blood to the lungs; the venae cavae are veins returning blood to the right atrium."},

{d:"anat",q:"The diaphragm's role in normal breathing is that during inhalation it:",
c:["Contracts and flattens, increasing thoracic volume and lowering pressure","Relaxes and domes upward, forcing air in","Contracts to squeeze air out of the lungs","Plays no active role; only the ribs move"],a:0,
e:"Inhalation is active: the diaphragm contracts downward and the intercostals lift the ribs, enlarging the chest so air flows in. Normal exhalation is passive elastic recoil."},

{d:"anat",q:"Which of the following correctly lists the spinal regions from superior to inferior?",
c:["Cervical, thoracic, lumbar, sacral, coccygeal","Cervical, lumbar, thoracic, sacral, coccygeal","Thoracic, cervical, lumbar, coccygeal, sacral","Lumbar, thoracic, cervical, sacral, coccygeal"],a:0,
e:"7 cervical, 12 thoracic, 5 lumbar, 5 fused sacral, 4 fused coccygeal — 33 vertebrae total."},

{d:"anat",q:"Gas exchange between the lungs and the bloodstream occurs at the:",
c:["Alveoli","Bronchioles","Pleura","Trachea"],a:0,
e:"Alveoli are the thin-walled sacs surrounded by capillaries where oxygen diffuses in and carbon dioxide diffuses out. Everything upstream is conducting airway."},

{d:"anat",q:"Which bone is most commonly fractured in a fall on an outstretched hand (FOOSH) among skiers and riders?",
c:["The distal radius","The femur","The humeral head","The scapula"],a:0,
e:"A distal radius (Colles') fracture is the classic FOOSH injury, often with the 'dinner fork' deformity. Scaphoid fractures are also common and easily missed — check for snuffbox tenderness."},

{d:"anat",q:"The hormone that lowers blood glucose by moving it into cells is:",
c:["Insulin","Glucagon","Epinephrine","Cortisol"],a:0,
e:"Insulin, from the beta cells of the pancreas, drives glucose into cells. Glucagon does the opposite — it raises blood sugar by releasing stored glycogen."},

{d:"anat",q:"The autonomic nervous system division responsible for the 'fight or flight' response is the:",
c:["Sympathetic","Parasympathetic","Somatic","Central"],a:0,
e:"Sympathetic stimulation increases heart rate, dilates pupils and bronchioles, and shunts blood to muscle. The parasympathetic system is 'rest and digest.'"},

{d:"anat",q:"Which of the following is a function of the skin?",
c:["Temperature regulation, protection from infection, and sensation","Production of red blood cells","Filtration of blood","Storage of bile"],a:0,
e:"Skin is the body's largest organ: it is a barrier to pathogens, regulates temperature through sweating and vasodilation/constriction, and provides sensation. Loss of that barrier is why burns and large wounds are so dangerous."},

{d:"anat",q:"Perfusion is best defined as:",
c:["The circulation of blood through tissue in amounts adequate to meet cellular needs","The number of breaths per minute","The pressure in the arteries during ventricular contraction","The volume of blood ejected per heartbeat"],a:0,
e:"Perfusion is delivery of oxygenated blood and removal of waste at the cellular level. Shock is inadequate perfusion — which is why a patient can have a pulse and still be in shock."},

/* ---------- PATIENT ASSESSMENT ---------- */
{d:"assess",q:"Put the phases of patient assessment in correct order.",
c:["Scene size-up, primary assessment, secondary assessment, reassessment","Primary assessment, scene size-up, reassessment, secondary assessment","Scene size-up, secondary assessment, primary assessment, reassessment","Primary assessment, secondary assessment, scene size-up, reassessment"],a:0,
e:"Scene size-up (safety, MOI/NOI, number of patients, resources) always comes first, then the primary assessment to find and fix life threats, then a focused or detailed secondary exam, then ongoing reassessment."},

{d:"assess",q:"The primary assessment is designed to:",
c:["Identify and immediately treat life threats","Obtain a complete set of vital signs","Document the mechanism of injury","Determine the patient's insurance status"],a:0,
e:"Primary assessment = general impression, level of responsiveness, and airway/breathing/circulation with major bleeding control. Anything life-threatening is fixed the moment it is found, before moving on."},

{d:"assess",q:"AVPU is used to assess:",
c:["Level of responsiveness","Pupil reactivity","Airway patency","Circulatory status"],a:0,
e:"Alert, responds to Verbal stimulus, responds to Painful stimulus, Unresponsive. For an alert patient, note orientation to person, place, time, and event (A&O x4)."},

{d:"assess",q:"What does the 'P' in OPQRST stand for?",
c:["Provocation/palliation — what makes it better or worse","Position of the patient","Past medical history","Pulse quality"],a:0,
e:"Onset, Provocation/palliation, Quality, Region/radiation, Severity, Time. It is the pain and symptom history tool, most useful for medical complaints such as chest or abdominal pain."},

{d:"assess",q:"In SAMPLE, the 'E' stands for:",
c:["Events leading up to the illness or injury","Environment at the scene","Extremity assessment","Evacuation plan"],a:0,
e:"Signs/symptoms, Allergies, Medications, Pertinent past history, Last oral intake, Events leading up to the incident. Last oral intake matters for surgical candidates and diabetics."},

{d:"assess",q:"DCAP-BTLS is a memory aid for what you look and feel for during the physical exam. The 'B' and 'T' stand for:",
c:["Burns and Tenderness","Bleeding and Trauma","Bruising and Tears","Breaks and Twisting"],a:0,
e:"Deformities, Contusions, Abrasions, Punctures/penetrations, Burns, Tenderness, Lacerations, Swelling."},

{d:"assess",q:"Normal resting respiratory rate for an adult is:",
c:["12 to 20 breaths per minute","8 to 12 breaths per minute","20 to 30 breaths per minute","30 to 40 breaths per minute"],a:0,
e:"Adults: 12–20. Children run faster (roughly 15–30) and infants faster still (commonly published as 30–60; pediatric brackets vary by reference, so learn your text's numbers). Rates outside the normal range in any patient warrant close attention to tidal volume and effort."},

{d:"assess",q:"Normal resting pulse rate for an adult is:",
c:["60 to 100 beats per minute","40 to 60 beats per minute","100 to 140 beats per minute","80 to 160 beats per minute"],a:0,
e:"60–100 for adults. Well-conditioned athletes can be well below 60 normally. Tachycardia is an early compensatory sign of shock; bradycardia in a trauma patient is ominous."},

{d:"assess",q:"You press a patient's nail bed; color returns in about 4 seconds. This finding suggests:",
c:["Poor peripheral perfusion","Normal circulation","An arterial laceration","Hypertension"],a:0,
e:"Capillary refill should be under 2 seconds. Delayed refill suggests poor perfusion — but cold is a major confounder on the hill, so weigh it alongside skin color, pulse, and mental status rather than alone."},

{d:"assess",q:"Cool, pale, clammy skin in an injured patient most likely reflects:",
c:["Sympathetic vasoconstriction from shock","Normal exertion after skiing","A local allergic reaction","Heat exhaustion only"],a:0,
e:"As perfusion falls, the body shunts blood from the skin to the core. Cool, pale, diaphoretic skin is a classic early shock finding — often before blood pressure changes at all."},

{d:"assess",q:"Which patient requires a rapid full-body trauma assessment rather than a focused exam?",
c:["A snowboarder ejected in a terrain-park fall who is confused","An alert skier with isolated thumb pain after a pole catch","A lodge guest with a small finger laceration","A rider with an ankle sprain who walked to the aid room"],a:0,
e:"Significant mechanism of injury plus altered mental status means you cannot trust a focused exam — do a rapid head-to-toe. Isolated, low-energy injuries in alert patients get a focused exam."},

{d:"assess",q:"How often should you reassess a stable patient's vital signs?",
c:["At least every 15 minutes","Every 60 minutes","Only once, at the scene","Only when the patient complains"],a:0,
e:"Stable: at least every 15 minutes. Unstable: at least every 5 minutes. Trends matter far more than any single set of numbers."},

{d:"assess",q:"A patient's skin is hot and dry. Aside from heat stroke, which condition should you consider?",
c:["High fever from infection","Compensated shock","Hypoglycemia","Hypothermia"],a:0,
e:"Hot, dry skin points to heat stroke or fever. Shock and hypoglycemia typically produce cool, moist skin; hypothermia produces cold skin."},

{d:"assess",q:"During the primary assessment of an unresponsive patient with a significant mechanism of injury, you should open the airway using:",
c:["A jaw-thrust maneuver with manual in-line stabilization","A head-tilt, chin-lift","A finger sweep","Hyperextension of the neck"],a:0,
e:"The jaw thrust opens the airway without moving the cervical spine. Head-tilt/chin-lift is for patients with no suspected spinal injury. Blind finger sweeps are never appropriate."},

/* ---------- AIRWAY & RESPIRATION ---------- */
{d:"airway",q:"The most common cause of airway obstruction in an unresponsive patient is:",
c:["The tongue falling back against the posterior pharynx","Food","Blood","Swelling of the epiglottis"],a:0,
e:"Loss of muscle tone lets the tongue occlude the airway. This is why a simple manual maneuver — jaw thrust or head-tilt/chin-lift — is the first and often only intervention needed."},

{d:"airway",q:"An oropharyngeal airway (OPA) should be used only in a patient who:",
c:["Has no gag reflex","Is alert and cooperative","Is breathing rapidly","Has a suspected basilar skull fracture"],a:0,
e:"An OPA in a patient with an intact gag reflex causes vomiting and possible aspiration. If the patient gags, remove it and consider an NPA — though an NPA is contraindicated with suspected basilar skull fracture or midface trauma."},

{d:"airway",q:"You are sizing an oropharyngeal airway. Measure from:",
c:["The corner of the mouth to the angle of the jaw (or center of the incisors to the angle of the jaw)","The nose to the sternal notch","The chin to the thyroid cartilage","Ear to ear across the forehead"],a:0,
e:"Too short and it pushes the tongue back; too long and it can obstruct or injure the larynx. Insert in adults upside down and rotate 180°, or use a tongue depressor and insert right side up."},

{d:"airway",q:"A patient is making high-pitched crowing sounds on inspiration. This is:",
c:["Stridor, suggesting upper airway obstruction or swelling","Wheezing, suggesting asthma","Rales, suggesting fluid in the alveoli","Rhonchi, suggesting mucus in large airways"],a:0,
e:"Stridor is an upper-airway sound and a true emergency — think swelling, foreign body, or anaphylaxis. Wheezing is expiratory and lower-airway; crackles/rales suggest fluid."},

{d:"airway",q:"An adult is clutching her throat, cannot speak, and cannot cough. Your immediate action is to:",
c:["Deliver abdominal thrusts","Encourage her to keep coughing","Perform a blind finger sweep","Begin chest compressions"],a:0,
e:"Silent, unable to cough or speak = complete obstruction. Abdominal thrusts until it clears or she becomes unresponsive — then lower her to the ground and begin CPR, looking in the mouth before each set of ventilations."},

{d:"airway",q:"A choking patient is coughing forcefully and can speak in short phrases. You should:",
c:["Encourage continued coughing and monitor closely","Immediately begin abdominal thrusts","Perform back blows","Deliver chest thrusts"],a:0,
e:"A forceful cough moves more air than any thrust you can deliver. Intervene only if the cough becomes weak or silent, or the patient can no longer speak or breathe."},

{d:"airway",q:"The preferred method of delivering supplemental oxygen to a breathing patient in significant respiratory distress is a:",
c:["Non-rebreather mask at 12–15 lpm","Nasal cannula at 2 lpm","Bag-valve mask without oxygen","Blow-by at 4 lpm"],a:0,
e:"A non-rebreather with the reservoir kept inflated delivers roughly 80–90% oxygen. A nasal cannula (1–6 lpm) is for patients who cannot tolerate a mask or need only modest supplementation."},

{d:"airway",q:"Signs of inadequate breathing that require assisted ventilation include:",
c:["Rate under 8 or over 30 with poor tidal volume, cyanosis, and altered mental status","A respiratory rate of 18 with clear speech","Mild anxiety with pink skin","Pursed-lip breathing with good air movement"],a:0,
e:"Judge adequacy by rate, depth (tidal volume), and effect — mental status and skin color. A 'normal' rate with shallow, ineffective breaths still needs assistance."},

{d:"airway",q:"When ventilating an adult with a bag-valve mask, each breath should be delivered:",
c:["Over about 1 second, just until the chest visibly rises","As forcefully and quickly as possible","Over 3–4 seconds with maximum volume","Only when the patient attempts to inhale"],a:0,
e:"Over-aggressive ventilation inflates the stomach, causes vomiting, and raises intrathoracic pressure enough to reduce venous return. Chest rise is the endpoint."},

{d:"airway",q:"Two-rescuer BVM ventilation is preferred over one-rescuer technique because:",
c:["One rescuer can maintain a two-handed mask seal while the other squeezes the bag","It delivers oxygen at a higher concentration","It requires less oxygen flow","It eliminates the need for an airway adjunct"],a:0,
e:"Mask seal is the limiting factor. Two hands on the mask (E-C or thenar-eminence grip) with a second rescuer bagging substantially improves delivered volume."},

{d:"airway",q:"Cyanosis of the lips and nail beds indicates:",
c:["Inadequate oxygenation of the blood","Excellent perfusion","A local cold injury only","Carbon monoxide poisoning"],a:0,
e:"Cyanosis is a late and unreliable sign — act on respiratory effort and mental status before it appears. Note that carbon monoxide poisoning classically does NOT cause cyanosis; the skin may look normal or flushed."},

{d:"airway",q:"A patient with a history of asthma is wheezing and using accessory muscles. Suddenly the wheezing stops and the chest is quiet. This means:",
c:["The patient is deteriorating — air movement has become dangerously poor","The asthma attack has resolved","The patient is faking","The lungs have cleared of mucus"],a:0,
e:"A 'silent chest' in an asthmatic is an ominous sign of severe obstruction with almost no airflow. Prepare to assist ventilation and expedite ALS."},

/* ---------- CIRCULATION, SHOCK, CPR & AED ---------- */
{d:"circ",q:"Shock is best defined as:",
c:["Inadequate tissue perfusion to meet cellular needs","A blood pressure below 90 systolic","An emotional reaction to injury","A heart rate above 100"],a:0,
e:"Shock is a perfusion problem at the cellular level. Blood pressure is a late and insensitive indicator — a patient can be in significant shock with a normal blood pressure."},

{d:"circ",q:"Which is the EARLIEST reliable sign of shock in an adult trauma patient?",
c:["Anxiety or restlessness with increased pulse rate","A falling blood pressure","Loss of consciousness","Absent peripheral pulses"],a:0,
e:"The brain notices poor perfusion first — restlessness, anxiety, and 'impending doom' — alongside compensatory tachycardia. Hypotension marks decompensation, which is much later."},

{d:"circ",q:"A patient loses significant blood volume from a femur fracture. This type of shock is:",
c:["Hypovolemic","Cardiogenic","Neurogenic","Anaphylactic"],a:0,
e:"Hypovolemic shock is loss of volume. A closed femur fracture can bleed 1–1.5 liters internally, and a pelvic fracture considerably more."},

{d:"circ",q:"A patient with a spinal cord injury presents warm, pink, dry skin with hypotension and a relatively slow pulse. This suggests:",
c:["Neurogenic shock","Hypovolemic shock","Septic shock","Cardiogenic shock"],a:0,
e:"Loss of sympathetic tone below the injury causes widespread vasodilation without the usual compensatory tachycardia. The skin stays warm and dry — the opposite of hypovolemic shock."},

{d:"circ",q:"General field management of a patient in shock includes:",
c:["Control bleeding, maintain airway, give high-flow oxygen, keep warm, position supine, and expedite transport","Give fluids by mouth and let the patient walk down","Apply cold packs and elevate the head","Wait for vital signs to deteriorate before intervening"],a:0,
e:"Stop the bleeding, support ABCs, prevent heat loss aggressively (a shocky patient loses heat fast, especially on snow), and move. Nothing by mouth."},

{d:"circ",q:"The correct compression rate for adult CPR is:",
c:["100 to 120 per minute","60 to 80 per minute","80 to 100 per minute","At least 140 per minute"],a:0,
e:"100–120/min. Faster than 120 does not allow adequate chest recoil and filling; slower does not generate enough flow."},

{d:"circ",q:"Correct compression depth for an adult is:",
c:["At least 2 inches (5 cm), not more than about 2.4 inches","About 1 inch","At least 3 inches","Whatever depth is comfortable"],a:0,
e:"At least 2 inches / 5 cm with full recoil between compressions. Leaning on the chest between compressions is one of the most common and most harmful CPR errors."},

{d:"circ",q:"The compression-to-ventilation ratio for one-rescuer adult CPR is:",
c:["30:2","15:2","5:1","10:2"],a:0,
e:"30:2 for adults in all settings, and for single-rescuer child/infant CPR. Two-rescuer child and infant CPR uses 15:2."},

{d:"circ",q:"You are doing two-rescuer CPR on an 5-year-old. The correct ratio is:",
c:["15:2","30:2","10:1","20:2"],a:0,
e:"Two rescuers on a child or infant use 15:2 because pediatric arrests are far more often respiratory in origin, making ventilation proportionally more important."},

{d:"circ",q:"An AED advises 'no shock advised' on a pulseless patient. You should:",
c:["Immediately resume chest compressions","Remove the pads and reassess in 5 minutes","Assume the patient has recovered","Shock manually anyway"],a:0,
e:"'No shock advised' means a non-shockable rhythm (asystole or PEA), not that the patient is fine. Resume compressions immediately and continue the 2-minute analysis cycles."},

{d:"circ",q:"Before delivering a shock with an AED, you must:",
c:["Ensure no one is touching the patient and state 'clear'","Check the pulse for 30 seconds","Dry the chest only if it is raining","Remove the patient's clothing entirely"],a:0,
e:"Visually confirm everyone is clear, including yourself. On the hill, also dry the chest, remove wet clothing from the pad sites, move the patient off metal, and avoid placing pads over a pacemaker or medication patch."},

{d:"circ",q:"High-quality CPR is characterized by:",
c:["Adequate rate and depth, full chest recoil, minimal interruptions, and avoiding excessive ventilation","Very rapid shallow compressions with frequent pulse checks","Deep compressions with leaning between them","Maximizing the number of ventilations"],a:0,
e:"Those four elements drive survival more than anything else a basic provider does. Keep pauses under 10 seconds and switch compressors every 2 minutes to limit fatigue."},

{d:"circ",q:"A patient in cardiac arrest in a remote area of the mountain has been in hypothermic conditions for 45 minutes. You should:",
c:["Begin CPR and continue while handling the patient gently, recognizing that resuscitation may succeed despite prolonged downtime","Declare the patient dead immediately","Perform vigorous rewarming by rubbing the limbs","Withhold CPR until the patient is warm"],a:0,
e:"'Not dead until warm and dead.' Cold dramatically reduces metabolic demand and protects the brain. Handle gently — rough movement can trigger ventricular fibrillation in a cold heart — and continue resuscitation during evacuation."},

/* ---------- BLEEDING & SOFT TISSUE ---------- */
{d:"soft",q:"The FIRST step in controlling external bleeding is:",
c:["Direct pressure over the wound","Applying a tourniquet","Elevating the extremity","Applying pressure to a proximal pressure point"],a:0,
e:"Direct, firm, sustained pressure controls the overwhelming majority of external bleeding. If it soaks through, add dressings on top — do not remove the originals."},

{d:"soft",q:"Bright red blood spurting in time with the pulse indicates:",
c:["Arterial bleeding","Venous bleeding","Capillary bleeding","Internal bleeding"],a:0,
e:"Arterial blood is bright red (oxygenated) and pulsatile. Venous blood is darker and flows steadily; capillary bleeding oozes."},

{d:"soft",q:"A tourniquet is indicated when:",
c:["Life-threatening extremity bleeding cannot be controlled by direct pressure","Any wound bleeds for more than a minute","The patient is anxious about the bleeding","A wound is contaminated"],a:0,
e:"Apply it tight enough to stop the bleeding, note the time, and do not loosen it in the field. Modern practice recognizes that a properly applied tourniquet saves lives with acceptable risk."},

{d:"soft",q:"You find a ski pole impaled in a patient's thigh. You should:",
c:["Stabilize the object in place with bulky dressings and transport","Remove it and apply direct pressure","Push it in further to control bleeding","Cut it flush with the skin without stabilizing"],a:0,
e:"The object may be tamponading a vessel; removing it can cause catastrophic bleeding and further damage. Stabilize in place. It may be shortened for transport only if necessary, with the object well secured."},

{d:"soft",q:"An amputated fingertip is recovered. Correct handling is to:",
c:["Wrap it in moist sterile gauze, seal it in a plastic bag, and keep the bag cool on ice — not in direct contact with ice","Place it directly on dry ice","Submerge it in warm water","Discard it and treat the stump"],a:0,
e:"Keep it cool and moist but never frozen or in direct contact with ice, which causes further tissue damage. Transport it with the patient."},

{d:"soft",q:"An abdominal evisceration should be managed by:",
c:["Covering the organs with a moist sterile dressing and an occlusive layer, without replacing them","Gently pushing the organs back inside","Applying a dry, tight bandage","Leaving it open to air"],a:0,
e:"Never replace eviscerated organs. Keep them moist and covered, flex the patient's knees to reduce abdominal tension, give oxygen, treat for shock, and transport."},

{d:"soft",q:"A partial-thickness (second-degree) burn is characterized by:",
c:["Blisters, intense pain, and moist red skin","Painless, white leathery skin","Redness only, with no blisters","Charred tissue with exposed muscle"],a:0,
e:"Superficial = red, painful, no blisters. Partial thickness = blisters, very painful. Full thickness = white/leathery/charred and often painless because nerve endings are destroyed — pain-free does not mean less serious."},

{d:"soft",q:"Initial management of a thermal burn on the hill is to:",
c:["Stop the burning process, remove non-adherent hot or constricting items, cover with a dry sterile dressing, and prevent hypothermia","Apply butter or ointment and wrap tightly","Break blisters to relieve pressure","Immerse the patient in ice water"],a:0,
e:"Cool briefly if appropriate, then cover dry and sterile. Burn patients lose heat and fluid rapidly — hypothermia is a real risk, especially in a cold environment. Remove jewelry before swelling sets in."},

{d:"soft",q:"Signs of internal bleeding include:",
c:["Distended rigid abdomen, bruising over the flank, vomiting blood, and signs of shock without visible blood loss","A cough with clear sputum","Warm dry pink skin","A slow strong pulse"],a:0,
e:"Suspect internal bleeding based on mechanism plus shock findings. Grey Turner's sign (flank bruising) and Cullen's sign (periumbilical bruising) are late; do not wait for them."},

{d:"soft",q:"For a patient with a nosebleed and no suspected head injury, you should have them:",
c:["Sit leaning slightly forward and pinch the fleshy part of the nose","Lie flat and tilt the head back","Pack both nostrils tightly with gauze","Blow the nose forcefully to clear clots"],a:0,
e:"Leaning back sends blood into the stomach, causing vomiting, and obscures how much is being lost. Pinch continuously for 10–15 minutes. Do not pack a nose when a basilar skull fracture is suspected."},

{d:"soft",q:"A closed soft-tissue injury with swelling and discoloration but intact skin is a:",
c:["Contusion","Laceration","Avulsion","Abrasion"],a:0,
e:"A contusion is a bruise from bleeding under intact skin. An avulsion is a flap torn loose; an abrasion is a scrape; a laceration is a cut."},

/* ---------- MUSCULOSKELETAL ---------- */
{d:"msk",q:"The general rule for splinting a long-bone fracture is to immobilize:",
c:["The joint above and the joint below the injury","Only the fracture site itself","The entire body","Only the joint below the injury"],a:0,
e:"Immobilizing both adjacent joints prevents motion at the fracture site. For a joint injury, immobilize the bones above and below that joint instead."},

{d:"msk",q:"Before AND after applying any splint you must check:",
c:["Circulation, motor, and sensory (CMS) distal to the injury","The patient's blood pressure","Pupil reactivity","Breath sounds"],a:0,
e:"OEC calls this CMS — circulation, motor, sensory — and on the skill sheets both the 'before' and the 'after' check are Critical Performance Indicators. Miss either one and the station is an automatic fail, however well you splinted. If distal pulses are lost after splinting, loosen it and reassess."},

{d:"msk",q:"A patient has an obviously angulated mid-shaft tibia fracture with no distal pulse. You should:",
c:["Apply gentle in-line traction to restore alignment and reassess the pulse, then splint","Splint it exactly as found and transport","Manipulate it repeatedly until the pulse is strong","Apply a tourniquet above the injury"],a:0,
e:"When distal circulation is absent, one careful attempt at gentle realignment with in-line traction is appropriate per most protocols. If resistance or severe pain is encountered, stop and splint as found."},

{d:"msk",q:"A traction splint is indicated for:",
c:["A closed mid-shaft femur fracture without joint involvement","A fractured pelvis","An open knee dislocation","A fractured tibia with the ankle involved"],a:0,
e:"Contraindications include pelvic fracture, hip or knee injury, lower-leg or ankle injury on the same limb, and partial amputation. Traction counteracts the powerful thigh muscle spasm that shortens the limb and worsens bleeding."},

{d:"msk",q:"A closed femur fracture is significant partly because it can result in:",
c:["Internal blood loss of 1 to 1.5 liters","Immediate airway compromise","Loss of all sensation below the waist","Rapid onset of hyperthermia"],a:0,
e:"That is roughly 20–30% of an adult's blood volume, into the thigh, with no external bleeding to see. Always treat a femur fracture as a potential shock patient."},

{d:"msk",q:"A sprain is an injury to a:",
c:["Ligament","Muscle or tendon","Bone","Nerve"],a:0,
e:"Sprain = ligament (bone to bone). Strain = muscle or tendon (muscle to bone). The classic skier's injury, an ACL or MCL tear, is a sprain."},

{d:"msk",q:"'Skier's thumb' involves injury to which structure?",
c:["The ulnar collateral ligament at the base of the thumb","The scaphoid bone","The flexor tendon of the index finger","The radial nerve"],a:0,
e:"The pole grip forces the thumb away from the hand during a fall, tearing the ulnar collateral ligament of the metacarpophalangeal joint. Splint and refer — untreated it causes lasting instability."},

{d:"msk",q:"A patient reports hearing a 'pop' in the knee during a twisting fall, followed by rapid swelling and instability. This most likely represents:",
c:["An anterior cruciate ligament tear","A simple contusion","A patellar dislocation that self-reduced","A hamstring strain"],a:0,
e:"Pop + immediate swelling (hemarthrosis) + giving way is the classic ACL presentation, and it is the signature ski injury. Splint in a position of comfort and transport by toboggan."},

{d:"msk",q:"An open fracture differs from a closed fracture in that:",
c:["The skin is broken at or near the fracture site, creating an infection risk","The bone is displaced","There is more pain","It always involves a joint"],a:0,
e:"Do not push protruding bone back in. Cover with a moist or dry sterile dressing per protocol, control bleeding, splint, and transport — open fractures need timely surgical care and antibiotics."},

{d:"msk",q:"In managing a suspected shoulder dislocation in the field, the OEC technician should generally:",
c:["Splint in the position found, supporting the arm with a sling and swathe or pillow","Forcefully reduce the joint immediately","Have the patient ski down with the arm free","Apply traction until the joint relocates"],a:0,
e:"Reduction is outside basic OEC scope unless local protocol and training specifically allow it. Splint as found, check CMS before and after, and transport. Attempted reduction risks neurovascular and fracture complications."},

{d:"msk",q:"RICE stands for:",
c:["Rest, Ice, Compression, Elevation","Reduce, Immobilize, Cover, Evacuate","Rest, Immobilize, Cold, Evaluate","Realign, Ice, Check, Elevate"],a:0,
e:"Useful for sprains, strains, and contusions. Ice for about 20 minutes at a time with a barrier against the skin, and never directly on skin in a cold environment."},

{d:"msk",q:"Compartment syndrome should be suspected when a patient with a lower-leg injury reports:",
c:["Pain out of proportion to the injury, especially with passive stretch, and increasing tightness","Mild soreness that improves with rest","Numbness that resolves when the splint is loosened only","Itching around the injury"],a:0,
e:"Rising pressure in a fascial compartment cuts off perfusion. Pain out of proportion is the earliest sign; pulselessness is very late. It is a surgical emergency — loosen constricting splints and expedite transport."},

{d:"msk",q:"Crepitus felt during palpation of an injured limb indicates:",
c:["Grating of bone ends against each other","Air in the airway","Normal joint movement","Ligament laxity"],a:0,
e:"Crepitus is a positive sign of fracture. Do not deliberately elicit it — once noted, stop palpating that area and splint."},

/* ---------- HEAD, SPINE & NEURO ---------- */
{d:"head",q:"A patient struck a tree, was briefly unconscious, and is now alert but repeatedly asking the same question. This suggests:",
c:["A concussion","A simple scalp laceration","Hypoglycemia","Heat exhaustion"],a:0,
e:"Repetitive questioning, amnesia around the event, headache, nausea, and 'feeling foggy' are hallmark concussion findings. Any loss of consciousness means the patient does not go back out and needs evaluation."},

{d:"head",q:"Rising blood pressure, falling pulse rate, and irregular respirations in a head-injured patient are collectively known as:",
c:["Cushing's triad, indicating rising intracranial pressure","Beck's triad, indicating cardiac tamponade","Shock","Normal compensation"],a:0,
e:"Cushing's triad is a late and ominous sign of increasing ICP and impending herniation. Note that head injury alone rarely causes shock in an adult — look elsewhere for the bleeding."},

{d:"head",q:"Bruising behind the ears (Battle's sign) and around the eyes (raccoon eyes) suggest:",
c:["A basilar skull fracture","A broken nose","A black eye from direct trauma only","A dental injury"],a:0,
e:"These take hours to develop, so they are more common on delayed presentations. They also contraindicate a nasopharyngeal airway and nasal packing. Clear fluid from the ear or nose (CSF) points the same direction."},

{d:"head",q:"Which patients should be assumed to have a spinal injury until proven otherwise?",
c:["Any patient with a significant mechanism of injury, altered mental status, neck or back pain, or neurologic deficit","Only patients who cannot move their legs","Only patients over 65","Only patients who fell from a height"],a:0,
e:"Distracting injuries and intoxication also make assessment unreliable. When in doubt, maintain manual in-line stabilization and use spinal motion restriction."},

{d:"head",q:"While assessing a possible spinal injury, manual in-line stabilization should be:",
c:["Established early in the primary assessment and maintained until the patient is fully secured","Applied only after a cervical collar is placed","Applied after the secondary assessment","Released to obtain a better airway"],a:0,
e:"Establish it as soon as you recognize the risk and do not let go until the patient is packaged. A collar alone is not sufficient — hands stay on until the head is secured."},

{d:"head",q:"A patient with a suspected spinal injury vomits while secured to a backboard. You should:",
c:["Log-roll the entire board as a unit to the side and clear the airway","Unstrap the patient and sit them up","Suction only, leaving the patient supine","Remove the cervical collar"],a:0,
e:"Rolling the whole board as a unit protects the spine while letting gravity and suction clear the airway. Airway always wins — but you do not have to sacrifice the spine to protect it."},

{d:"head",q:"A patient reports a 'stinger' — burning and tingling down one arm after a fall — that resolves in a minute. You should:",
c:["Treat as a possible spinal injury, assess carefully, and do not let the patient return to the slopes","Send the patient on their way since symptoms resolved","Apply a sling and let them ski down","Massage the neck to relieve the burning"],a:0,
e:"Transient neurologic symptoms indicate the cord or nerve roots were involved. Resolution does not rule out significant injury. Assess, restrict motion as indicated, and refer for evaluation."},

{d:"head",q:"Unequal pupils in an unresponsive head-injured patient may indicate:",
c:["Increasing intracranial pressure with pressure on cranial nerve III","Normal anatomic variation only","Hypoglycemia","Hypothermia"],a:0,
e:"About 1 in 5 people have naturally unequal pupils (anisocoria), but in the presence of head trauma and altered mental status you must assume rising ICP. Report it and expedite transport."},

{d:"head",q:"A generalized tonic-clonic seizure is occurring. Your management should be to:",
c:["Protect the patient from injury, do not restrain, place nothing in the mouth, and manage the airway afterward","Hold the patient still to stop the convulsions","Place a bite block between the teeth","Splash cold water on the face"],a:0,
e:"Move hazards away, pad the head, and time the seizure. Afterward, in the postictal phase, roll the patient to the side, manage the airway, give oxygen, and check blood glucose if trained."},

{d:"head",q:"Which mnemonic screens for the most common signs of stroke?",
c:["FAST — Face, Arms, Speech, Time","DCAP-BTLS","SAMPLE","AVPU"],a:0,
e:"Facial droop, arm drift, slurred speech, and time of onset. Time of last known well is the single most important piece of information you can pass on, because it determines treatment eligibility."},

{d:"head",q:"Status epilepticus is defined as:",
c:["A seizure lasting more than 5 minutes, or repeated seizures without regaining consciousness between them","Any seizure in a known epileptic","A seizure followed by confusion","A brief staring spell"],a:0,
e:"It is a true emergency with risk of hypoxia, hyperthermia, and permanent brain injury. Support the airway, give oxygen, and expedite ALS."},

{d:"head",q:"The recommended way to remove a helmet from an injured patient is:",
c:["With two rescuers — one maintains in-line stabilization of the head and neck while the other spreads and removes the helmet","By one rescuer pulling it straight off quickly","By cutting the chin strap and letting the patient sit up","Never — helmets are always left in place"],a:0,
e:"Remove the helmet if it prevents airway management or assessment, or if it does not hold the head securely. It takes two rescuers with constant stabilization, and a pad may be needed under the head afterward to keep the spine neutral."},

/* ---------- CHEST, ABDOMEN & PELVIS ---------- */
{d:"torso",q:"Flail chest is defined as:",
c:["Two or more adjacent ribs fractured in two or more places, creating a free-floating segment","A single fractured rib","A fractured sternum","A punctured lung"],a:0,
e:"The flail segment moves paradoxically — inward on inhalation, outward on exhalation. The underlying pulmonary contusion is usually the bigger problem. Support ventilation and give oxygen."},

{d:"torso",q:"An open ('sucking') chest wound should initially be covered with:",
c:["An occlusive dressing sealed on three sides, or a commercial vented chest seal","A dry gauze dressing taped on all four sides","Nothing — leave it open","A tourniquet"],a:0,
e:"The three-sided seal acts as a flutter valve: air escapes on exhalation but cannot enter on inhalation. If the patient worsens after sealing, burp the dressing to release trapped air. Note that current tactical and prehospital trauma guidance now prefers a vented commercial chest seal where one is available."},

{d:"torso",q:"Distended neck veins, absent breath sounds on one side, severe respiratory distress, and hypotension after chest trauma suggest:",
c:["Tension pneumothorax","Simple rib fracture","Asthma","Hyperventilation syndrome"],a:0,
e:"Air trapped in the pleural space collapses the lung and shifts the mediastinum, obstructing venous return. Tracheal deviation is a very late sign. This needs immediate ALS decompression — expedite."},

{d:"torso",q:"Beck's triad — muffled heart sounds, distended neck veins, and hypotension — indicates:",
c:["Cardiac tamponade","Tension pneumothorax","Hemothorax","Flail chest"],a:0,
e:"Blood in the pericardial sac prevents the heart from filling. Like tension pneumothorax it presents with JVD and hypotension, but breath sounds remain equal and lung fields clear."},

{d:"torso",q:"A patient with rib fractures is breathing shallowly and refusing to take deep breaths. The main danger is:",
c:["Hypoventilation leading to atelectasis and pneumonia","Immediate airway obstruction","Spinal injury","Hypoglycemia"],a:0,
e:"Splinting from pain causes poor ventilation. Never strap or tightly bind the chest — it worsens the problem. Give oxygen, allow a position of comfort, and encourage careful deep breaths."},

{d:"torso",q:"Which abdominal organ, when injured, most commonly produces massive rapid internal bleeding after blunt trauma?",
c:["The liver or spleen","The stomach","The gallbladder","The appendix"],a:0,
e:"The liver and spleen are solid, highly vascular, and relatively fragile. Left-sided rib fractures with left shoulder pain (Kehr's sign) strongly suggest splenic injury."},

{d:"torso",q:"The correct position for a patient with an isolated abdominal injury and no spinal concern is:",
c:["Supine with knees flexed to relax the abdominal wall","Prone","Sitting fully upright","Trendelenburg with legs elevated high"],a:0,
e:"Flexing the knees reduces tension on the abdominal muscles and eases pain. Give nothing by mouth, treat for shock, and keep the patient warm."},

{d:"torso",q:"A suspected pelvic fracture is significant primarily because:",
c:["It can cause massive internal hemorrhage — potentially several liters","It always injures the spinal cord","It causes immediate airway compromise","It is usually a minor injury"],a:0,
e:"The pelvis contains a rich venous plexus and major arteries. Do not repeatedly rock or spring the pelvis to test it — that can dislodge clots. Immobilize, treat for shock, and move quickly."},

{d:"torso",q:"Kehr's sign — pain referred to the left shoulder — is associated with:",
c:["Splenic rupture with diaphragmatic irritation","A rotator cuff tear","A cervical spine injury","Pneumothorax"],a:0,
e:"Blood irritating the underside of the diaphragm refers pain along the phrenic nerve to the shoulder. In a trauma patient it should raise strong suspicion for intra-abdominal bleeding."},

{d:"torso",q:"Hematuria (blood in the urine) after a hard fall onto the flank suggests injury to the:",
c:["Kidney","Liver","Pancreas","Diaphragm"],a:0,
e:"The kidneys sit in the retroperitoneal space and are vulnerable to flank trauma. Flank pain, flank bruising, and hematuria are the key findings."},

{d:"torso",q:"A patient's abdomen is rigid, distended, and diffusely tender after blunt trauma. This most likely indicates:",
c:["Internal bleeding or peritoneal irritation requiring rapid transport","A full stomach","Simple muscular soreness","Constipation"],a:0,
e:"Rigidity and guarding mean the peritoneum is irritated by blood or intestinal contents. This is a surgical problem — high-flow oxygen, treat for shock, nothing by mouth, and expedite."},

/* ---------- MEDICAL EMERGENCIES ---------- */
{d:"med",q:"A lodge guest describes crushing substernal chest pressure radiating to the left jaw, with nausea and sweating. Your priority actions include:",
c:["Position of comfort, oxygen if indicated, assist with prescribed nitroglycerin per protocol, consider aspirin, and expedite ALS","Have him walk to the parking lot","Give him water and let him rest for an hour","Apply cold packs to the chest"],a:0,
e:"Treat as an acute coronary syndrome. Keep him calm and still — exertion increases myocardial oxygen demand. Confirm blood pressure before assisting with nitroglycerin, and ask about erectile dysfunction medications, which are a contraindication."},

{d:"med",q:"Before assisting a patient with their prescribed nitroglycerin, you must verify:",
c:["The medication is the patient's own, is not expired, the systolic blood pressure is adequate, and no ED medication has been taken recently","Only that the patient wants it","That the patient has had no food","That it is under 3 doses per week"],a:0,
e:"Nitroglycerin is a vasodilator and can cause profound hypotension, especially combined with phosphodiesterase inhibitors such as sildenafil. Check blood pressure before and after each dose."},

{d:"med",q:"A known diabetic is confused, sweating, pale, and shaky. The most likely cause is:",
c:["Hypoglycemia","Hyperglycemia","Dehydration","A panic attack"],a:0,
e:"Hypoglycemia comes on fast with sympathetic signs — cool clammy skin, tachycardia, tremor, confusion, sometimes combative behavior. Hyperglycemia develops over days with warm dry skin, deep rapid (Kussmaul) breathing, and a fruity acetone odor."},

{d:"med",q:"That same diabetic is alert and able to swallow and protect her airway. You should:",
c:["Give oral glucose, sugar-containing drink, or other simple carbohydrate","Give nothing and wait for ALS","Give insulin","Induce vomiting"],a:0,
e:"Oral glucose is fast, safe, and often dramatically effective. If the patient is not alert enough to swallow safely, give nothing by mouth — protect the airway and expedite ALS."},

{d:"med",q:"When you cannot tell whether an unresponsive diabetic is hypo- or hyperglycemic and cannot check blood sugar:",
c:["Treat for hypoglycemia if the patient can protect their airway, since it is the more immediately dangerous condition","Assume hyperglycemia and withhold sugar","Give insulin","Do nothing until a glucometer arrives"],a:0,
e:"Untreated hypoglycemia causes brain injury within minutes; a small amount of extra sugar in a hyperglycemic patient does no meaningful harm. Airway protection is still the gate — never put anything in the mouth of a patient who cannot swallow."},

{d:"med",q:"Signs of anaphylaxis that distinguish it from a mild allergic reaction include:",
c:["Airway swelling, stridor or wheezing, and hypotension","Localized hives only","Itchy eyes","A single mosquito welt"],a:0,
e:"Anaphylaxis is a systemic reaction involving two or more body systems, classically respiratory compromise and/or circulatory collapse. It can kill within minutes."},

{d:"med",q:"An epinephrine auto-injector is administered into the:",
c:["Lateral thigh (anterolateral mid-thigh), which may be through clothing","Buttock","Deltoid only","Abdomen"],a:0,
e:"Hold it in place per the device's instructions, note the time, and expect a repeat dose may be needed. Even if symptoms resolve, the patient must be transported — biphasic reactions can recur hours later."},

{d:"med",q:"A patient with COPD who is hypoxic and in distress should receive:",
c:["Oxygen titrated to relieve hypoxia — never withhold oxygen from a hypoxic patient","No oxygen at all, due to hypoxic drive","Oxygen only if the pulse is over 100","Only room air with a bag-valve mask"],a:0,
e:"The hypoxic-drive concern is greatly overstated in the acute setting. A hypoxic patient needs oxygen. Titrate rather than blast it — an SpO2 target of 88–92% is usual in COPD — monitor ventilation, and be ready to assist if breathing slows."},

{d:"med",q:"A patient is having an asthma attack and has a prescribed metered-dose inhaler. You should:",
c:["Assist with the patient's own inhaler per protocol, coaching a slow deep breath and a breath-hold","Give someone else's inhaler","Have the patient breathe into a paper bag","Withhold the inhaler until ALS arrives"],a:0,
e:"Shake the canister, coordinate actuation with a slow deep inhalation, hold for about 10 seconds, and use a spacer if available. Document time and number of puffs."},

{d:"med",q:"AEIOU-TIPS is a memory aid for:",
c:["Causes of altered mental status","Splinting technique","Burn classification","Triage priorities"],a:0,
e:"Alcohol, Epilepsy/Electrolytes, Insulin (glucose), Overdose/Oxygen, Uremia, Trauma, Infection, Psychiatric/Poisoning, Stroke/Shock/Seizure. It keeps you from anchoring on the first plausible cause."},

{d:"med",q:"The FIRST consideration when responding to a patient with a behavioral emergency is:",
c:["Scene safety for you and your crew","Establishing rapport","Obtaining a full medical history","Restraining the patient"],a:0,
e:"Assess for weapons and exits, keep a clear path out, do not go in alone, and involve law enforcement when indicated. Once safe, use calm, non-threatening communication and look for medical causes — hypoglycemia, hypoxia, head injury, and intoxication all mimic psychiatric illness."},

{d:"med",q:"A patient who is hyperventilating from anxiety should be managed by:",
c:["Calm reassurance and coaching to slow their breathing, after ruling out medical causes","Having them breathe into a paper bag","Withholding oxygen entirely","Ignoring them until they stop"],a:0,
e:"Paper-bag rebreathing is no longer recommended — it can be dangerous if the real cause is a pulmonary embolism, asthma, diabetic ketoacidosis, or a heart attack. Rule out medical causes first, then coach the breathing."},

{d:"med",q:"The most common route of poisoning is:",
c:["Ingestion","Inhalation","Injection","Absorption"],a:0,
e:"For any poisoning: identify the substance, quantity, and time; contact poison control and medical direction; and bring containers with the patient. Do not induce vomiting."},

{d:"med",q:"A patient found in a snowcat maintenance shed has a headache, nausea, dizziness, and confusion. Others in the building feel ill too. You should suspect:",
c:["Carbon monoxide poisoning","Food poisoning","Influenza","Dehydration"],a:0,
e:"Multiple patients with similar vague symptoms in an enclosed space is the classic pattern. Get everyone out immediately, give high-flow oxygen, and remember that pulse oximetry reads falsely normal in CO poisoning."},

{d:"med",q:"A sudden severe headache described as 'the worst of my life' should raise suspicion for:",
c:["A subarachnoid hemorrhage or other stroke","A tension headache","Dehydration","Eye strain"],a:0,
e:"Thunderclap onset is a red flag. Combine it with altered mental status, vomiting, neck stiffness, or focal deficits and it becomes a load-and-go."},

{d:"med",q:"A patient with severe abdominal pain, fever, and rebound tenderness in the right lower quadrant most likely has:",
c:["Appendicitis","A kidney stone","Gastritis","A hernia"],a:0,
e:"Classic appendicitis: periumbilical pain migrating to the right lower quadrant (McBurney's point), anorexia, low-grade fever, and rebound tenderness. Nothing by mouth, position of comfort, and transport."},

/* ---------- ENVIRONMENTAL ---------- */
{d:"env",q:"Hypothermia in an adult is generally defined as a core body temperature below:",
c:["95°F (35°C)","98.6°F (37°C)","90°F (32°C)","80°F (27°C)"],a:0,
e:"Below 95°F/35°C is hypothermia. Mild is roughly 90–95°F, moderate roughly 82–90°F, and severe below about 82°F. Shivering typically stops in the moderate range — a bad sign, not an improving one."},

{d:"env",q:"Which finding suggests a patient has progressed from mild to moderate or severe hypothermia?",
c:["Shivering has stopped and the patient is confused or drowsy","The patient is shivering vigorously","The patient complains of being cold","The patient's hands are numb"],a:0,
e:"Shivering is the body's heat-generating mechanism. When it ceases in a still-cold patient, the body has lost the ability to compensate. Mental status changes track closely with core temperature drop."},

{d:"env",q:"When handling a severely hypothermic patient, you must:",
c:["Move them gently and horizontally, because rough handling can trigger ventricular fibrillation","Have them walk to the aid room to warm up","Rub the extremities vigorously","Give them hot coffee immediately"],a:0,
e:"A cold myocardium is extremely irritable. Handle gently, keep the patient horizontal, remove wet clothing, insulate from the ground, apply heat to the core (not the extremities), and give nothing by mouth if mental status is altered. No alcohol or caffeine."},

{d:"env",q:"Frostnip differs from frostbite in that frostnip:",
c:["Involves only superficial skin, is reversible, and leaves no permanent damage","Always causes blisters","Requires surgical debridement","Involves frozen deep tissue"],a:0,
e:"Frostnip is white, waxy, numb skin with soft underlying tissue that rewarms readily with skin-to-skin contact. Frostbite involves actual tissue freezing with hard, woody tissue and possible blistering."},

{d:"env",q:"Field rewarming of a frostbitten extremity should be attempted only if:",
c:["There is no chance of refreezing before definitive care","The patient requests it","It has been more than 24 hours","The tissue has already blistered"],a:0,
e:"Freeze-thaw-refreeze causes far more tissue damage than remaining frozen during transport. If you do rewarm, use a circulating water bath held with a thermometer at 98.6–102.2°F (37–39°C) per current Wilderness Medical Society guidance — older texts cite figures as high as 104°F, so go with what your course and medical director teach. Never dry heat, never rubbing, never snow."},

{d:"env",q:"Which of these is NEVER appropriate for a frostbite injury?",
c:["Rubbing the tissue with snow or massaging it to restore circulation","Removing wet or constricting clothing and jewelry","Protecting the area with loose dry dressings","Placing dry gauze between frostbitten fingers"],a:0,
e:"Rubbing destroys ice-crystal-laden tissue mechanically. Also avoid dry heat sources such as a stove or fire — numb tissue burns easily — and avoid letting the patient walk on frostbitten feet if it can be helped."},

{d:"env",q:"A patient working outside has painful muscle cramps in the legs, is sweating heavily, and is otherwise alert with normal mental status. This is:",
c:["Heat cramps","Heat stroke","Hyponatremia with seizures","Hypothermia"],a:0,
e:"Heat cramps come from salt and fluid loss. Move to a cool place, rest, stretch gently, and give an electrolyte-containing beverage if the patient is fully alert."},

{d:"env",q:"The single finding that distinguishes heat stroke from heat exhaustion is:",
c:["Altered mental status with a very high core temperature","Heavy sweating","Muscle cramping","Thirst"],a:0,
e:"Heat stroke is a true emergency defined by CNS dysfunction — confusion, combativeness, seizures, coma — with core temperature typically above 104°F. Skin may be hot and dry or still sweaty in exertional heat stroke; do not rule it out because the patient is sweating."},

{d:"env",q:"Field treatment of heat stroke centers on:",
c:["Rapid aggressive cooling — remove clothing, apply cold water and ice packs to the neck, armpits, and groin, and expedite transport","Giving the patient salt tablets","Slow passive cooling in the shade","Wrapping the patient in blankets"],a:0,
e:"Cool first, cool fast. Every minute above critical temperature causes organ damage. Stop active cooling when the patient's mental status improves or temperature approaches normal to avoid overshooting into hypothermia."},

{d:"env",q:"Acute mountain sickness (AMS) typically presents with:",
c:["Headache plus nausea, fatigue, dizziness, or insomnia after ascent to altitude","Chest pain and diaphoresis","Unilateral weakness","A rash"],a:0,
e:"AMS usually begins 6–12 hours after ascent. Halt further ascent, rest, and hydrate. If symptoms worsen or neurologic signs appear, descend — descent is the definitive treatment for every altitude illness."},

{d:"env",q:"A climber at altitude develops ataxia, confusion, and a severe headache. The most likely diagnosis and treatment are:",
c:["High-altitude cerebral edema (HACE) — immediate descent, oxygen, and rapid evacuation","Simple AMS — rest at current altitude","Dehydration — oral fluids only","Hypothermia — rewarming"],a:0,
e:"Ataxia is the hallmark that separates HACE from AMS — have the patient walk a straight heel-to-toe line. HACE is life-threatening and descent must not be delayed."},

{d:"env",q:"High-altitude pulmonary edema (HAPE) is characterized by:",
c:["Dyspnea at rest, cough, decreased exercise tolerance, and crackles in the lungs","A dry cough with no shortness of breath","Unilateral leg swelling","Fever and sore throat"],a:0,
e:"HAPE is the most common cause of death from altitude illness. Descend immediately, give oxygen, minimize exertion, and keep the patient warm."},

{d:"env",q:"At a lightning mass-casualty scene, the accepted approach to triage is:",
c:["Reverse triage — treat the apparently dead first, because they may be in reversible respiratory or cardiac arrest","Standard triage, tagging the pulseless as deceased","Treat only the walking wounded","Wait for ALS before touching anyone"],a:0,
e:"Lightning arrest is often from respiratory paralysis and responds well to prompt ventilation and CPR. This is the one clearly recognized exception to conventional triage. Ensure the scene is safe first — lightning does strike the same place twice."},

{d:"env",q:"A patient pulled from cold water after a submersion incident should be:",
c:["Resuscitated aggressively, with spinal precautions if the mechanism warrants, and rewarmed carefully","Presumed dead if submerged over 10 minutes","Given abdominal thrusts to expel water","Walked to warm up"],a:0,
e:"Cold-water submersion victims — especially children — have survived remarkably long downtimes neurologically intact. Do not attempt to expel water; get to ventilation and compressions."},

{d:"env",q:"The most common signs of a significant bee or wasp sting reaction requiring urgent care are:",
c:["Generalized hives, throat tightness, wheezing, and dizziness","Local redness and pain at the sting site","A small itchy bump","Bruising"],a:0,
e:"Local reactions are common and benign. Systemic involvement of two or more body systems is anaphylaxis: epinephrine, oxygen, and expedited transport. Remove a stinger by scraping rather than squeezing."},

{d:"env",q:"An avalanche burial victim is extricated and is not breathing. The FIRST priority after extrication is:",
c:["Clearing the airway and beginning ventilations","Checking for a broken leg","Removing wet clothing","Measuring core temperature"],a:0,
e:"Asphyxia is the leading cause of avalanche death. Clear the airway of snow and start ventilations immediately, handle gently for possible hypothermia, and maintain spinal precautions given the trauma mechanism."},

/* ---------- SPECIAL POPULATIONS, OB, TRANSPORT & ICS ---------- */
{d:"spec",q:"When assessing a young child, the best approach is generally to:",
c:["Get down to their eye level, keep the caregiver close, and assess from toe to head","Separate the child from the parent immediately","Assess head to toe as with an adult","Use only medical terminology"],a:0,
e:"Toe-to-head assessment is less frightening for small children, and a calm caregiver is your best asset. Remember that children compensate well and then crash suddenly — a quiet, listless child is far more worrying than a screaming one."},

{d:"spec",q:"Compared with adults, children in shock:",
c:["Compensate longer and then deteriorate rapidly","Show hypotension much earlier","Never develop shock","Always have a slow pulse"],a:0,
e:"Pediatric blood pressure is maintained until a large volume is lost, then collapses abruptly. Rely on heart rate, capillary refill, skin signs, and mental status rather than blood pressure."},

{d:"spec",q:"A common pitfall when assessing geriatric patients is that:",
c:["They may not exhibit typical signs — a heart attack may present without chest pain and infection without fever","They always report pain accurately","They tolerate injury better than young adults","Their medications rarely matter"],a:0,
e:"Blunted pain perception, medications such as beta-blockers that prevent compensatory tachycardia, and baseline cognitive changes all mask illness. Get a good medication list and a baseline mental status from family."},

{d:"spec",q:"When communicating with a patient who is deaf or hard of hearing, you should:",
c:["Face them directly with good lighting, speak clearly at a normal pace, and use writing or gestures as needed","Shout loudly into the ear","Speak only to the companion","Assume they cannot understand"],a:0,
e:"Many patients lip-read; covering your mouth or turning away defeats it. Never assume a hearing impairment implies any cognitive impairment."},

{d:"spec",q:"The three signs of imminent delivery are:",
c:["Crowning, contractions 2 minutes apart or less, and a feeling of needing to push or move the bowels","Nausea, backache, and fatigue","Swollen ankles, headache, and thirst","Mild cramping and light spotting"],a:0,
e:"If the head is crowning, delivery is happening where you are. Prepare to assist rather than transport."},

{d:"spec",q:"While assisting a normal delivery, after the head delivers you should:",
c:["Support the head, check for a cord around the neck, and suction the mouth then the nose if indicated","Pull firmly on the head to speed delivery","Push on the abdomen","Hold the head back until transport arrives"],a:0,
e:"Never pull. Support and guide. If the cord is around the neck, gently slip it over the head; if it is too tight and cannot be freed, it must be clamped and cut. Mouth before nose so the infant does not gasp fluid in."},

{d:"spec",q:"A pregnant patient in her third trimester must be transported. To avoid supine hypotensive syndrome, position her:",
c:["Tilted or lying on her left side","Flat on her back","Prone","Sitting fully upright with legs extended"],a:0,
e:"The gravid uterus compresses the inferior vena cava when supine, reducing venous return. If she is on a backboard, tilt the whole board to the left."},

{d:"spec",q:"When lifting a patient onto a backboard or into a toboggan, proper body mechanics require that you:",
c:["Keep the back straight, lift with the legs, and keep the load close to your body","Bend at the waist and lift with the back","Twist while lifting to save time","Lift with arms fully extended"],a:0,
e:"Keep your feet shoulder-width apart, back straight, and never twist while bearing weight. Call the lift so everyone moves together, and know your limits — ask for more hands."},

{d:"spec",q:"An emergency move (such as a rapid drag) is justified when:",
c:["There is immediate danger to the patient or rescuers, or you must reach a more critical patient","The patient is uncomfortable","Transport is running late","The patient asks to be moved"],a:0,
e:"Emergency moves accept some risk of aggravating a spinal injury in exchange for removing the patient from immediate danger — fire, avalanche hazard, or an unstable scene. Pull along the long axis of the body whenever possible."},

{d:"spec",q:"When loading a patient into a toboggan for evacuation, the patient should generally be:",
c:["Secured with the head uphill, insulated from the cold, and protected from wind and snow","Positioned feet uphill in all cases","Left unsecured for comfort","Transported without any insulation to keep them alert"],a:0,
e:"Head uphill is the general rule for stability and patient comfort, though steep terrain and specific injuries can modify it. Insulation underneath matters as much as blankets on top — conductive heat loss to the snow is enormous."},

{d:"spec",q:"In the START triage system, the three things you assess are:",
c:["Respirations, perfusion, and mental status","Pulse, pupils, and pain","Airway, bleeding, and fractures","Blood pressure, temperature, and history"],a:0,
e:"Remember RPM. Anyone who can walk is tagged minor (green) and directed away first. Respirations over 30, capillary refill over 2 seconds or no radial pulse, or inability to follow simple commands make a patient immediate (red)."},

{d:"spec",q:"Under the Incident Command System, the person in charge of an incident is the:",
c:["Incident Commander","Safety Officer","Operations Chief","Public Information Officer"],a:0,
e:"ICS establishes a single, clear chain of command with manageable span of control (generally 3–7 reports). The Incident Commander is always established, and other positions are filled only as the incident requires."}

];
