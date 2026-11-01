

## 1. Problem and goal

### 1-1. Recognising the problem

<figure class="fig" id="fig-1"><img src="/report/figures/fig01_xray.jpg" alt="X-ray of the lower back" width="1870" height="850" loading="lazy" decoding="async"><figcaption>Figure 1. X-ray of the lower back.</figcaption></figure>

This project began with an injury to tech lead Hunkun Lee. While warming up with a light weight, he ruptured a disc in his lower back (Figure 1). He had assumed that only heavy loads close to one's limit were dangerous. But studying the matter after the injury showed that the moment placed on joints and skeletal muscles depends less on how many kg are lifted than on where in the body's structure that weight goes as it resists gravity. With the same weight, if the centre of mass shifts by a few cm, the moment grows several times over by the principle of the lever.

What is dangerous is not free weights themselves, lifting a bar without a machine, but a distorted load path. The load path means which joints and muscles the weight of the bar and the body is transferred to, and how much. Unlike machine exercises, where the range and direction of motion are fixed, free weights use several joints together and the body keeps its own balance. Because they bear a larger and more complex load and build strength and the neuromuscular system together, free weights are the foundation of every sport and of elite athletics.

Many people find free weights hard and dangerous to do alone, so alternative forms of exercise that borrow from free weights, such as CrossFit and HYROX, keep appearing. But these programmes are only built to be fast and immersive, and so to motivate. The risk that a distorted load path concentrates the moment on a single joint is unchanged, and the fast repetitions make it larger if anything.

In the end, the problem is that there is no way to see the load path. He had received personal training (PT) from several trainers even before the injury, but every time the basis of the coaching was know-how passed by word of mouth among trainers and each one's subjective experience. This is not a question of one trainer's competence. With no way to see, anyone has to rely on the eye and on feel. Even when studying on his own, online information such as YouTube was inaccurate, and papers with few subjects reached different conclusions. Bone length, skeletal muscle and anatomy differ from person to person, so there was no basis for telling which of them fit his own body.

### 1-2. Market failure and the vicious cycle

Because there is no means of measuring the load path, that is, no means of analysing biomechanics quantitatively, the gym industry has reached market failure. In Korea, more than 80% of gyms close within five years. In the United States, 80% of trainers change jobs every year, and half of new members quit within six months. A structure in which the three participants, trainers, gyms and members, all lose together from the same cause has set in (Figure 2).

Trainers coach with eloquence and know-how, with neither numbers to coach by nor records to prove the quality of their coaching. With no means of quantitative analysis, there is no way to verify coaching quality. In a market where the buyer cannot tell quality apart, only the low-quality side remains. Economics calls such a market a market for lemons. To the gym, the trainer is a cost to be cut; the trainer competes on sales ability; and the member chooses the cheaper option.

Gyms fight a price war in a long-saturated market, advertising only premium facilities and equipment, and hire trainers on freelance contracts with no base salary, paying commission on sales of expensive PT. The cost of the market failure and the risk of injury fall on the member. Coaching quality has become a social issue, to the point that an amendment to the Sports Facilities Act restricting instruction to nationally certified instructors was introduced in the National Assembly. But raising the qualification bar does not resolve a long-standing market failure that arose from the lack of quantitative analysis.

<figure class="fig" id="fig-2"><img src="/report/figures/fig02_cycle.png" alt="The vicious cycle of the three participants" width="1340" height="980" loading="lazy" decoding="async"><figcaption>Figure 2. The vicious cycle of the three participants.</figcaption></figure>

### 1-3. Limits of existing solutions

<figure class="fig" id="fig-3"><img src="/report/figures/fig03_alternatives.jpg" alt="Examples of existing solutions" width="2514" height="1822" loading="lazy" decoding="async"><figcaption>Figure 3. Examples of existing solutions.</figcaption></figure>

Existing solutions fall broadly into three kinds (Figure 3, Table 1). Demand for a point of difference and for a means of quantitative analysis is large, large enough that related research and similar services keep pouring out. But none of the three has reached commercial use, for the limits described below. The rig is what this project (RackTracker) produced: a set of hardware fitted to a power rack that measures exercise movement in 3D. A power rack is a steel frame on which the bar is racked for exercise.

The first is laboratory motion capture. Marker-based motion capture measures 3D positions by detecting the outlines of markers on a marker suit with several infrared cameras, and it is the reference for accuracy. Markerless motion capture infers the structure of the human body with an AI model, without markers. Either way, laboratory motion capture needs dozens of cameras, a dedicated space and massive computing hardware, so it cannot be brought into a gym. The rig is markerless, because the person exercising cannot be made to wear a marker suit or have many markers attached.

The second is single-camera apps and devices that use a lightweight markerless AI model. Phone apps and the body-asymmetry analysers placed in gyms belong here. A photo taken by one camera does not retain depth, that is, the distance between the camera and the person. The 3D pose such an app draws is an estimate: joint positions on the photo, with depth filled in from learned body proportions and poses (Figure 4). So it cannot fix the person's real size and position in cm, nor tell by how many cm the centre of mass is forward or back of a joint. Since the moment is the weight multiplied by this distance, 3D made from a single camera cannot yield the load path.

<figure class="fig" id="fig-4"><img src="/report/figures/fig04_mono_depth.jpg" alt="A single-camera app's 3D pose seen from the side" width="2160" height="1080" loading="lazy" decoding="async"><figcaption>Figure 4. A single-camera app's 3D pose seen from the side.</figcaption></figure>

Depth is also why existing apps mostly imitate biomechanical analysis with photos taken from the side. Shot from the side, the body's front-to-back direction lands directly along the horizontal axis of the photo, so the front-to-back distance between the centre of mass and a joint can be roughly read off the screen without depth. But twisting of the body and leaning to the left or right lie in the depth direction and do not appear in the photo, so this analysis assumes the body moves only within a single plane.

The capture conditions do not suit a gym either. A phone camera uses a rolling shutter, exposing pixels one row at a time from top to bottom, so a fast-moving bar and limbs come out skewed. A single camera set up outside the power rack has the body hidden by the uprights and the plates on the bar, and its position and distance differ every time, so the capture environment cannot be standardised. In the end, the analysis in commercial apps and devices stops at low-level analysis that can be done from joint positions on the photo alone, such as counting reps and threshold checks on joint angles (Figure 5). Reps and angles are information a trainer can also see by eye, so the load path that determines the risk remains invisible.

<figure class="fig" id="fig-5"><img src="/report/figures/fig05_monocular.jpg" alt="Limits of single-camera apps and devices" width="2200" height="688" loading="lazy" decoding="async"><figcaption>Figure 5. Limits of single-camera apps and devices.</figcaption></figure>

The third is instrumented machines. They measure torque with sensors attached to a machine that moves along a fixed path, so they cannot measure the load path of free weights.

<div class="tbl" id="tab-1"><table><caption>Table 1. Comparison of two of the existing solutions.</caption><thead><tr><th style="text-align:left">Item</th><th style="text-align:left">Laboratory motion capture</th><th style="text-align:left">Single-camera apps and devices</th></tr></thead><tbody><tr><td data-th="Item" style="text-align:left">What is measured</td><td data-th="Laboratory motion capture" style="text-align:left">Full-body 3D joints</td><td data-th="Single-camera apps and devices" style="text-align:left">On-screen angles, rep counts, pass/fail binary judgements</td></tr><tr><td data-th="Item" style="text-align:left">Accuracy</td><td data-th="Laboratory motion capture" style="text-align:left">Highest</td><td data-th="Single-camera apps and devices" style="text-align:left">Low (depth estimated from body proportions)</td></tr><tr><td data-th="Item" style="text-align:left">Limits</td><td data-th="Laboratory motion capture" style="text-align:left">Cost of introducing dozens of synchronised sensors, massive post-processing computing environment, large dedicated space required</td><td data-th="Single-camera apps and devices" style="text-align:left">Low-level analysis at the level of proxy metrics, poor computing environment and rolling-shutter cameras, capture environment cannot be standardised</td></tr></tbody></table></div>

### 1-4. Goal and the load path

The goal is to build a device that installs on a gym's power rack as it is, measures and reconstructs full-body 3D joints, and derives the load path from those joints. The exercise covered first is the squat, the representative free-weight lift. Accuracy is measured on Fit3D[1], a public dataset with ground truth measured by marker-based motion capture.

Synchronised capture means three cameras fixed to the power rack shooting at the same instant on one signal. Triangulation is the calculation that solves for a point's position in space from its coordinates on the photos of several cameras whose positions are known.

After the three cameras are fixed to the power rack, their positions and orientations relative to one another are measured in advance. The rig finds the joints in each of the three photos, then triangulates to obtain spatial coordinates for every joint. 3D joints are the spatial coordinates of the joints obtained this way, recorded for every capture instant. The depth that a single camera would have to estimate is obtained by calculation in this way too.

At the end, the rig derives the load path. The load path is written in three items: cause, effect and interpretation. The cause records where the centre of mass sits over the feet; the effect records how much moment the weight of the bar and the body placed on the ankle, knee, hip and lumbar (lower back); and the interpretation records which muscles took that moment.

All three items come from the 3D joints. The bar's position is not found separately; since the bar rests on the shoulders, it is taken from the position of the shoulder joints. Feeding the 3D joints with the member's body weight and sex, the weight ratios of the body segments, and the bar weight entered before the exercise gives the moment at each joint. Accuracy is therefore verified at the 3D joints, and the result is given in Chapter 8.

## 2. Overview of the deliverable

### 2-1. What the rig consists of

The rig is fitted to a power rack, and the results are viewed on a tablet (Figure 6).

<figure class="fig" id="fig-6"><img src="/report/figures/fig06_rig.jpg" alt="Concept diagram of the rig and the rig as installed" width="1939" height="1269" loading="lazy" decoding="async"><figcaption>Figure 6. Concept diagram of the rig and the rig as installed.</figcaption></figure>

The rig's hardware is three cameras, a trigger board, an edge computer and a tablet (Figure 7). The three cameras are fixed to the uprights of the power rack and view the person from three directions. The trigger board is a small board that sends the signal that opens the shutter (the exposure signal) to all three cameras at once. The edge computer is a single small computer (Jetson Orin NX Super 16GB), and it completes joint inference, triangulation and the calculations that follow inside the rig.

The three cameras and the trigger board connect to the edge computer by USB. Each camera has two cables: a twisted two-pair cable that receives the exposure signal from the trigger board, and a USB cable that sends photos to the edge computer. The tablet also connects to the edge computer by a single USB cable, and the screen is exchanged over that cable. Photos are taken 30 times a second, 90 photos a second, and never leave the rig while passing through the pipeline, so the rig is a closed network in which data moves only between the edge computer and the tablet.

All software runs inside the edge computer; the tablet only shows the screen. The foundation is the rig OS. The rig OS is the software that lends the cameras and the trigger board to only one job at a time and manages the rig as a whole. On top of it, the 3D joints and the load path are calculated, and the results are drawn in the kiosk app that appears in the tablet's browser. The kiosk app is the rig's only screen. Every operation, from the checks and calibration after the cameras are mounted to measuring the exercise and viewing the results, is done in this app.

<figure class="fig" id="fig-7"><img src="/report/figures/fig07_parts.jpg" alt="Parts of the rig" width="3114" height="2252" loading="lazy" decoding="async"><figcaption>Figure 7. Parts of the rig.</figcaption></figure>

### 2-2. The four procedures and the set

Operating the rig is divided into four procedures: diagnostics, lens calibration, position calibration and measurement. Diagnostics is run after the rig is switched on or after the cameras or cables have been touched. It checks the hardware and the camera synchronisation automatically. Lens calibration is done when a camera is first mounted or replaced. For each camera, a calibration board printed with a grid pattern is photographed at several distances and tilts to obtain the lens's focal length and distortion.

Position calibration is done right after installation and again after a camera has moved. The three cameras photograph the same calibration board at the same time to obtain the relative positions and orientations between the cameras. Measurement is the procedure in which the rig measures and reconstructs the joints while the member exercises, and it opens only when diagnostics has passed and both calibrations are in place (Figure 8).

<figure class="fig" id="fig-8"><img src="/report/figures/fig08_flow.jpg" alt="Screens of the four procedures" width="3212" height="1256" loading="lazy" decoding="async"><figcaption>Figure 8. Screens of the four procedures.</figcaption></figure>

A set is one stretch of exercise done without resting. Measurement runs per set, and the sets one member completes in succession are grouped into a single record called a session. Choosing the member on the tablet and entering the bar weight turns the cameras on. The start and end of a set are signalled with a tablet button, and the bar weight can be entered again for each set.

3D joints come in two kinds. Live values are the 3D joints drawn on the tablet immediately during the set, and from the instant a photo is taken to the live values being drawn takes a median of 251ms.

Final values are the 3D joints refined and stored from the same photos with the photos of the preceding and following instants added, and so they follow about 20 seconds behind the live values. The accuracy in Chapter 8 is measured on final values. The session report is a report that writes the load path from the session's final values, and it is updated and shown on the measurement screen when a set ends and the final values arrive.

### 2-3. Layers

The rig's structure has four layers (Figure 9). From the bottom, they are hardware, rig OS, the 3D measurement pipeline, and analysis and screen, and data flows from bottom to top. The tablet is a terminal that displays the top layer's screen, so it is not counted as a layer.

The bottom hardware layer is the three cameras, the trigger board and the edge computer. The rig OS layer above it lends the critical resources, the cameras and the trigger board, to only one procedure at a time, and receives and passes up the three photos taken at the same instant. The third layer, the 3D measurement pipeline, finds joints in the three photos and triangulates them into 3D joints, passing live values up immediately and final values up after refinement. The top layer, analysis and screen, calculates the load path from the 3D joints and draws it on the tablet through the kiosk app. Chapters 4 to 7 cover these layers one by one from the bottom up, and Chapters 4 to 6 each record the hard problems in their last section.

<figure class="fig" id="fig-9"><img src="/report/figures/fig09_layers.png" alt="Layers of the rig" width="1340" height="760" loading="lazy" decoding="async"><figcaption>Figure 9. Layers of the rig.</figcaption></figure>

## 3. Progress

### 3-1. WBS

Development ran in three stages from March to October 2026 (Figure 10). The WBS (work breakdown structure) is a list that breaks the work into three levels: stages, sprints and issues. A sprint is a period with a single goal, and an issue is one item of work registered on GitHub.

The three stages are MVP 1, MVP 2 and Prototype, where an MVP is a trial version with only the core features. MVP 1 was the first stage, finding 2D joints in a single video, from March to mid-April. 2D joints are the coordinates on the photo of joints found in a single photo. MVP 2 was the second stage, building 3D joints from two videos, from mid-April to the third week of May. Prototype was the third stage, stabilising the 3D joints and then building the rig and connecting it through to the kiosk app, from the fourth week of May to October. The three stages follow one another without overlap, and Prototype is the longest.

<figure class="fig" id="fig-10"><img src="/report/figures/fig10_wbs.png" alt="WBS Gantt chart" width="1340" height="726" loading="lazy" decoding="async"><figcaption>Figure 10. WBS Gantt chart.</figcaption></figure>

### 3-2. Three stages

In MVP 1, a web demo was built that finds and draws 2D joints at every instant in a single uploaded exercise video (Table 2). 2D joints have no depth, so the load path could not be derived, and the next stage's goal was set as 3D joints.

In MVP 2, 2D joints were found in the videos of two cameras placed in different directions and triangulated into 3D joints. The videos came from Panoptic[2]. Panoptic is a public research dataset shot with hundreds of cameras inside a dome, and it comes with the cameras' positions and orientations and ground-truth 3D joints. The deliverable is a PC demo that rotates the 3D joints on screen for viewing.

Prototype began by solving, on Panoptic, the two problems that remained in MVP 2's 3D joints. One was jitter, joint positions shaking from one instant to the next; the other was missing joints, where the 3D position of an occluded joint is empty. Jitter was fixed by a refinement calculation that adds in the preceding and following instants. Missing joints could not be fixed by calculation. A 3D position only comes out when two or more cameras have seen the joint, so with only two cameras, the joint goes missing as soon as one view is occluded. After testing on Panoptic with different numbers and placements of cameras, the camera count was set at three.

After the camera count was decided, the rig was built. The calculation was moved from the PC to the edge computer, the three cameras and the trigger board were mounted, and the kiosk app and the load path calculation were added. Accuracy was measured with Fit3D.

<div class="tbl" id="tab-2"><table><caption>Table 2. Goals and deliverables of the three stages.</caption><thead><tr><th style="text-align:left">Stage</th><th style="text-align:center">Period</th><th style="text-align:left">Goal</th><th style="text-align:left">Deliverable</th><th style="text-align:left">Data</th></tr></thead><tbody><tr><td data-th="Stage" style="text-align:left">MVP 1</td><td data-th="Period" style="text-align:center">Mar–Apr</td><td data-th="Goal" style="text-align:left">2D joint estimation from one video</td><td data-th="Deliverable" style="text-align:left">Web demo</td><td data-th="Data" style="text-align:left">Uploaded exercise video</td></tr><tr><td data-th="Stage" style="text-align:left">MVP 2</td><td data-th="Period" style="text-align:center">Apr–May</td><td data-th="Goal" style="text-align:left">3D joint synthesis from two videos</td><td data-th="Deliverable" style="text-align:left">PC demo (3D viewer)</td><td data-th="Data" style="text-align:left">Panoptic</td></tr><tr><td data-th="Stage" style="text-align:left">Prototype</td><td data-th="Period" style="text-align:center">May–Oct</td><td data-th="Goal" style="text-align:left">Prototype rig for real-time measurement</td><td data-th="Deliverable" style="text-align:left">The rig (three cameras, trigger board, edge computer, tablet)</td><td data-th="Data" style="text-align:left">Panoptic, Fit3D, sets captured with the rig</td></tr></tbody></table></div>

### 3-3. Design turning points

During development, the rig's parts and calculation method were changed in six major ways (Table 3). In every case, the change came after trying first and hitting a wall. Changing one thing sometimes caused a block elsewhere. Attaching three cameras to a single USB port left too little bandwidth, so photos were received compressed as JPEG. Replacing the edge computer with a larger model left no pin to emit the exposure signal, so a separate trigger board was added. In the calculation, live values and final values were separated, and the model trained on exercise videos (the learned model) was used only as the starting point for the final value calculation.

<div class="tbl" id="tab-3"><table><caption>Table 3. Design turning points.</caption><thead><tr><th style="text-align:left">Decision</th><th style="text-align:left">Bottleneck</th><th style="text-align:left">Outcome</th></tr></thead><tbody><tr><td data-th="Decision" style="text-align:left">From two cameras to three</td><td data-th="Bottleneck" style="text-align:left">With two, occluded joints went missing, and missing joints could not be filled in by calculation</td><td data-th="Outcome" style="text-align:left">Triangulation with three cameras (Sections 4-1, 6-2)</td></tr><tr><td data-th="Decision" style="text-align:left">Receive photos compressed as JPEG</td><td data-th="Bottleneck" style="text-align:left">Opening three cameras uncompressed ran out of USB bandwidth, and photos came from only one. The compression error was smaller than the joint inference error</td><td data-th="Outcome" style="text-align:left">JPEG-compressed transfer (Section 4-2)</td></tr><tr><td data-th="Decision" style="text-align:left">Replace the edge computer with a larger model</td><td data-th="Bottleneck" style="text-align:left">The prototype was to be built on high specifications and scaled down later. Computing headroom was needed to run the most accurate joint inference model for each camera and to cut the turnaround time</td><td data-th="Outcome" style="text-align:left">Jetson Orin NX Super 16GB (Section 4-2)</td></tr><tr><td data-th="Decision" style="text-align:left">Trigger on a dedicated board</td><td data-th="Bottleneck" style="text-align:left">The cameras do not accept a software trigger, so a hardware signal was needed. The replacement edge computer had no pin to emit that signal</td><td data-th="Outcome" style="text-align:left">Trigger board (Section 4-1)</td></tr><tr><td data-th="Decision" style="text-align:left">Separate live values and final values</td><td data-th="Bottleneck" style="text-align:left">The calculation that adds in the preceding and following photos only finishes after the set ends, so it could not be drawn on screen immediately. Cutting the window short to hurry it left accuracy short</td><td data-th="Outcome" style="text-align:left">Live values immediately, final values later (Sections 2-2, 6-3)</td></tr><tr><td data-th="Decision" style="text-align:left">The learned model only for the final value calculation</td><td data-th="Bottleneck" style="text-align:left">Given the learned model's 3D joints as the starting point, final value accuracy rose. On the live value path it did not clear the criterion</td><td data-th="Outcome" style="text-align:left">Starting point of the final value calculation (Sections 6-3, 6-4)</td></tr></tbody></table></div>

### 3-4. How the work was run

Development proceeded issue by issue. Each issue had one branch, one pull request (PR) and one management document, and the work done and the decisions made were recorded in the management document. A git hook checks the rules on every commit and blocks commits that change only code without a management document. The records in the management documents and commits are the basis for the WBS and for this report; up to mid-October there were 293 issues. Much of the code and documentation was written by AI coding agents under the same rules, and the guidelines the agents follow are also kept as documents inside the repository.

## 4. Rig hardware

### 4-1. Cameras and the sync trigger

The three cameras are global-shutter USB cameras of the same model, and they take 30 pictures per second at 1920×1200 resolution. Each camera carries a wide-angle lens and is mounted on a power rack post turned 90° so that it shoots in portrait, so the whole body fits in one picture even at close range.

A global shutter exposes every pixel of the sensor at the same instant, so unlike a rolling shutter it does not record a fast-moving bar or limbs as skewed (Figure 11). A rolling shutter exposes each row at a different instant; a global shutter exposes all rows together and only reads them out row by row.

<figure class="fig" id="fig-11"><img src="/report/figures/fig11_shutter.jpg" alt="Rolling shutter and global shutter" width="3048" height="1014" loading="lazy" decoding="async"><figcaption>Figure 11. Rolling shutter and global shutter.</figcaption></figure>

For triangulation to be correct, the three cameras must capture the same instant. If each camera is left to run on its own clock, it takes one picture every 33.3ms, so even when the nearest pictures are paired, the capture instants of two cameras can be up to 16.7ms apart. If the bar is moving fast at 1.5m per second, it travels 25mm in that time, and the same joint lands in a different place in each camera's picture. These cameras cannot have their shutters aligned by a software command; they can be aligned only by an electrical signal arriving at the trigger input pin. The current edge computer has no pin that can produce such a signal, so a separate trigger board was built to send the exposure signal to all three cameras at once.

The trigger board is a microcontroller (Raspberry Pi Pico) and a level-shifting circuit wired together on a breadboard (Figure 12). When the edge computer sends a start command over USB, the microcontroller emits the exposure signal as 30 pulses per second, and the level-shifting circuit lowers those pulses to the voltage the cameras' trigger input expects. In external trigger mode, a camera takes one picture each time the pulse rises. So one pulse becomes three pictures of the same instant (Figure 13).

<figure class="fig" id="fig-12"><img src="/report/figures/fig12_trigger.jpg" alt="Trigger board" width="3142" height="1102" loading="lazy" decoding="async"><figcaption>Figure 12. Trigger board.</figcaption></figure>

Whether the exposure times match is checked with the STROBE that the cameras output. STROBE is a signal that runs in the opposite direction to the exposure signal: the camera emits it each time it actually exposes. STROBE returns to the trigger board on the other pair of the same two-pair twisted cable that carries the exposure signal, and the trigger board counts, for every pulse, whether all three cameras exposed. The exposure time spread is the time difference, within one pulse, between the camera that exposed first and the camera that exposed last. Recording the STROBE of all three cameras together with a logic analyser gave a median exposure time spread of 0.12ms, and the widest spread was 0.16ms. A bar at the same speed travels 0.24mm in 0.16ms.

<figure class="fig" id="fig-13"><img src="/report/figures/fig13_sync.png" alt="Signal flow of synchronised capture" width="1340" height="750" loading="lazy" decoding="async"><figcaption>Figure 13. Signal flow of synchronised capture.</figcaption></figure>

### 4-2. Edge computer and USB

The edge computer is a single Jetson Orin NX Super 16GB, and joint inference, triangulation and the final-value computation are all completed inside it (Figure 14). We started with the Jetson Orin Nano Super, one step smaller, but judged it better to build the prototype at a high specification and scale down as far as needed when turning it into a product, so we moved up to the Orin NX (Table 4). The joint inference model uses Google MediaPipe's Pose Landmarker (BlazePose[3]) as its backbone, and one of three sizes is chosen, from smallest up: lite, full and heavy. On the Orin NX, the most accurate size, heavy, runs as three processes together, one per camera. Processing one bundle of pictures from the three cameras takes 16.12ms, within half of the 33.3ms capture interval, and with heavy the error of the 3D joints triangulated on Panoptic was 13% smaller than with full. The remaining compute headroom goes to reducing the turnaround time, that is, the time from taking a picture until the result comes back to the tablet.

<figure class="fig" id="fig-14"><img src="/report/figures/fig14_jetson.jpg" alt="Edge computer" width="2239" height="520" loading="lazy" decoding="async"><figcaption>Figure 14. Edge computer.</figcaption></figure>

<div class="tbl" id="tab-4"><table><caption>Table 4. Orin Nano and Orin NX.</caption><thead><tr><th style="text-align:left">Item</th><th style="text-align:right">Orin Nano Super</th><th style="text-align:right">Orin NX Super 16GB</th></tr></thead><tbody><tr><td data-th="Item" style="text-align:left">CPU</td><td data-th="Orin Nano Super" style="text-align:right">6 cores, 1.7GHz</td><td data-th="Orin NX Super 16GB" style="text-align:right">8 cores, 2.0GHz</td></tr><tr><td data-th="Item" style="text-align:left">GPU max clock</td><td data-th="Orin Nano Super" style="text-align:right">1,020MHz</td><td data-th="Orin NX Super 16GB" style="text-align:right">1,173MHz</td></tr><tr><td data-th="Item" style="text-align:left">Memory</td><td data-th="Orin Nano Super" style="text-align:right">8GB</td><td data-th="Orin NX Super 16GB" style="text-align:right">16GB</td></tr><tr><td data-th="Item" style="text-align:left">AI performance</td><td data-th="Orin Nano Super" style="text-align:right">67 TOPS</td><td data-th="Orin NX Super 16GB" style="text-align:right">157 TOPS</td></tr><tr><td data-th="Item" style="text-align:left">Power</td><td data-th="Orin Nano Super" style="text-align:right">7–25W</td><td data-th="Orin NX Super 16GB" style="text-align:right">10–40W</td></tr><tr><td data-th="Item" style="text-align:left">Module price</td><td data-th="Orin Nano Super" style="text-align:right">USD 399</td><td data-th="Orin NX Super 16GB" style="text-align:right">USD 999</td></tr></tbody></table><p class="tnote">Specifications are the Super-mode values from NVIDIA's specification sheet; prices are the NVIDIA module list price (for purchases of 1,000 units or more, checked 2026-10-12). The values are the same as Table 1 of the progress report (<code>docs/etc/progress-report/tables.md</code>).</p></div>

The three cameras are gathered on one externally powered USB hub, which plugs into a single USB 3 port of the edge computer. The current from one port cannot power three cameras, so the hub takes its own power.

Because the three cameras share the bandwidth of one port, pictures are received as JPEG-compressed (MJPG). MJPG is a transfer format in which the camera compresses each picture as JPEG before sending it. USB sets aside and reserves bandwidth in advance for transfers that must not be interrupted, such as video; without compression one camera reserved 83% of that share, so when three cameras were opened, pictures arrived from only one. With compression, all three cameras send their 30 pictures per second through one port.

How much compression shifts the joint positions was measured on 120 Panoptic pictures. Compressing them at the same quality as the cameras moved the detected joints by a median of 1.75px. To see the error of the joint inference model itself, the pictures were shifted by 1px without compression, and even after subtracting the shift the joints were off by a median of 2px. The difference caused by compression is smaller than the model's own error.

### 4-3. Tablet and the closed network

The tablet connects to the edge computer with a single USB cable. The edge computer has no wireless communication, so the tablet's USB tethering creates the network between the two. Only one kiosk-mode browser runs on the tablet, and that browser opens the kiosk app on the edge computer.

Pictures of a member's body are sensitive personal data. The rig finishes all computation inside the edge computer, so it sends neither pictures nor 3D joints outside, and it works without the internet. USB tethering is by design a feature that shares the tablet's internet with the edge computer. So the tablet's Wi-Fi is turned off, and the edge computer is also configured not to reach outside through the tethering connection. When installed in a gym, there is no need to attach it to the gym's network either.

### 4-4. Calibration board

The calibration board is the hardware used for lens calibration and position calibration; it is not attached to the rig but is held in the hand or placed on the floor and photographed during calibration. We designed the pattern ourselves and left the printing and the metal-plate work to a fabrication shop (Figure 15). The pattern is ChArUco, a chessboard with a numbered square marker (ArUco) placed in each white square. Thanks to the markers, every grid corner carries a number, so calibration can proceed from the visible corners alone even when part of the board leaves the picture or is hidden by a post. The same corner captured by the three cameras is also matched directly by its number.

One square is 90mm on a side. To find the grid corners reliably, a square needs to be about 20px on a side in the picture, so the square size was decided first so that it still appears that large at the design distance of 2.2 m between camera and person. The board is A2 (420×594mm), which holds 90mm squares 4 across and 6 down. A1, which could hold more squares, was also considered, but since the board has to be held in the hand and tilted while being photographed, we chose A2, which weighs half as much. The artwork was drawn by a script using the same values the calibration program uses, the number of squares, the square size and the marker type, and output as a vector PDF.

The board is a 3mm-thick aluminium composite panel, and the pattern is UV-printed on it. The calibration computation assumes that all grid corners lie on one plane, so a material that does not bend was chosen, and no gloss coating was applied so that the lighting does not glare. If the square size is wrong, every length the rig measures is off by the same ratio. Measuring the six vertical squares of the delivered board with a tape measure gave 540mm, as designed, and the distance of 103.0cm between one pair of cameras computed with this board also matched the roughly 103cm measured with a tape.

<figure class="fig" id="fig-15"><img src="/report/figures/fig15_calib_board.jpg" alt="Calibration board" width="2080" height="1040" loading="lazy" decoding="async"><figcaption>Figure 15. Calibration board.</figcaption></figure>

### 4-5. Hurdles

The first hurdle was pictures going missing from the cameras gathered on the hub. The sync hit rate is the proportion of exposure-signal pulses for which the camera's picture arrived at the edge computer. A camera may have exposed and the picture may still be lost on the way, so this is counted separately from STROBE. We expected this rate to be 100% even with three cameras on the hub, but three 30-second measurements put it at 94.9–98.8% per camera. The edge computer's system log had not a single error line; only the camera video transfer statistics showed corrupted data.

The cause was USB 3 LPM (Link Power Management). USB 3 LPM is a power-saving feature of USB 3 that drops the link into a low-power state whenever it is idle. Camera video is transferred in a mode that does not resend lost data, and data that arrived while the hub's link was waking from the low-power state was simply discarded. After changing the boot configuration so that LPM is disabled for the hub and the cameras from boot, three more measurements showed that in all three the pictures from the three cameras arrived for every pulse without a gap (100%).

The second hurdle was the camera trigger. We searched for a camera module with a global shutter and a trigger input, contacted a Chinese supplier directly and bought three of the same model. Trigger support had been confirmed in advance, so we expected that connecting the exposure signal would be enough. At first, however, none of the three responded to the exposure signal. Feeding signals in by hand to narrow it down, we found one cause in the circuit and one in the firmware.

At first the exposure signal came from a pin on the Orin Nano board, but the board's level-shifter chip could not pull the pulse down to LOW, so the pulse never reached the cameras. This was fixed by putting a buffer chip between the pin and the cameras. The current trigger board does not have this problem.

The manufacturer, DECXIN, had no working quality control, and although we had bought the same module, one of the three had a different firmware version. That version had no external trigger mode at all. Trying every trigger setting in the camera SDK did not get it into external trigger mode, so there was no way other than replacing the firmware. With the firmware and the flashing tool obtained by contacting the manufacturer's factory directly, we flashed the same version as the other two ourselves (Figure 16). The first flash failed and the camera was stuck powering on without firmware, but changing the settings and flashing again brought it back. Now all three run the same firmware, and for 900 exposure signals each camera emits STROBE 900 times (900/900).

<figure class="fig" id="fig-16"><img src="/report/figures/fig16_camera.jpg" alt="Camera module and manufacturer documents" width="2800" height="980" loading="lazy" decoding="async"><figcaption>Figure 16. Camera module and manufacturer documents.</figcaption></figure>

## 5. Rig OS

### 5-1. Resource kernel

The rig OS has three layers, from the top: the shell, the kernel and the drivers (Figure 17). The kernel and the drivers live inside the rig server. The rig server is the program that runs on the edge computer and runs the four procedures; it starts automatically when the edge computer is switched on. The drivers open and close the cameras and the trigger board as the kernel instructs, and the kernel decides when to open a device for whom and how far a procedure has progressed. The shell is the kiosk app that the edge computer serves and that appears in the browser; it draws the screen from the state the kernel sends and passes the commands a person presses to the kernel, but it does not open devices itself. Seen as a layered structure, the kiosk app is the topmost analysis and screen layer, but seen from the path through which devices are used, it is the shell of the rig OS.

The three cameras and the trigger board are critical resources that cannot be used by several parties at once. So the kernel lends these resources to only one place at a time through a lease. A lease is the right to use a resource, and the party that holds the lease is called the owner. The owner is either the kiosk app that started a procedure or a command-line tool outside the shell, such as the installer that sets up a new edge computer. While there is an owner, requests from anyone else are refused, and when the owner finishes its work or stops responding because the connection dropped, the kernel takes the lease back.

There are two kinds of connection between the shell and the kernel. The control channel is a single connection (WebSocket) over which lease requests, commands and state travel. The video channels are HTTP connections, one per camera, carrying the camera's live video shown on the calibration screen, that is, the preview. A browser limits the number of HTTP connections it opens to the same address, but it counts WebSocket separately. So even with several previews open, a command from a button press is not blocked and reaches the kernel.

<figure class="fig" id="fig-17"><img src="/report/figures/fig17_rig_os.png" alt="Layers of the rig OS" width="1360" height="1340" loading="lazy" decoding="async"><figcaption>Figure 17. Layers of the rig OS.</figcaption></figure>

### 5-2. A one-minute set, step by step

In measurement, the kernel gives the lease to the kiosk app that opened the measurement, and the three cameras capture in time with the exposure signal. From here on, one picture produced by one exposure of one camera is called a frame, and a bundle is the three frames of the same instant that one pulse produced. Bundles enter the edge computer one every 33.3ms, and the bundles between the set start and set end buttons make up one set. A one-minute set is 1,800 bundles. When the measurement finishes, the kiosk app returns the lease.

The turnaround time of one bundle is 251ms (Figure 18). Measured from the pulse, the bundle arrives at the edge computer at 74ms, becomes the 2D joints of the three frames at 196ms, becomes triangulated live values at 237ms, and is drawn on the tablet at 251ms. All of these are medians from one set measured on a real person. From arrival to 2D joints, most of the time is spent waiting for the three frames to enter joint inference; the inference itself is a small share of it.

<figure class="fig" id="fig-18"><img src="/report/figures/fig18_scenario.png" alt="Turnaround time of one bundle" width="1340" height="460" loading="lazy" decoding="async"><figcaption>Figure 18. Turnaround time of one bundle.</figcaption></figure>

Final values are obtained by re-solving the frames of the most recent 20-second window together, so a frame is finalised only after it has passed through this window. As a result, in two sets measured on real people, the final values followed the live values by a per-set average of 18 and 19 seconds. When a set ends, the final values of the remaining window are computed to completion.

### 5-3. Hurdles

After an incident on 2026-09-22 in which the position calibration screen froze, we concluded that critical resources had to be managed in an OS-style scheme. The screen did not respond to button presses, yet the rig server was fine and not a single request had reached it. A browser opens at most 6 HTTP connections to the same address. When the screen changes, previews are opened anew, but the connections of the old previews removed from the screen were not closed and remained. Once 6 previews had taken all 6 connections that way, commands and status checks only queued up inside the browser.

The incident itself was stopped right away with a one-line fix that closes the connections of leftover previews. But even before the incident there had been 6 defects in which capture kept running after leaving a screen, or position calibration did not end after the tab was closed. These defects and the incident came from the same structure. The screen decided when cameras were opened and closed, commands shared the same connection limit as video, and the rig server did not know who was using the cameras. So we changed it so that the kernel opens the cameras only for the owner it gave the lease to, and commands travel over the control channel. After separating the control channel, sending a command on the real rig with 6 previews open got a response in 5ms.

## 6. 3D measurement pipeline

### 6-1. Camera calibration

The rig writes its 3D coordinates in the floor coordinate frame. The floor coordinate frame takes one corner of a calibration board laid flat on the floor as its origin, two edges of the board as the x and z axes, and up as the y axis; its unit is cm. Because the floor is at height 0, the y coordinate of a 3D joint is its height above the floor, and gravity points in the −y direction.

The projection model is the formula that says which pixel of each camera's photo a point in this frame lands on. The rig uses a pinhole camera model with lens distortion added, and a point becomes a pixel in three steps (Figure 19). The point is first expressed in the camera's own coordinates according to the camera's position and orientation, then bent by lens distortion, and finally turned into pixel coordinates by the focal length and the principal point (where the optical axis of the lens meets the photo). Finding the values used in the first step is position calibration; finding the values used in the other two steps is lens calibration. Lens calibration is done first, camera by camera; position calibration is then done for the three cameras together with those values held fixed.

<figure class="fig" id="fig-19"><img src="/report/figures/fig19_camera_model.png" alt="Projection model and calibration values" width="1340" height="410" loading="lazy" decoding="async"><figcaption>Figure 19. Projection model and calibration values.</figcaption></figure>

#### 6-1-1. Lens calibration

The lens calibration values decide which pixel of the photo a point in camera coordinates lands on. First, the camera coordinates $(X_c, Y_c, Z_c)$ are divided by the depth $Z_c$ to give the normalised coordinates $(\tilde x, \tilde y)$.

$$ \tilde x = X_c / Z_c, \qquad \tilde y = Y_c / Z_c $$

A wide-angle lens bends points more and more towards the edge of the photo; this bending is written with the radial coefficients $k_1, k_2, k_3$ and the tangential coefficients $p_1, p_2$ (the Brown–Conrady model[4]). $\rho$ is the radius measured from the origin of the normalised coordinates.

$$ x_d = \tilde x\,(1 + k_1 \rho^2 + k_2 \rho^4 + k_3 \rho^6) + 2p_1 \tilde x \tilde y + p_2\,(\rho^2 + 2\tilde x^2), \qquad \rho^2 = \tilde x^2 + \tilde y^2 $$

$y_d$ is the same formula with $\tilde x$ and $\tilde y$, and $p_1$ and $p_2$, swapped. Finally the focal length $f_x, f_y$ and the principal point $c_x, c_y$ give the pixel coordinates $(u, v)$.

$$ u = f_x\,x_d + c_x, \qquad v = f_y\,y_d + c_y $$

The lens calibration values for each camera are $f_x, f_y, c_x, c_y$ and the five distortion coefficients, nine values in all. Lens calibration is done in six steps for each camera (Figure 20). Fix the capture conditions and photograph the calibration board, find the grid corners in the photos and solve for the nine values, check them with photos not used in the calibration, and save them.

<figure class="fig" id="fig-20"><img src="/report/figures/fig20_lens_steps.jpg" alt="The six steps of lens calibration" width="3706" height="2316" loading="lazy" decoding="async"><figcaption>Figure 20. The six steps of lens calibration.</figcaption></figure>

In the first step, the capture conditions that change the lens and the field of view, such as focus and zoom, are fixed and their values are written down. Lens calibration values are valid only under the capture conditions at the time of calibration, so if the conditions change later the rig treats the values as invalid. In the first panel of Figure 20, the bent grid on the image plane (the surface where the photo forms) is the lens distortion whose size is not yet known.

In the second step, a person holds the calibration board in front of the camera and takes eight or more photos, changing the distance and the tilt. Distortion is largest at the edge of the photo, so the board is photographed evenly from the centre of the photo to its edge. In the second panel, the grey plate is where the board was placed, and the gold rectangle in the lower-right window is where that board appears in the photo.

In the third step, the grid corners are found in each photo. Each white square of the board carries a marker with a number, so it is known which grid corner of the board a found point is. Hence in every photo, each grid corner's 3D position on the board is paired with its pixel position in the photo. In the third panel, the point where the orange line from a grid corner of the board to the optical centre (the origin of the camera coordinates) passes through the image plane is the found pixel.

In the fourth step, the nine values are solved from these pairs. The reprojection error is the pixel distance between where the projection model puts a 3D point back on the photo and where the point was actually found in the photo. Starting from a first estimate with no distortion and the principal point at the exact centre of the photo, the nine values and the rotation and position of the board in each photo are adjusted together so that the sum of squared reprojection errors over all photos is smallest. The computation uses OpenCV's calibration function (Zhang's method[5]). The reprojection errors of the three cameras were 0.29–0.45px, below the pass criterion of 1.5px. In the fourth panel, the grey points are where the first estimate puts the points back on the photo, and the gap between the orange and grey points is the reprojection error being reduced here.

In the fifth step, the values are checked with photos not used in the calibration. The photos are divided into six groups by where the board was placed; one group is left out, the nine values are solved from the rest, and the reprojection error of the left-out group is measured. The average of the errors measured while leaving out each of the six groups in turn was 0.28px for one camera. Because the error is this small even on photos not used in the calibration, the lens calibration values can be used as they are on newly taken photos. In the fifth panel, the gold plates are the boards of the photos used in the computation, and the blue dashed plate is the board of the left-out photos. The green point is the position at the camera-to-person distance of 2.2m set in the design.

In the sixth step, the nine values are saved to a file for each camera, together with the capture conditions at the time of calibration. Position calibration and measurement read this file. In the sixth panel, K is the lens calibration values, and the principal point sits slightly off the exact centre of the photo.

#### 6-1-2. Position calibration

The position calibration values are a rotation $R_i$ and a translation $\mathbf t_i$ for each camera; they move a point $\mathbf X$ in the floor coordinate frame into the coordinates of camera $i$.

$$ (X_c,\ Y_c,\ Z_c)^\top = R_i\,\mathbf X + \mathbf t_i $$

Position calibration is done in four steps (Figure 21). One of the three cameras is the reference camera, and the other two are called C1 and C2. The first and second steps locate the floor and the power rack with the reference camera alone, and the third step solves where C1 and C2 are relative to the reference camera. The fourth step chains the earlier results to place all three cameras in the floor coordinate frame. The four panels of Figure 21 are all 3D drawings in the floor coordinate frame; green is the reference camera, red is C1, blue is C2, and the frustum is the camera's field of view.

<figure class="fig" id="fig-21"><img src="/report/figures/fig21_ext_steps.jpg" alt="The four steps of position calibration" width="2487" height="2236" loading="lazy" decoding="async"><figcaption>Figure 21. The four steps of position calibration.</figcaption></figure>

In the first step, the floor anchor, the calibration board is laid flat on the floor where the person will stand and photographed with the reference camera. The board is a plane whose real distances between grid corners are known, so a single camera with known lens calibration values is enough to give the rotation and position between the board and the camera. This board defines the floor coordinate frame, and the rotation $R_g$ and translation $\mathbf t_g$ that move floor coordinates into the reference camera's coordinates come out here. In the first panel of Figure 21, the gold arrow runs from the floor origin to the reference camera, and the dashed line is the height of the reference camera.

In the second step, the rack anchor, the same board is fitted in turn into the anchor corner and the check corner inside the power rack and photographed with the reference camera, to measure where the power rack stands in the floor coordinate frame and which way it faces. Two edges of the board are pressed against the faces of the power rack's floor-level members, so the board's edges are the axis directions of the power rack. The rack origin is the centre of the rectangle formed by the inner faces of the four uprights, half the inner width and half the inner depth of the power rack in from the board at the anchor corner. The board at the check corner is not used in the computation; the position predicted from the inner dimensions is compared with the position actually photographed. The difference was 0.15cm, within the criterion of 2.0cm. In the second panel of Figure 21, the grey arrow runs from the floor origin to the rack origin.

The third step is the relative-pose solve. $R_{0i}$ and $\mathbf t_{0i}$ are the rotation and translation that move the coordinates of the reference camera (subscript 0) into the coordinates of C$i$ ($i = 1, 2$). When a person carrying the board moves around inside the power rack and stops, the three cameras photograph the board at the same instant. One scene photographed at one such stop is called a sample. When the reference camera and C$i$ both see one sample, chaining the rotation and position of the board as each camera saw it gives one estimate of $R_{0i}, \mathbf t_{0i}$. In the third panel of Figure 21, the sample vectors are the positions of C1 and C2 estimated from a single sample.

A single board photo already gives a value, but samples are collected until they fill the inside of the power rack evenly, so that the result holds across the whole space the person will actually move in. Once collected, $R_{01}, \mathbf t_{01}$ and $R_{02}, \mathbf t_{02}$ are solved from the samples gathered for each pair, with the lens calibration values held fixed.

Whether the two results agree can be checked with the remaining pair, without any ground truth. Chaining the two results gives the values that move the coordinates of C1 into the coordinates of C2, and these are compared with the values solved by pairing C1 and C2 directly.

$$ R_{12} = R_{02}\,R_{01}^\top, \qquad \mathbf t_{12} = \mathbf t_{02} - R_{12}\,\mathbf t_{01} $$

The difference from the directly solved values was 0.18° in rotation and 0.35cm in translation, within the pass criteria of 0.5° and 2.0cm.

The fourth step chains the earlier results to place all three cameras in the floor coordinate frame. $R_g, \mathbf t_g$ from the first step move floor coordinates into the reference camera's coordinates, and $R_{0i}, \mathbf t_{0i}$ from the third step move the reference camera's coordinates into the coordinates of C$i$.

$$ R_i = R_{0i}\,R_g, \qquad \mathbf t_i = R_{0i}\,\mathbf t_g + \mathbf t_{0i} $$

For the reference camera, $R_{00} = I$, $\mathbf t_{00} = \mathbf 0$. This fixes all the values used in the three steps of the projection model, and the three steps together are written $\pi_i(\mathbf X)$. In the fourth panel of Figure 21, the red and blue arrows from the reference camera to C1 and C2 are $R_{0i}, \mathbf t_{0i}$, and the gold arrows from the floor origin to the three cameras are the camera positions seen in the floor coordinate frame.

### 6-2. 2D joints and triangulation

Measurement goes through four steps for every bundle (Figure 22). First, the 2D joints are found in each camera's photo. Next, for each camera a ray is drawn from the optical centre through the 2D joint on the photo out into space, and the point where the three rays of the same joint come closest to meeting is taken as that joint's 3D position. Repeating this triangulation for every joint gives the 3D joints of the whole body. Finally, metrics such as knee angle, centre of mass and lean, and the load path, are computed from the 3D joints (Section 7-1). This section covers the first three steps.

<figure class="fig" id="fig-22"><img src="/report/figures/fig22_measure_steps.jpg" alt="The four steps of measurement" width="2325" height="2236" loading="lazy" decoding="async"><figcaption>Figure 22. The four steps of measurement.</figcaption></figure>

The 2D joints are found with the heavy variant of the joint inference model BlazePose[3], and on the edge computer this model is converted to TensorRT and run. From one frame the model outputs the photo coordinates $\mathbf u$ for each of 33 joints, and for each joint it also outputs the visibility $\nu$ and the probability $q$ that the joint is inside the photo, both from 0 to 1. Only 2D joints with both values at 0.5 or above and lying inside the photo go into triangulation and the final-value computation. The observation confidence $\kappa$ is the product $\nu q$ of the two values, and it multiplies the weights in both computations.

Triangulation is solved joint by joint with weighted DLT (direct linear transform)[6]. Undoing the lens distortion and $f_x, f_y, c_x, c_y$ on the 2D joint of camera $i$ gives the normalised coordinates of Section 6-1, written $(\tilde x_i, \tilde y_i)$. The three rows of the projection matrix $P_i = [R_i \mid \mathbf t_i]$ are $\mathbf P_i^{(1)}, \mathbf P_i^{(2)}, \mathbf P_i^{(3)}$. The joint's homogeneous coordinates $\bar{\mathbf X} \propto (\mathbf X, 1)$ must satisfy the two equations below for every camera.

$$ \big(\tilde x_i\,\mathbf P_i^{(3)} - \mathbf P_i^{(1)}\big)\,\bar{\mathbf X} = 0, \qquad \big(\tilde y_i\,\mathbf P_i^{(3)} - \mathbf P_i^{(2)}\big)\,\bar{\mathbf X} = 0 $$

Each camera is given an observation weight $w_i$, each of the six equations is multiplied by $\sqrt{w_i}$, and they are stacked into one matrix. The solution is the $\bar{\mathbf X}$ of unit length with the smallest sum of squared algebraic residuals, which is the right singular vector for the smallest singular value in the SVD of that matrix. Dividing the solution by its fourth component gives the triangulated joint $\mathbf X^{\mathrm{tri}}$.

$$ \bar{\mathbf X}^{\mathrm{tri}} = \arg\min_{\lVert \bar{\mathbf X} \rVert = 1} \sum_{i} w_i \Big[ \big( (\tilde x_i \mathbf P_i^{(3)} - \mathbf P_i^{(1)})\,\bar{\mathbf X} \big)^2 + \big( (\tilde y_i \mathbf P_i^{(3)} - \mathbf P_i^{(2)})\,\bar{\mathbf X} \big)^2 \Big] $$

The observation weights are set iteratively, re-weighting by the reprojection error (IRLS, iteratively reweighted least squares). The model sometimes puts an occluded joint in a wrong place, so observations that are far off must be trusted less.

$$ w_i = \begin{cases} \kappa_i \min(1,\ \delta / e_i) & e_i \le 24\,\text{px} \\ 0 & e_i > 24\,\text{px} \end{cases}, \qquad e_i = \big\lVert \pi_i(\mathbf X^{\mathrm{tri}}) - \mathbf u_i \big\rVert, \qquad \delta = 4\,\text{px} $$

An observation whose reprojection error $e_i$ exceeds 4px has its weight reduced in inverse proportion to the error, and one above 24px is dropped. First, the three pairs of two cameras are each solved with the observation confidence alone as the weight. For each pair, its solution is projected back onto the three cameras and the cameras with reprojection error within 24px are counted; the solution of the pair with the highest count is the starting point. If the counts are equal, the pair with the smaller sum of reprojection errors over the three cameras is chosen. From that solution, the weights above are assigned and the problem is solved again, twice.

The 3D position of the joint is output only if at least two cameras fall within 24px at the final solution. With three cameras, even if one is blocked the remaining two still give the position.

### 6-3. Live values and final values

The triangulated 3D joints split into two paths (Figure 23). The live path looks only at past bundles, filters immediately, and draws on the tablet. The final path looks at the bundles before and after together, solves again, and writes to the session report. The paths were separated because drawing during a set cannot wait for bundles that have not yet arrived, while measuring accurately needs the bundles on both sides.

<figure class="fig" id="fig-23"><img src="/report/figures/fig23_two_paths.png" alt="The two paths of live values and final values" width="1340" height="621" loading="lazy" decoding="async"><figcaption>Figure 23. The two paths of live values and final values.</figcaption></figure>

The live path has two stages: the One-Euro filter[7] and bone-length fitting. The One-Euro filter is a low-pass filter that raises its cutoff frequency $f_c$ the faster the motion is, and it is applied separately to each axis of a joint's coordinates. $\xi_n$ is the value of one coordinate axis at bundle $n$, $\dot\xi_n$ is its rate of change, $\Delta t$ is the capture interval of 33.3ms, and values marked with an asterisk (\*) are filtered values.

$$ \alpha(f) = \frac{1}{1 + 1/(2\pi f\,\Delta t)}, \qquad \dot\xi^{*}_n = \alpha(f_d)\,\dot\xi_n + \big(1 - \alpha(f_d)\big)\,\dot\xi^{*}_{n-1} $$

$$ f_c = f_{\min} + \beta\,\lvert \dot\xi^{*}_n \rvert, \qquad \xi^{*}_n = \alpha(f_c)\,\xi_n + \big(1 - \alpha(f_c)\big)\,\xi^{*}_{n-1} $$

The rate of change is filtered first with cutoff frequency $f_d$. $f_{\min}$ is the cutoff frequency when at rest, and $\beta$ is the slope by which the cutoff frequency rises with speed. The rig uses $f_{\min} = 0.7\,\text{Hz}$, $\beta = 0.02\,\text{cm}^{-1}$, $f_d = 1.0\,\text{Hz}$. When the person stands still, the cutoff frequency drops to 0.7Hz and jitter is reduced; when the bar is pushed up fast, the cutoff frequency rises and the screen does not fall behind the motion.

Bone-length fitting moves the 3D positions $\mathbf X_a, \mathbf X_b$ of the two end joints $a, b$ of a bone so that the current length $\ell$ matches the target length $\bar\ell$. $\bar\ell$ is the median of that bone's length over the most recent 900 bundles (30 s). The less visible a joint is, the more it is moved. $\bar\nu_a$ is the average visibility over the cameras that triangulated joint $a$.

$$ \mathbf X_a \leftarrow \mathbf X_a + m_a\,\frac{\ell - \bar\ell}{\ell}\,(\mathbf X_b - \mathbf X_a), \qquad m_a = \frac{1/\bar\nu_a}{1/\bar\nu_a + 1/\bar\nu_b} $$

$\mathbf X_b$ is moved by the same formula with $a$ and $b$ swapped. Because one joint belongs to several bones, fitting all the bones in turn is repeated four times.

Final values are made by refinement. Refinement takes all the 3D joints $\mathbf X_{nj}$ in a 20 s window (600 bundles) as variables and finds the trajectory that minimises the energy $E$ below. $n$ is the bundle, $j$ is the joint, and $\mathbf u_{i,nj}$ and $\kappa_{i,nj}$ are the 2D joint and observation confidence of camera $i$.

$$ \begin{aligned} E = {} & \sum_{i,n,j} \kappa_{i,nj}\,h_\delta\big( \lVert \pi_i(\mathbf X_{nj}) - \mathbf u_{i,nj} \rVert \big) \\ & + \lambda_t \sum_{n,j} \gamma_{nj}\,\lVert \mathbf X_{n-1,j} - 2\mathbf X_{nj} + \mathbf X_{n+1,j} \rVert^2 \\ & + \lambda_b \sum_{n} \sum_{(a,b)} \big( \lVert \mathbf X_{na} - \mathbf X_{nb} \rVert - L_{ab} \big)^2 \end{aligned} $$

The first term is the reprojection term, which makes the 3D joint, projected back onto the photo, agree with the 2D joint. $h_\delta$ is the Huber loss: it counts the reprojection error quadratically within $\delta$ = 4px and linearly beyond, so it is not dragged by observations that are far off. The second term is the acceleration term, which reduces the acceleration between bundles to suppress jitter. The third term is the bone-length term, which holds the lengths of the 35 bones constant within the window; the target $L_{ab}$ is the median length over the bundles in the window where both ends were triangulated.

The velocity weight $\gamma_{nj}$ of the acceleration term weakens this term at fast-moving joints, so that real motion such as pushing the bar up is not smoothed away. $v_{nj}$ is the speed measured as the difference between the bundles before and after on the initial trajectory described below, and $v_0$ is 3 cm per bundle. The coefficients $\lambda_t = 80$, $\lambda_b = 5$ balance the three terms, which have different units (the reprojection term is in pixels, the others in cm squared), and were chosen on Panoptic.

$$ \gamma_{nj} = \frac{1}{1 + (v_{nj} / v_0)^2} $$

$E$ is minimised with L-BFGS[8] for each window. One L-BFGS round is a computation that updates the solution up to 20 iterations, and two rounds are run when making final values. If the energy has barely decreased at the end of a round (relative change of 0.02% or less), it stops there. The window length is 600 bundles, and the next window starts 550 bundles later, so it overlaps the previous window by 50. The overlapping 50 are joined by blending the two solutions linearly, and once a window is solved, its first 550 bundles, which do not overlap the next window, become final values. Refinement runs as a low-priority process on the CPU of the edge computer, so it does not slow down the joint inference and the live path, which use the GPU.

The initial values for L-BFGS come from the learned model. The learned model is a Transformer[9] and handles the 17 joints that BlazePose and Fit3D have in common (nose, shoulders, elbows, wrists, hip joints, knees, ankles, heels, toes). For the past 57 bundles and the current bundle, it receives, for each joint, the triangulated position measured from the midpoint of the two hip joints, whether triangulation succeeded in that bundle, and the reprojection error. Its output is a correction to add to the position in the current bundle, and adding the midpoint of the hip joints back returns it to floor coordinates. The learned model was built to look only at past bundles and was also tried for live values, but on Fit3D test videos the jitter grew to 1.4–1.8 times that of the current live values, so it is used only for initial values.

For the 16 joints the learned model does not handle, and for any of the 17 that were not triangulated in that bundle, the initial values are filled in with values filtered by the Savitzky–Golay filter[10], joined across the bundles before and after. The Savitzky–Golay filter fits a quadratic to 11 bundles, 5 on each side of every bundle.

Both training and evaluation use combinations of 3 of the 4 Fit3D cameras, and the subjects are split so that accuracy is measured on 2 subjects not used in training. The unit of evaluation, a sample, is one subject's video run with one camera combination. One video is about 100 s long, with the four exercises squat, deadlift, lunge and thruster joined end to end; the videos of the 2 subjects run with 4 combinations make 8 samples. The metric is MPJPE, the mean distance between the ground-truth 3D joints and the estimated 3D joints. It is measured on the raw 3D coordinates without aligning rotation or position to the ground truth, on the same 17 joints as the learned model.

### 6-4. Hurdles

The first hurdle was that the live values waited for later bundles. At first the live values also went through the Savitzky–Golay filter before the One-Euro filter and bone-length fitting. The Savitzky–Golay filter is centred on the middle bundle and cannot output a value until the 5 following bundles arrive, so in real sets with a person the wait after triangulation alone had a median of 192ms. So the live path was split off right after triangulation, the Savitzky–Golay filter was removed, and only the two stages that look at past bundles were kept. This wait is gone from the live path, and the current turnaround time has a median of 251ms.

The second hurdle was the final-value delay. Before the learned model was added, L-BFGS was run for 10 rounds starting from values filtered with the Savitzky–Golay filter. In the 2 sets with a person measured then, the final values were on average 22 s and 28 s behind the live values. Reducing L-BFGS to 2 rounds cut the computation but made accuracy slightly worse. On the 8 Fit3D samples, the MPJPE was 4.45cm for the unrefined values (values that went through only the Savitzky–Golay filter), 4.17cm for 10 L-BFGS rounds, and 4.23cm for 2 rounds (Figure 24). Running only 2 rounds from the learned model's initial values gave an MPJPE of 3.63cm, the smallest of the four methods in Figure 24.

<figure class="fig" id="fig-24"><img src="/report/figures/fig24_tail_accuracy.png" alt="MPJPE by refinement method" width="835" height="541" loading="lazy" decoding="async"><figcaption>Figure 24. MPJPE by refinement method.</figcaption></figure>

The learned model alone cannot replace refinement. Using only the learned model's output, the MPJPE is 3.60cm, slightly below 3.63cm, but on the same 8 samples the bone lengths fluctuate from bundle to bundle with a standard deviation of 2.46cm. That is the same level as the 2.45cm of the unrefined values. Adding 2 L-BFGS rounds brings this standard deviation down to 0.34cm, smaller even than the 0.58cm of 10 L-BFGS rounds.

In 2 sets with a person measured anew after the learned model was added, the final-value delay averaged 18 s and 19 s. The total L-BFGS computation time for one set fell from about 17 s in the sets before the addition to 4–5 s.

## 7. Analysis and screens

### 7-1. Key metric and the load-path calculation

The rig's key metric (KPI) is the load path of every rep. Today's PT coaching and single-camera apps judge by outward form such as knee angle and bar path. These values cannot measure the real target, the joint load, that is the moment the weight puts on a joint; they are proxy metrics watched instead, on the belief that they correlate with it. But even in the same posture, the distance from a joint to the centre of mass changes with thigh-bone length and trunk proportions, so the load goes to a different joint. Since there is no correct posture that fits everyone, the rig measures which joint the weight went to before it looks at the outward form of the posture.

The trainer judges two things from the load path. One is whether the intent of the coaching matches what actually happened. If the load leaned towards the knees in a set meant to work the glutes, the coaching did not reach the body. The other is the rep within a set where the path breaks down. When fatigue builds, the hip rises first and the upper body bends forward, and the load moves from the knees to the lumbar joint. The reps before the path breaks down are the right count and weight for that day.

The load path is calculated from the final values after the set ends. The centre of mass and the joint loads are calculated for every bundle, then gathered per rep and written into the report. A rep is one descent and ascent within a set. One interval in which the hip, that is the midpoint of the two hip joints, drops more than 15cm below the standing-posture height counts as one rep. The standing-posture height is the median of the 20% of bundles in which the hip was highest in the set.

The calculation takes, along with the 3D joints, the member's body weight $m_{\text{body}}$ and sex, the bar weight $m_{\text{bar}}$ entered for each set, and where the bar rests (high bar, low bar). The bar weight is entered at the start of a set by choosing the empty bar (20kg, 15kg) and the plates; a bodyweight set is measured without a bar.

The body's orientation is written with two axes. The lateral axis $\hat{\mathbf e}_l$ is the direction from the left to the right hip joint, laid flat parallel to the floor. The forward axis $\hat{\mathbf e}_f$ is, of the two directions parallel to the floor and perpendicular to the lateral axis, the one pointing from the heels to the toes.

First the centre of mass is found. The body is divided into the segments head, trunk, upper arm, forearm, hand, thigh, shank and foot, and the joints at the two ends of segment $s$ are called $\mathbf X_{s,0}$ and $\mathbf X_{s,1}$. The segment's centre of mass $\mathbf c_s$ is placed at the fraction $r_s$ between the two ends, and $\mu_s$, the fraction of body weight that the segment's mass takes, and $r_s$ are taken from de Leva's body-segment table[11] according to sex. The bar position $\mathbf b$ is taken from the midpoint of the two shoulder joints, moved 5cm up for a high bar, and 3cm against the forward axis and 4cm down for a low bar.

$$ \mathbf c_s = \mathbf X_{s,0} + r_s\,(\mathbf X_{s,1} - \mathbf X_{s,0}), \qquad \mathbf c_{\text{body}} = \sum_s \mu_s\,\mathbf c_s, \qquad \mathbf c_{\text{total}} = \frac{m_{\text{body}}\,\mathbf c_{\text{body}} + m_{\text{bar}}\,\mathbf b}{m_{\text{body}} + m_{\text{bar}}} $$

$\mathbf c_{\text{body}}$ is the body's centre of mass and $\mathbf c_{\text{total}}$ is the combined centre of mass with the bar.

The cause is where the body's centre of mass sits over the feet, and it is measured as lean. Let $\mathbf o$ be the mean of both heels and both toes, dropped to floor height; then the fore–aft lean $d_f$ and the lateral lean $d_l$ are as below. $L_f$ is the length from heel to toe and $W$ is the distance between the two ankles.

$$ d_f = \frac{(\mathbf c_{\text{body}} - \mathbf o)\cdot \hat{\mathbf e}_f}{L_f}, \qquad d_l = \frac{(\mathbf c_{\text{body}} - \mathbf o)\cdot \hat{\mathbf e}_l}{W} $$

When $d_f$ is 0 the centre of mass is over the middle of the feet, and when it is positive it is towards the toes; when $d_l$ is positive the body is shifted to the right.

The effect is the joint load and the load share. The joint load is the moment that the weight of the segments above a joint and of the bar puts on that joint, and it is found in two steps. First the quasi-static value $\tau_j$, without acceleration, is found. The weight of each segment and of the bar is multiplied by the fore–aft distance from the joint to its centre of mass, and all are summed (Figure 25). There are four joints, the ankle, knee, hip and lumbar; the joint point is the midpoint of the left and right joints, and a single value is produced that sums the share of both legs. The lumbar is taken at the point 20% of the way up from the hip to the shoulders.

$$ \tau_j = g \Big[ \sum_{s \in A(j)} \mu_s\, m_{\text{body}}\,(\mathbf c_s - \mathbf X_j)\cdot \hat{\mathbf e}_f + m_{\text{bar}}\,(\mathbf b - \mathbf X_j)\cdot \hat{\mathbf e}_f \Big] $$

$A(j)$ denotes the segments above joint $j$. The lumbar uses the same segments as the hip, but the share below the lumbar (11–12% of body weight) is subtracted from the trunk mass. Distances are entered in m, so the unit is Nm.

<figure class="fig" id="fig-25"><img src="/report/figures/fig25_load_path.png" alt="Joint loads at the lowest position of a squat" width="578" height="582" loading="lazy" decoding="async"><figcaption>Figure 25. Joint loads at the lowest position of a squat.</figcaption></figure>

Next, the result is multiplied by the load multiplier. The load multiplier $D$ is the factor by which the joint load grows because of acceleration. For every bundle, the height of the combined centre of mass with the bar is fitted with a quadratic over a window of 200ms on each side, 400ms in all, to obtain that bundle's vertical acceleration $a_y$. At the lowest position, where the descent stops and the ascent begins, $a_y$ is positive so the multiplier is greater than 1; at the top, where the ascent stops, it is less than 1.

$$ D = \frac{g + a_y}{g}, \qquad \tau_j^{\text{dyn}} = D\,\tau_j $$

The joint load shown in the report and on screen is $\tau_j^{\text{dyn}}$. The load share $\phi_j$ is the share each joint takes of the joint loads of the three leg joints, the ankle, knee and hip.

$$ \phi_j = \frac{\lvert \tau_j \rvert}{\lvert \tau_{\text{ankle}} \rvert + \lvert \tau_{\text{knee}} \rvert + \lvert \tau_{\text{hip}} \rvert} $$

The interpretation shows, with muscle-group colouring, which muscle group took the joint load. In a squat the joint load is taken to be held by the muscle group that extends that joint, and the size of the joint load is painted as the depth of red at that muscle group's place. For the knee it is the front of the thigh (quadriceps), for the hip the buttocks and the back of the thigh (glutes and hamstrings), for the ankle the calves, and for the lumbar the back of the lumbar region (erector spinae). The depth is the size of the joint load divided by the largest value across all four joints within the set, and the colour is painted on the body surface laid over the 3D joints, that is the mesh.

Risk flags are the four injury-risk marks attached to a rep. Among them, the lumbar spike comes straight from the load path. For every rep the maximum of the lumbar joint load $\tau_j^{\text{dyn}}$ is found, and the flag is attached when one rep's value is more than 1.3 times the median of the reps in the set. The other three are posture flags that support the load path, and the following are counted for every bundle.

- Knee valgus: the knee moves inward of the line joining the hip joint and the ankle by more than 10% of that line's length
- Left–right asymmetry: the left and right knee angles (the angle formed in 3D by the hip joint, knee and ankle) differ by more than 15%
- Lateral lean: the magnitude of the lateral lean $d_l$ exceeds 0.15

A flag that appears in more than 20% of a rep's bundles is attached to that rep.

### 7-2. Session view and the report

The session report has one report card per set. The edge computer builds it once the set ends and all the final values have arrived. The trainer opens a member's session from the past-sessions view on the measurement screen. From the top, this screen holds the 3D replay, the set time series and the report cards (Figure 26).

The mesh is MHR (Momentum Human Rig)[12], the human body model released by Meta, fitted to the final values and to each camera's 2D joints, and the body shape is set from the member's body composition. The mesh is for display, so it is not used in the joint-load calculation. In the 3D replay the mesh is laid over the 3D joints of the final values and painted with the muscle-group colouring, and the line below shows the joint loads and the load multiplier at that moment. The set time series is 8 charts: hip and knee height, knee angle, trunk and shank inclination, centre-of-mass height, vertical velocity, joint load, load share and load multiplier. Tapping a chart moves the replay to that time.

The report card holds the material the trainer uses to judge the set and the per-rep table. The judging material is the support pattern, the risk flags, the maximum joint load per joint and the load share. The support pattern is knee-dominant when, in the set's mean load share, the knee's share is more than 0.1 above the hip's, hip-dominant when it is more than 0.1 below, and balanced in between. The per-rep table lists, for every rep, the lowest hip height, the descent, hold and ascent times, the maximum knee joint load and the risk flags. The descent is measured from when the hip has dropped 4cm from the standing posture, the ascent until it has returned to within 4cm of the standing posture, and the hold is the time the hip stays within 5cm of its lowest height.

The lowest position is the position with the largest load, so a rep in which this position could not be measured directly is excluded from the set's totals. If, within 0.5 s on either side of the lowest position, any bundle contains a filled-in value because one of the 8 required joints (left and right hip joints, knees, ankles and shoulders) could not be triangulated, the position is regarded as not measured directly, and that rep is kept only in the per-rep table.

The set in Figure 26 is a squat of 4 reps with a 100kg bar; the first rep was dropped because its lowest position could not be measured directly, and the totals were taken over 3 reps. The knee joint load, combining both legs, peaked at 343Nm, the largest of the four joints, and the load multiplier per bundle ranged from 0.80 to 1.17.

<figure class="fig" id="fig-26"><img src="/report/figures/fig26_session_review.jpg" alt="The past-sessions view screen" width="1669" height="1139" loading="lazy" decoding="async"><figcaption>Figure 26. The past-sessions view screen.</figcaption></figure>

### 7-3. Member data and InBody

Because the joint load differs with the member's body weight and sex even in the same posture, the rig keeps a member record and a body record for every member. The member record holds the name, sex and height, and the body record is the member's body weight and body composition. The body record is entered either by uploading, on the tablet, the CSV file that InBody (a body-composition analyser) exports with its measurement results, or by typing it in, and the most recent body record is used for measurement. The joint-load calculation takes the body weight and sex; the fat mass and segmental muscle mass are used only to set the mesh's body shape. The member page of the kiosk app shows the history of body records for every member and calculates the fat-free mass index (FFMI) and the fat mass index (FMI) from the body composition.

## 8. Validation and performance

### 8-1. Datasets

The rig's calculations were built and validated on two public datasets (Figure 27). Panoptic is a dataset captured in CMU's capture dome, Panoptic Studio, and was used for development. It comes with video from hundreds of cameras, the camera positions and 3D joint ground truth, so triangulation and refinement were tested while varying the number and layout of cameras. Fit3D was used to train the learned model and to evaluate accuracy, and only subjects not used in training are used for evaluation.

Fit3D's camera layout differs from the rig's, but the same calculation as the rig's is run on four exercises (squat, deadlift, lunge, thruster) to measure accuracy. Evaluation uses the 8 samples of Section 6-3. The Panoptic and Fit3D numbers are not compared with each other, because the people, the movements, the camera layout and the way the ground truth was measured all differ.

<figure class="fig" id="fig-27"><img src="/report/figures/fig27_datasets.jpg" alt="Capture environments of Panoptic and Fit3D" width="2574" height="991" loading="lazy" decoding="async"><figcaption>Figure 27. Capture environments of Panoptic and Fit3D.</figcaption></figure>

In Panoptic, only the dome cameras at positions that could be mounted on a power rack were chosen, to imitate the rig's layout (Figure 28). Among the 2-camera combinations, the pair with the smallest error had one camera at an oblique position between the person's front and side, which on a power rack is hidden by an upright. Even when the candidates were narrowed to low positions at the front and sides, the smallest error stayed almost the same. So 1 camera at the front and 2 at the sides were chosen as the 3-camera test layout.

<figure class="fig" id="fig-28"><img src="/report/figures/fig28_panoptic_cameras.jpg" alt="Development environment reconstructed from Panoptic" width="1283" height="775" loading="lazy" decoding="async"><figcaption>Figure 28. Development environment reconstructed from Panoptic.</figcaption></figure>

### 8-2. Accuracy

The MPJPE of the final values on the 8 Fit3D samples is 3.63cm, 18% smaller than the unrefined values at 4.45cm. The calculation is exactly as in Chapter 6: 3 cameras, joint inference with the heavy model, initial values from the learned model and 2 rounds of L-BFGS.

How large 3.63cm is can be judged against the numbers of multi-view research (Table 5). VoxelPose[13] is a multi-view method that gathers the 2D joints inferred for each camera into a 3D grid and finds the 3D joints there, and its paper measured MPJPE on Panoptic while changing the number of cameras. MPJPE differs from dataset to dataset, so numbers are compared only within the same dataset. On Panoptic, the rig's calculation before the learned model, run with 3 cameras, gives 2.77cm, 0.34cm from VoxelPose with 3 cameras (2.43cm), and 1 camera (6.70cm) is more than twice 3 cameras.

<div class="tbl" id="tab-5"><table><caption>Table 5. Number of cameras and MPJPE.</caption><thead><tr><th style="text-align:left">Method</th><th style="text-align:right">Cameras</th><th style="text-align:left">Dataset</th><th style="text-align:right">MPJPE</th></tr></thead><tbody><tr><td data-th="Method" style="text-align:left">VoxelPose[13]</td><td data-th="Cameras" style="text-align:right">5</td><td data-th="Dataset" style="text-align:left">Panoptic</td><td data-th="MPJPE" style="text-align:right">1.77cm</td></tr><tr><td data-th="Method" style="text-align:left">VoxelPose[13]</td><td data-th="Cameras" style="text-align:right">3</td><td data-th="Dataset" style="text-align:left">Panoptic</td><td data-th="MPJPE" style="text-align:right">2.43cm</td></tr><tr><td data-th="Method" style="text-align:left"><strong>Rig, before the learned model</strong></td><td data-th="Cameras" style="text-align:right"><strong>3</strong></td><td data-th="Dataset" style="text-align:left"><strong>Panoptic</strong></td><td data-th="MPJPE" style="text-align:right"><strong>2.77cm</strong></td></tr><tr><td data-th="Method" style="text-align:left"><strong>Rig, final values</strong></td><td data-th="Cameras" style="text-align:right"><strong>3</strong></td><td data-th="Dataset" style="text-align:left"><strong>Fit3D</strong></td><td data-th="MPJPE" style="text-align:right"><strong>3.63cm</strong></td></tr><tr><td data-th="Method" style="text-align:left">VoxelPose[13]</td><td data-th="Cameras" style="text-align:right">1</td><td data-th="Dataset" style="text-align:left">Panoptic</td><td data-th="MPJPE" style="text-align:right">6.70cm</td></tr></tbody></table></div>

The comparison with the single-camera approach used InstantHMR[14]. InstantHMR is an open model distilled from a large model (SAM 3D Body) that estimates the 3D human body from a single camera, and it produces 3D joints and a body surface from one image. At the same moments of the same subjects as the 8 samples, the InstantHMR side was run on the video of each of Fit3D's 4 cameras separately, and the errors of the four results were averaged. A single camera cannot determine a person's absolute position and size, so both approaches are measured with PA-MPJPE. PA-MPJPE is MPJPE measured after aligning rotation, scale and position to the ground truth at every moment, so it is a different metric from the MPJPE of 3.63cm above.

This comparison used the calculation from before the learned model was added. The PA-MPJPE was 7.19cm for InstantHMR, 3.98cm for triangulation alone with 3 cameras (1.8 times smaller), and 3.65cm after refining that with 10 rounds of L-BFGS (2.0 times smaller) (Figure 29). The knee-angle error was 10.07° for InstantHMR and 4.76° for the refined values, 2.1 times smaller. In MPJPE, the current final values are smaller even than 10 rounds of L-BFGS (Figure 24).

<figure class="fig" id="fig-29"><img src="/report/figures/fig29_instanthmr.png" alt="Accuracy of multi-view triangulation and InstantHMR" width="1200" height="540" loading="lazy" decoding="async"><figcaption>Figure 29. Accuracy of multi-view triangulation and InstantHMR.</figcaption></figure>

### 8-3. Real-time processing and sync

The real-time processing and sync numbers are in Table 6, and all were measured on the rig's cameras and edge computer. The turnaround time was measured on one real human set, and the final-value delay on 2 human sets after the learned model was added. The exposure time spread was measured by recording the STROBE of the 3 cameras with a logic analyser. The sync hit rate was measured three times for 30 s each after USB 3 LPM was turned off, and during those three runs the images from all 3 cameras arrived without a miss for every pulse of the exposure signal.

<div class="tbl" id="tab-6"><table><caption>Table 6. Real-time processing and sync.</caption><thead><tr><th style="text-align:left">Item</th><th style="text-align:right">Value</th><th style="text-align:left">Condition and comparison</th></tr></thead><tbody><tr><td data-th="Item" style="text-align:left">Turnaround time, median</td><td data-th="Value" style="text-align:right">251ms</td><td data-th="Condition and comparison" style="text-align:left">Human set, from pulse to tablet display</td></tr><tr><td data-th="Item" style="text-align:left">Final-value delay, set mean</td><td data-th="Value" style="text-align:right">18–19 s</td><td data-th="Condition and comparison" style="text-align:left">22–28 s before the learned model</td></tr><tr><td data-th="Item" style="text-align:left">Exposure time spread, median</td><td data-th="Value" style="text-align:right">0.12ms</td><td data-th="Condition and comparison" style="text-align:left">Up to 16.7ms when paired without a trigger</td></tr><tr><td data-th="Item" style="text-align:left">Sync hit rate</td><td data-th="Value" style="text-align:right">100%</td><td data-th="Condition and comparison" style="text-align:left">94.9–98.8% with USB 3 LPM on</td></tr><tr><td data-th="Item" style="text-align:left">STROBE response</td><td data-th="Value" style="text-align:right">900/900</td><td data-th="Condition and comparison" style="text-align:left">900 exposure signals, per camera</td></tr></tbody></table></div>

## 9. Appendices and references

### 9-1. Appendices

The four appendices support the sections of this report in detail (Table 7). The structure of the rig OS and the course of the incident are in Appendix A, and the full record of the accuracy and real-time processing experiments is in Appendix B.

<div class="tbl" id="tab-7"><table><caption>Table 7. Report and appendices.</caption><thead><tr><th style="text-align:left">Appendix</th><th style="text-align:left">Title</th><th style="text-align:left">Contents</th><th style="text-align:left">Supports</th></tr></thead><tbody><tr><td data-th="Appendix" style="text-align:left">A</td><td data-th="Title" style="text-align:left">Rig OS structure report</td><td data-th="Contents" style="text-align:left">The four kernel parts, the life of a lease, control channel and video channel, the course of the frozen-screen incident</td><td data-th="Supports" style="text-align:left">Chapter 5</td></tr><tr><td data-th="Appendix" style="text-align:left">B</td><td data-th="Title" style="text-align:left">3D accuracy and real-time processing experiments</td><td data-th="Contents" style="text-align:left">Panoptic and Fit3D experiments, the learned model, turnaround time measurement</td><td data-th="Supports" style="text-align:left">Chapters 6, 8</td></tr><tr><td data-th="Appendix" style="text-align:left">C</td><td data-th="Title" style="text-align:left">Hardware details</td><td data-th="Contents" style="text-align:left">Camera specifications, trigger-board schematic and wiring, USB layout</td><td data-th="Supports" style="text-align:left">Chapter 4</td></tr><tr><td data-th="Appendix" style="text-align:left">D</td><td data-th="Title" style="text-align:left">Full WBS</td><td data-th="Contents" style="text-align:left">Stages, sprints, issue list</td><td data-th="Supports" style="text-align:left">Chapter 3</td></tr></tbody></table></div>

The sources of the photos and product materials taken from elsewhere among the photos in this report are in Table 8.

<div class="tbl" id="tab-8"><table><caption>Table 8. Photo sources.</caption><thead><tr><th style="text-align:left">Figure</th><th style="text-align:left">Photo</th><th style="text-align:left">Source</th></tr></thead><tbody><tr><td data-th="Figure" style="text-align:left">Figure 3</td><td data-th="Photo" style="text-align:left">Marker-based motion capture</td><td data-th="Source" style="text-align:left">Vicon promotional photo</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 3</td><td data-th="Photo" style="text-align:left">Instrumented machine</td><td data-th="Source" style="text-align:left">Ronfic miniplus product photo</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 14</td><td data-th="Photo" style="text-align:left">Edge computer dimensions</td><td data-th="Source" style="text-align:left">Advantech MIC-711D-OX datasheet</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 14</td><td data-th="Photo" style="text-align:left">Edge computer housing</td><td data-th="Source" style="text-align:left">Advantech MIC-711D-OX product photo</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 16</td><td data-th="Photo" style="text-align:left">Camera datasheet</td><td data-th="Source" style="text-align:left">Datasheet of the 3081V1 module from the manufacturer, DECXIN</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 16</td><td data-th="Photo" style="text-align:left">Firmware flashing tool</td><td data-th="Source" style="text-align:left">Firmware package from the manufacturer, DECXIN</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 27</td><td data-th="Photo" style="text-align:left">CMU Panoptic Studio</td><td data-th="Source" style="text-align:left">Joo et al., ICCV 2015[2]</td></tr><tr><td data-th="Figure" style="text-align:left">Figure 27</td><td data-th="Photo" style="text-align:left">Fit3D</td><td data-th="Source" style="text-align:left">Fieraru et al., CVPR 2021[1]</td></tr></tbody></table></div>

### 9-2. References

1. M. Fieraru, M. Zanfir, S. C. Pirlea, V. Olaru, C. Sminchisescu. AIFit: Automatic 3D Human-Interpretable Feedback Models for Fitness Training. CVPR, 2021. (the Fit3D dataset)
2. H. Joo, H. Liu, L. Tan, L. Gui, B. Nabbe, I. Matthews, T. Kanade, S. Nobuhara, Y. Sheikh. Panoptic Studio: A Massively Multiview System for Social Motion Capture. ICCV, 2015.
3. V. Bazarevsky, I. Grishchenko, K. Raveendran, T. Zhu, F. Zhang, M. Grundmann. BlazePose: On-device Real-time Body Pose Tracking. arXiv:2006.10204, 2020.
4. D. C. Brown. Decentering Distortion of Lenses. Photogrammetric Engineering 32(3), 1966.
5. Z. Zhang. A Flexible New Technique for Camera Calibration. IEEE TPAMI 22(11), 2000.
6. R. Hartley, A. Zisserman. Multiple View Geometry in Computer Vision, 2nd ed. Cambridge University Press, 2004.
7. G. Casiez, N. Roussel, D. Vogel. 1€ Filter: A Simple Speed-based Low-pass Filter for Noisy Input in Interactive Systems. CHI, 2012. (the One-Euro filter)
8. D. C. Liu, J. Nocedal. On the Limited Memory BFGS Method for Large Scale Optimization. Mathematical Programming 45, 1989.
9. A. Vaswani et al. Attention Is All You Need. NeurIPS, 2017.
10. A. Savitzky, M. J. E. Golay. Smoothing and Differentiation of Data by Simplified Least Squares Procedures. Analytical Chemistry 36(8), 1964.
11. P. de Leva. Adjustments to Zatsiorsky-Seluyanov's Segment Inertia Parameters. Journal of Biomechanics 29(9), 1996.
12. Meta. MHR (Momentum Human Rig). https://github.com/facebookresearch/MHR
13. H. Tu, C. Wang, W. Zeng. VoxelPose: Towards Multi-Camera 3D Human Pose Estimation in Wild Environment. ECCV, 2020.
14. InstantHMR, an open model distilled from SAM 3D Body. https://huggingface.co/momolesang/InstantHMR
