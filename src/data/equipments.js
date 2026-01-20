export const equipments = [
  {
    id: 1,
    name: 'Cooling Tower',
    category: 'Heat Transfer Equipment',
    shortDesc: 'Device to cool hot water by rejecting heat to atmospheric air via evaporative cooling',
    content: `These are devices/equipments that is used to cool doven an inconing stream of hot water that has been used as heat exchanging thund in industry prior, by rejecting heat to the atmospheric air and woling happens by evaporative woling.

## Key Concepts
- **Approach**: Temperature difference between exiting water stream and WBT (Wet Bulb Temperature)
- **Range**: Temperature difference between inlet and outlet water streams (T₁ - T₂)
- **Efficiency**: η = Range / (Range + Approach) = (T₁-T₂) / (T₁-T_WBT)

## Components
- Sprinkler/Distribution System: Pressurized nozzle releases water
- Thin Film Fills: Honey comb shaped heat transfer surfaces
- Drift Eliminator: Prevents water droplet loss from leaving air
- Cold Water Basin: Collects cooled water
- Nozzles: Deliver fluids to column

## Cooling Mechanism
1. **Sensible Heat Transfer**: Temperature difference between cold unsaturated air and hot water
2. **Evaporative Cooling**: Concentration gradient of moisture between unsaturated air and water

## Types
- **Natural Draft**: Stack effect (chimney effect) - air rises due to density difference
- **Mechanical Draft - Forced Draft (FD)**: Fan fitted at bottom, pushes air upward
- **Mechanical Draft - Induced Draft (ID)**: Fan fitted at top, pulls air upward

## Fouling & Scaling
- **Fouling**: Deposits of dirt, salts, microbes on heat exchange surfaces - reduces efficiency
- **Scaling**: Deposition of inorganic salts (CaCO₃, CaSO₄) - increased pressure drop
- **Particulate Fouling**: Suspended solids deposit on surfaces
- **Biological Growths (Biofouling)**: Algal, fungal, bacterial growth
- **Solution**: Increase water pressure drop to increase wall shear stress and prevent adhesion

## Design Features
- Hyperboloid shape reduces material cost, provides strength, increases air velocity at center
- Makeup water compensates for blowdown water, evaporative loss, and drift losses
- TDS (Total Dissolved Solids) control via blowdown and demineralized water addition

## Advantages of Natural Draft
- Low operating cost
- Environment friendly
- No noise
- Durable
- Power saving
- No recirculation of humid air`,
    keywords: ['cooling', 'evaporative', 'approach', 'range', 'fouling', 'scaling', 'natural draft', 'mechanical draft']
  },
  {
    id: 2,
    name: 'Pumps',
    category: 'Fluid Transfer Equipment',
    shortDesc: 'Devices that move fluids by adding mechanical energy; types: positive displacement and centrifugal',
    content: `## Positive Displacement Pumps
Trap a fixed volume of fluid inside, move it mechanically, and force it out through discharge line.
- Used for high viscosity fluids
- Discharge in pulses (not continuous)
- Can generate high pressures

### Types:
1. **Reciprocating**:
   - Piston type: Up to 50 atm
   - Plunger type: Up to 1500 atm+
   - Diaphragm type: 50-100 atm (corrosive/toxic fluids)

2. **Rotary**:
   - Lobe type: Two rotors rotate in opposite direction
   - Gear type: Refinery applications
   - Screw type: Two anti-rotating screws
   - Peristaltic: Flexible tube with pinching balls

## Centrifugal Pumps
Convert kinetic energy to pressure energy via rotating impeller and volute.

### Key Parameters:
- **Net Head (H)**: Total energy added to fluid = (P₂ + αV₂²/2g + Z₂) - (P₁ + αV₁²/2g + Z₁)
- **Water Horsepower**: Actual power added to fluid
- **Brake Horsepower (BHP)**: Power supplied to pump by motor
- **Pump Efficiency**: η = (ρgH) / (ω T_shaft)

### Pump Characteristic Curves:
- **Shutoff Head**: Maximum head at zero discharge (valve closed)
- **Free Delivery**: Maximum flowrate at zero head
- **Best Efficiency Point (BEP)**: Optimum efficiency between shutoff and free delivery

### Pump Blade Types:
- **Forward Curved**: Power increases with flowrate (dangerous)
- **Radial**: Power peaks then decreases
- **Backward Curved**: Power peaks then decreases safely

## NPSH (Net Positive Suction Head)
- **Available (NPSHa)**: Pressure difference at suction inlet minus vapor pressure
- **Required (NPSHr)**: Minimum pressure needed at eye of impeller
- **Rule**: NPSHa must be >> NPSHr to prevent cavitation

## Cavitation
- Occurs when pressure falls below vapor pressure
- Vapor bubbles form and collapse near surfaces
- Causes: Noise, vibration, pitting, material erosion, performance loss
- Prevention: Reduce flowrate, reduce suction line length, increase pipe diameter, reduce friction

### Suction Cavitation: Pressure too low at inlet
### Discharge Cavitation: Pressure too high at outlet

## Operating Configurations:
- **Series**: Heads add, flowrate same → increases total head
- **Parallel**: Flowrates add, head same → increases total flowrate
- Care: Avoid flow reversal in smaller pump branch

## Priming
Removal of trapped air/vapor from pump casing before startup.
- Required when pump is above liquid level
- Not needed for submerged pumps
- Reciprocating pumps are self-priming
- Methods: Foot valve, vacuum pump, steam jet ejector, manual filling

## Accessories:
- **Strainer**: Entry of suction line (prevents solids)
- **Foot Valve**: No-return valve in suction line (helps priming)`,
    keywords: ['positive displacement', 'centrifugal', 'NPSH', 'cavitation', 'BHP', 'head', 'impeller', 'efficiency']
  },
  {
    id: 3,
    name: 'Distillation Equipments',
    category: 'Separation Equipment',
    shortDesc: 'Tray and packed columns for vapor-liquid contacting and mass/heat transfer',
    content: `## Tray Column
**Gas/Vapour Dispersed** - Provides physical platform for vapor-liquid contact.

### Components:
1. **Tray**: Platform for V-L contact, mass/heat transfer, phase changes
2. **Weir**: Maintains average liquid height on tray
3. **Downcomer**: Route for liquid movement from upper to lower tray by gravity; vapor separates here
4. **Shell**: Outer body (metal/alloy/plastic); thick walls at bottom for high bending moments
5. **Nozzles**: Feed entry, reflux, boilup points
6. **Baffles**: Reduce splashing from nozzles
7. **Mist Eliminators**: Remove entrained liquid from leaving vapors

### Tray Column Failures:

**Hydraulic Gradient**: Difference in liquid heights between entry and exit of tray
- High gradient → Channeling (unequal vapor distribution)
- More in bubble cap, less in sieve trays
- Should be < ½ inch

**Weeping**: Low vapor velocity/flowrate → liquid falls through tray perforations
- Pressure of vapor cannot hold liquid on tray
- Reduces efficiency

**Dumping**: Extreme weeping - all liquid falls through perforations
- Also called "showering"
- Sieve trays most prone, then valve, then bubble cap

**Entrainment**: High vapor velocity → carries liquid droplets upward
- Can lead to entrainment flooding

**Foaming**: Liquids form foams/froths when bubbled through
- Increases V-L contact (good) but increases pressure drop (bad)
- Can cause priming (foam fills tray spacing)

**Coning**: Low liquid flowrate → vapors push liquid away
- Reduces V-L contact

**Flooding**: Excessive liquid holdup in column
- **Entrainment/Spray Flooding**: Droplets from lower tray carried to upper tray
- Operating velocity: 0.6-0.8 of U_fL (Souders-Brown constant)
- **Downcomer Backup**: Pressure too high for liquid to overcome
- **Downcomer Choking**: Geometry insufficient for L+V flowrates

**Turn-down Ratio**: Designed vapor velocity / Minimum vapor velocity
- Example: 10:1 means can operate from 50 m/s down to 5 m/s

### Tray Types:

**Sieve Tray**
- Simplest: Metal plate with perforations
- Supports L-V and L-L contact
- Turn-down ratio: 2:1 (poor flexibility)
- Market share: 25%
- Prone to weeping/dumping but low channeling
- High capacity, low fouling, low pressure drop
- Easy maintenance, economical

**Valve Tray**
- Modified sieve with disk on perforations
- Disk displacement proportional to vapor velocity
- Turn-down ratio: 4:1 - 5:1
- Market share: 70% (most popular)
- Weeping reduced, moderate fouling
- Higher cost/pressure drop than sieve
- Very high capacity

**Bubble-Cap Tray**
- Risers with cap containing slots
- Vapor rises through riser, bubbles through slots
- Turn-down ratio: 8:1 - 10:1 (excellent)
- Market share: 5% (rarely used)
- Very low weeping
- High pressure drop, high fouling tendency
- Difficult to clean
- Used when low vapor velocity anticipated

## Packed Column
**Liquid Dispersed** - Continuous contact equipment with packings for V-L surface.

### Components:
1. **Shell**: Outer body (plastic/ceramic/metal)
2. **Packing Support**: Platform for packing
3. **Packing Restrainer**: Keeps packing in place
4. **Derister**: Removes liquid from leaving vapor
5. **Liquid Distribution System**: Pipes with perforations (not spray nozzles to reduce entrainment)
6. **Liquid Redistribution System**: Prevents channeling (at least one per 6-7m of packing)
7. **Packing**: Deliberately added structures to increase V-L contact surface

### Packing Requirements:
- High specific interfacial area
- High void fraction (increases capacity, decreases pressure drop)
- Fouling and corrosion resistant
- Uniform fluid distribution (no stagnation)
- Mechanical strength (resists crushing)

### Packing Types:

**Random Packing**:
- Dumped directly into column → random orientation
- Cost-effective, less efficient, high pressure drop

1. **1st Gen**: Raschig ring (simple), Berl saddle (aerodynamic)
2. **2nd Gen**: Intalox saddle, Pall rings (less nesting/stagnation)
3. **3rd Gen**: Intalox metal tower packing, Fleximax (better efficiency, lower ΔP)

**Structured Packing**:
- Metal corrugated sheets or wire meshes
- Liquid spread on thin films
- Regular pattern, high void fraction
- Low pressure drop (advantageous in vacuum distillation)
- High capacity but costly
- Severe channeling issues

**Grid Packing**:
- Grid structures stacked in layers
- Low pressure drop, high efficiency
- Used for fouling, corrosion-prone processes

### Packed Column Failures:

**Loading**: Liquid accumulates inside column due to increased gas flowrate
- Higher pressure drops in column
- Better V-L contact

**Flooding**: Extreme loading - column nearly filled with liquid
- Sharp rise in pressure drop (slope becomes vertical)
- Highly undesired, increases pumping cost

**Channeling**: Liquid flows along column wall instead of through packing
- Wall has maximum void space
- Caused by poor irrigation, low flowrate, improper distribution
- Reduced when packing diameter < 1/8 of tower diameter (recommended 1/15)

### Tray vs Packed Tower Comparison:

| Parameter | Tray | Packed |
|-----------|------|--------|
| Pressure Drop | High | Low (advantageous for vacuum) |
| Liquid Holdup | Higher | Lower |
| Cooling Coils | Easier to introduce | Difficult |
| Corrosive Fluid | Requires coating | Better (can use ceramic/plastic) |
| Suspended Solids | Better (easier clean) | Prone to fouling |
| Side Product Streams | Easier (fractionation) | Difficult |
| Low Gas Flowrate | Weeping problem | Can handle |
| High Liquid Flowrate | Good capacity | Flooding risk |
| Foaming Liquid | Problem | Better |
| Thermal Shock | Can handle | May damage packing`,
    keywords: ['tray', 'packed column', 'sieve tray', 'valve tray', 'bubble cap', 'flooding', 'weeping', 'entrainment', 'HETP']
  },
  {
    id: 4,
    name: 'Heat Exchangers',
    category: 'Heat Transfer Equipment',
    shortDesc: 'Equipment for indirect heat transfer between fluids: plate, shell-tube, double-pipe, spiral types',
    content: `## Plate Type Heat Exchanger (PHX)

### Structure:
- Movable cover (pressure plate) + Fixed cover (frame plate)
- Stacked plates between frames with clamping bolts
- Small gaps (clearances) between plates for fluid flow
- Plates arranged so alternate gaps have same fluid type
- Counter-current heat transfer

### Features:
- Thin, highly conductive material
- Corrugations on plate surfaces provide:
  1. Structural rigidity (thin plates need strength)
  2. Turbulence → Increased heat transfer coefficient
  3. Wall shear stress → Descaling effect (prevents deposition)

### Advantages:
- High efficiency
- Cooling capacity easily varied by changing plate count or flowrates
- Requires much less space than shell-tube
- Lightweight
- Easy cleaning and dismantling

### Disadvantages:
- Very expensive
- Difficult to find faulty plate
- Pressure and temperature limits
- Replacing plates costly and time-consuming

### Fouling in PHX:
- Occurs as fluid passes through narrow gaps
- BUT: Corrugations create turbulence reducing deposition
- Uniform flow profiles → No low-speed regions
- **Result**: Much less fouling than other HX types

### Pressure/Temperature Limits:
- Overtightening clamping bolts crushes thin plates
- High P/T can expel gaskets → "Gasket blow-out"
- Loss of seal → Different streams mix (contamination)
- Solution: Braised or welded plate HXs (gasket-less) for high P/T

### Application:
- Corrosive fluids (but avoid particulate matter)
- Not suitable for high P/T applications

---

## Shell & Tube Heat Exchanger (STHX)

### Structure:
- Housing (pressure vessel): 4 entry/exit points
- Tubes bundled together with baffles, tube sheet, tie rods
- Channel baffle directs tube-side fluid
- Segmental baffles direct shell-side fluid

### Function of Baffles:
- Support tubes (hold together)
- Change shell-side fluid direction rapidly/frequently
- Increase turbulence → Better heat transfer
- Promote descaling (reduce fouling)

### Multipass Configuration:
- Tube-side passes: Fluid goes through tubes multiple times
- Shell-side passes: Fluid crosses multiple shells
- Example: "4x8 STHX" = 4 shell passes, 8 tube passes

### Advantages vs PHX:
- Can handle high P/T fluids
- Easier to find leaks/faulty tubes
- Cheaper
- Easy to maintain
- Lower pressure drop (when fully open)

### Disadvantages:
- Less efficient
- Needs ~5x more space than PHX
- More fouling (lower velocities favor deposition)
- Cooling capacity cannot be varied

### Fouling in STHX:
- More common than PHX due to lower fluid speeds
- Relatively low velocity favors deposition
- Tube inserts/turbulators help increase turbulence

### Fluid Allocation:

**Corrosive Fluid**:
- Place in tube side (cheaper to coat tubes with stainless steel)
- Coating shell is costly and repairs difficult

**High P/T Fluid**:
- Place in tube side (thick shell is very costly)
- Tubes withstand high pressure better

**Fouling/Dirty Fluid**:
- Place in tube side (easier maintenance and cleaning)

**Vapor/Phase-Changing Fluid**:
- Place in shell side (higher specific volume allows higher flowrates, less ΔP)

**High Velocity Fluid**:
- Preferred tube side (reduces fouling, increases HTC, but also ΔP)

**High Viscosity + Low Speed Fluid**:
- Place in shell side (reduces ΔP, baffles create turbulence for better HTC)

**Low HTC Fluid**:
- Place in shell side (extra surface area helps)

---

## Double Pipe Heat Exchanger

### Structure:
- Inner tube + Outer annular pipe
- Fluids flow through both regions
- Also called: Hairpin, Jacketed pipe, U-tube HX, Pipe-in-pipe

### Characteristics:
- Very simple, basic design
- Low heat exchange surface (compared to other types)
- Good for low investment or low cooling requirement
- Can be counter-flow or cross-flow (counter-flow more efficient)

### Disadvantages:
- Increasing length increases joints/flanges → Leakage prone
- Leg length cannot exceed 20 ft (causes tube bending, disturbs flow pattern, reduces HTC)
- Low efficiency
- Limited surface area

### Advantages:
- Low cost
- Simple design
- Easy maintenance
- Requires less space

### Why Counter-Flow is More Efficient:
1. Similar temperature difference maintained throughout (unlike cross-flow with large ΔT at inlet, small at outlet)
2. Mean driving force much larger in counter-flow
3. Can achieve T_cold_outlet > T_hot_inlet in counter-flow (impossible in co-current)
4. Uneven temperature distribution causes thermal stresses (counter-flow avoids this)

---

## Spiral Heat Exchanger

### Structure:
- Spirally folded and welded two long metal sheets
- Spacer studs maintain small uniform gaps
- Spiral concentric arrangement
- Exclusively counter-current

### Flow Pattern:
- Hot fluid: Enters axially, flows spirally, exits through peripheral nozzle
- Cold fluid: Enters through peripheral nozzle, exits axially

### Advantages:
- Very high efficiency (secondary flows in spiral gaps create high turbulence)
- High turbulence reduces fouling (scouring effect on walls)
- Fouling ~1/3 less than tubular HXs
- Can handle slurries and high viscous fluids
- Compact design

### Disadvantages:
- Heavy
- High welding quality required
- Poor rigidity

### Application:
- Best for fouling fluids, particulate matters, slurries
- Lower deposition tendency than other HXs

---

## General HX Concepts:

### Effectiveness (ε):
- Ratio of actual heat transfer to maximum possible
- Used when temperature data limited

### LMTD (Log Mean Temperature Difference):
- ΔT_lm = [(T_h_in - T_c_out) - (T_h_out - T_c_in)] / ln[(T_h_in - T_c_out)/(T_h_out - T_c_in)]
- For multipass: Corrected with F-factor using correction curves`,
    keywords: ['plate', 'shell-tube', 'LMTD', 'fouling', 'counter-current', 'effectiveness', 'double pipe', 'spiral']
  },
  {
    id: 5,
    name: 'Flowmeters',
    category: 'Measurement Equipment',
    shortDesc: 'Devices to measure fluid flowrate: restriction (venturi/orifice), rotameter, pitot tube',
    content: `## Restriction Type Flowmeters
Also known as differential head type - Intentionally change fluid velocity to measure pressure difference.

### Principle:
Using Bernoulli equation (neglecting elevation change):
- P₁ + ½ρV₁² = P₂ + ½ρV₂²
- At minimum area (throat): Maximum velocity → Minimum pressure
- From continuity: A₁V₁ = A₂V₂

### Flow Circulations (Adverse Pressure Gradient):
- After throat, pressure increases but velocity should decrease
- Fluid experiences opposing/retarding force (going "uphill" in pressure)
- Streamlines near wall have less momentum than center
- Near wall streamlines cannot overcome pressure gradient
- Result: Flow separation, recirculation, eddies, wake formation
- Recirculation reduces pressure recovery (undesirable)

### Discharge Coefficient (C_d):
- Measured ΔP includes both velocity change AND losses
- Q = C_d × A₁A₂/√(A₁² - A₂²) × √(2ΔP/ρ)
- C_d < 1 accounts for losses
- Lower C_d = More losses

---

## Venturimeter

### Structure:
- Converging section (17-21° angle)
- Throat
- Diverging section (7-11° angle - longer to reduce separation)

### Characteristics:
- C_d ≈ 0.98 (very good - low losses)
- Lesser pressure losses
- More space required
- Costly

### Advantages:
- Low losses
- High C_d

### Disadvantages:
- Expensive
- Requires more space

### Application:
- Recommended for long pipelines where pressure loss unaffordable
- Higher pumping cost if too much ΔP loss

---

## Orificemeter

### Structure:
- Inlet (diameter = pipe diameter)
- Throat (orifice plate with concentric circular opening)
- Vena contracta (region of minimum area after orifice)

### Characteristics:
- C_d ≈ 0.65 (poor - high losses)
- Much pressure loss due to flow separation
- No space problem
- Low cost

### Advantages:
- Inexpensive
- Simple installation
- No space problems

### Disadvantages:
- Low C_d
- Significant pressure loss

### Application:
- Recommended for short pipelines
- Not suitable for long lines (too much pressure loss)

### Limitations:
- Cannot measure compressible flow (gas) where density changes
- Throat diameter should not be too small (cavitation risk, Mach number < 1)

---

## Area-Meter (Rotameter)

### Structure:
- Diverging tube
- Float (bob) inside tube
- Scale for flowrate reading

### Principle:
**Three forces balance on bob**:
1. Gravity (downward)
2. Buoyancy (upward)
3. Drag force (upward) = C_d × ½ρV² × A_annular

### Operation:
- At minimum flowrate: Bob at lowest point
- Annular area (between bob and tube) = minimum
- Fluid velocity = maximum
- Drag force = maximum
- Due to extra upward force, bob rises
- As bob rises, annular area increases
- Velocity decreases → Drag force decreases
- Eventually, all 3 forces balance at particular flowrate
- Reading taken from calibrated scale

### Characteristics:
- Pressure drop nearly constant (unlike restriction meters)
- Flowrate changes by changing annular area (bob position)
- Linear scale if annular area is very small
- Works for liquids and gases

### Advantages:
- Simple direct reading
- Works at various flowrates

---

## Pitot Tube

### Principle:
- Measures **stagnation pressure** (total pressure)
- Converts kinetic energy to pressure energy without losses
- Installed with **piezotube** for static pressure measurement

### Construction:
- Pitot tube: Measures stagnation pressure (P_stag = P + ½ρV²)
- Piezo tube: Measures static pressure (P_static)
- Difference: ½ρV² = Pressure head due to velocity

### Key Point:
- Pitot tube axis NOT at pipe center (measures point velocity, not average)
- If centered, would measure maximum (axial) velocity

### Equations:
**Stagnation pressure**: P₂ = P₁ + ½ρV₁²

**Manometry**:
- Piezo: P_atm + ρgh₁ = P_static
- Pitot: P_atm + ρgh₂ = P_stag

**Point velocity**: V = √(2g(h₂ - h₁))

### Why This Design:
- Cannot directly measure kinetic energy with manometer
- Must convert kinetic energy to pressure energy (stagnation)
- Stagnation pressure contains both static pressure + dynamic pressure
- Manometer can then measure this combined pressure

### Applications:
- Aircraft velocity measurement
- Velocity profile generation (vary pitot position, measure at each point)
- More accurate than restriction meters for point velocity

### Inclined Manometer Advantage:
- Same fluid height rise but spreads over longer tube length
- Easier to read and estimate eye (larger divisions)
- Increases sensitivity
- Disadvantage: Longer tube needed`,
    keywords: ['Venturi', 'orifice', 'rotameter', 'pitot tube', 'discharge coefficient', 'stagnation pressure', 'adverse gradient']
  },
  {
    id: 6,
    name: 'Mixing Equipments',
    category: 'Process Equipment',
    shortDesc: 'Agitation equipment with different impeller types for mixing and circulation',
    content: `## Definitions
- **Mixing**: Random distribution of molecules/particles of different phases through each other
- **Agitation**: Induced motion or circulation current inside a fluid bulk in specified way
- **Relationship**: Mixing and agitation are different, but agitation promotes mixing

---

## Agitation Equipment Components

### Vessel:
- Usually cylindrical with rounded corners
- Top may be open or closed
- Liquid height/depth ≈ Diameter of vessel

### Internal Components:
- Impeller: Fitted on overhung shaft
- Shaft: Connected to motor (sometimes with speed-reducing gearbox)
- Baffles: Optional, attached to vessel inner walls
- Accessories: Inlet/outlet lines, cooling jackets, thermometer wells

### Mounting Options:
- Shaft: Centered or off-center/tilted (to prevent swirling)
- Baffles: Break vortices, improve mixing

---

## Impeller Types

### 1. Axial Flow Impeller
**Motion Direction**: Parallel to shaft axis

**Flow Pattern**:
- Currents move downward
- Come close to bottom surface
- Reverse direction and move upward
- Get sucked by impeller blades and circulate

**Characteristics**:
- Don't allow solids to settle
- Ideal for solid-liquid mixing, solid suspension
- Used only for low viscosity fluids
- Example: Marine propeller

**Advantages**:
- Excellent solid suspension
- Good for low-viscosity mixing

**Disadvantages**:
- Not suitable for high viscosity
- Swirling can be a problem

---

### 2. Radial Flow Impeller
**Motion Direction**: Radially outward from impeller

**Flow Pattern**:
- Flows outward after impeller
- Collides with wall
- Moves either upward or downward
- Produces 2 separate circulation patterns

**Characteristics**:
- High shear stress on walls
- Prevents particle deposition
- NOT ideal for solid mixing
- Ideal for L-G (Liquid-Gas), L-L (Liquid-Liquid) mixing
- Used for moderate to very high viscosity
- Example: Paddle impeller, Turbine

**Applications**:
- Paint, pastes, adhesives mixing
- Gas absorption (bubble dispersion)
- Liquid blending

---

### 3. Mixed Flow Impeller
**Characteristics**:
- Blades are pitched/bent
- Provides both radial and axial flow
- Promotes dispersion
- Prevents solid deposition

**Advantages**:
- Combines benefits of axial and radial
- Better for diverse applications

---

## Specific Impeller Types

### Propeller (Axial Flow)
- Marine-type propeller used in boats/ships
- Blade speed: 400-1750 RPM (very high)
- Produces very high cut/shear on liquid
- Circulations propel through fluid column over large distances
- Suitable for large/tall tanks
- Mounting: Centered, off-center, tilted (to prevent swirling)
- Variants: 3-blade, 4-blade, toothed marine type
- Used for: Low viscosity fluids only

### Paddle (Radial Flow)
- Low velocity: 20-200 RPM
- Blades: 2 or 4 in number
- Size: 60-80% of vessel diameter
- Blade surface: Vertical (sometimes pitched)
- Problem: Fluid swirls without mixing → Solution: Attach baffles to break vortices
- Used for: Moderate to high viscosity (up to 47,773 Pa·s)
- Limitation: Not for solid suspensions

### Turbine (Radial Flow)
- Multi-bladed paddle with shorter blades
- Size: 30-50% of vessel diameter
- Power: Less than paddle but highly efficient
- Viscosity range: Up to ~100 Pa·s
- Can be pitched to promote axial flow
- High efficiency

### Anchor Paddle
- Anchor-shaped impeller
- Ends move along vessel wall
- High shear stresses
- Prevents wall depositions
- Used for: Very high viscosity (50-500 Pa·s)

### Helical Ribbon
- Runs at low RPM
- Provides tortuous flow
- Used for: Very high viscosity fluids
- Excellent for viscous material mixing

### Draft Tube
**When to use**:
- When control of velocity and direction needed
- When high shear stresses required on blades (forming emulsions)
- When floating solids need to be drawn into fluid

**Function**:
- Restricts and directs flow from/to impeller blades
- Controls circulation patterns
- Increases shear locally

---

## Mixing in Different Scenarios

### Low Viscosity Fluids:
- Propeller (axial)
- High speed, good for tall tanks
- Minimize swirling with baffles

### Medium Viscosity (to high):
- Paddle (radial)
- Turbine (radial, more efficient)
- Lower speeds, good shear
- Baffles for vortex breaking

### High Viscosity (>47,773 Pa·s):
- Anchor paddle
- Helical ribbon
- Very low speed
- High shear on walls

### Solid Suspension:
- Axial flow impellers (propeller)
- Keep solids suspended, prevent settling

### Gas Absorption:
- Radial flow impellers
- Shear breaks bubbles
- Better bubble dispersion

### Emulsion Formation:
- Draft tube + high shear
- Controlled velocity and direction`,
    keywords: ['axial', 'radial', 'propeller', 'paddle', 'turbine', 'anchor', 'draft tube', 'viscosity', 'shear']
  },
  {
    id: 7,
    name: 'Valves',
    category: 'Flow Control Equipment',
    shortDesc: 'Devices for stopping, regulating, or ensuring one-way fluid flow',
    content: `## Valve Functions
- Stop or regulate flow
- Ensure one-way flow (depending on type)
- Control pressure/reduce pressure
- Handle various fluid types

---

## Gate Valve

### Construction:
- Tapered disk/gate perpendicular to flow
- When fully closed: Rests on tapered seat
- When fully open: Rests inside bonnet
- Handwheel for operation

### Characteristics:
- Takes time to lower/close (multiple turns)
- On/off control only (not for regulation)
- **K_L** (fully open) = 0.15; (1/2 open) = 2.10; (1/4 open) = 17.00

### Operating Range:
- Wide range of pressure and temperature
- Avoid temperature fluctuations (thermal stresses)

### When Used:
- Only for on/off, not for flow regulation
- Reason: If partially open, fluid directly impacts gate
- Causes: Wear and tear, sealing damage, leakage

### Advantages:
- Low cost
- Very low pressure drop when fully open
- Can transport solids

### Disadvantages:
- Prone to wear and tear when partially open
- Sealing damage
- Complex repair
- Takes time to close
- Not suitable for regulation

### Best For:
- Quick on/off, not corrosive liquids
- Liquids with suspended solids

---

## Globe Valve

### Construction:
- Disk moved vertically by stem (translational movement via handwheel rotation)
- Opening increases proportionally with stem movement
- Multiple direction changes in flow path

### Characteristics:
- For flow regulation (throttling valve)
- Takes time to lower/close
- Takes many turns
- High pressure drop even when fully open (**K_L** = 10)
- **K_L** indicates high losses

### Operating Range:
- Wide range of temperature
- NOT suitable for high pressure

### Flow Path:
- Multiple changes in direction
- Even when fully open, loss is high
- Turbulence and eddies from direction changes

### When Used:
- Exclusive throttling/regulation
- Flow control applications

### Advantages:
- Good for regulation
- Easy repair
- Suitable for throttling

### Disadvantages:
- Takes time to close
- High pressure loss
- Many turns cause flow separations and eddies
- May cause wear/tear and leakage
- Sealing prone to damage

### Best For:
- Throttling, flow regulation
- Pressure control

---

## Ball Valve

### Construction:
- Quarter-turn spherical hole in larger sphere
- Hole diameter ≈ pipe diameter
- Handle (quarter-turn operation)

### Characteristics:
- Both on/off AND regulation
- Highly cost-effective
- Tight seal, no leakage
- Highly durable, lasts many years
- Fast opening/closing
- **K_L** (fully open) = 0.05 (very low loss)

### Features:
- Can transport solid-bearing fluids (slurries)
- Suitable for gas supply
- Works with corrosive fluids
- Easy repair

### Applications:
- Refineries (prevent oil/gas leaks)
- Chemical plants
- General industrial use

### Advantages:
- Tight seal, no leakage
- Easy to operate (quarter-turn)
- Highly cost-effective
- Low pressure drop
- Very durable
- Easy maintenance
- Works with slurries

### Disadvantages:
- Narrow operating temperature range
- Less suitable for extreme conditions

### Best For:
- On/off and regulation
- Slurries and corrosive fluids
- Leak-proof applications (refineries)

---

## Check Valve

### Construction:
- No-Return Valve (NRV)
- Ball or disk with spring
- Allows flow in one direction only

### Operation:
- Forward pressure opens valve
- Reverse pressure closes (spring forces ball/disk shut)

### When Used:
- Prevent backflow
- Pressure relief applications
- Reduce pressure by allowing controlled leakage

### Limitations:
- **Should NOT be used for pulsating flows**
- Frequent movement of ball causes wear and tear

### Applications:
- Waste water treatment
- Irrigation systems
- Power, pharmaceutical, oil/gas industries

### Best For:
- One-way flow protection
- Backflow prevention

---

## Butterfly Valve

### Construction:
- Quarter-turn operation
- Flat disk rotates between 0-90° with flow
- Stuffing box for sealing
- Handle for operation

### Characteristics:
- Flow regulation + on/off
- Suitable for large pipes
- When stream composition is important factor
- Easy installation
- Easy maintenance

### Advantages:
- Low maintenance
- Easy installation
- Accurate composition control
- Suitable for large pipelines
- Quick operation

### Disadvantages:
- Leakage (full shut-off not obtained)
- Narrow range of T, P

### Applications:
- Chemical and pharmaceutical industries
- Large pipeline systems
- Slurries and suspended solids

### Best For:
- Large pipes where composition matters
- Slurries and suspended solids

---

## Diaphragm Valve

### Construction:
- Elastomeric diaphragm/membrane
- Plug controlled by handle
- Can be straight type or weir type
- Weir type: Diaphragm rests on weir

### Characteristics:
- Regulation + on/off
- Ideal for corrosive fluids
- Ideal for viscous fluids and slurries
- Low range of P, T
- Easy maintenance but frequent replacement needed

### Applications:
- Corrosive fluid handling
- Slurry transport
- Viscous fluid control

### Disadvantages:
- Not for high P/T
- Frequent diaphragm replacement
- Not suitable for long pipes

### Also Known As:
- Membrane valve

### Best For:
- Corrosive and viscous fluids
- Slurries
- Short pipelines

---

## Plug Cock

### Construction:
- Simplest valve type
- Closure element: Plug with plug port/sleeve
- Quarter-turn operation (similar to ball valve)
- Simple design

### Characteristics:
- On/off valve only
- Very leak-proof
- Takes less time to switch on/off
- Due to high friction, needs force to operate
- Easy maintenance
- Simple design

### Advantages:
- Leak-proof
- Simple design
- Easy maintenance
- Quick operation
- High durability

### Disadvantages:
- Requires force to operate (high friction)
- On/off only (not for regulation)

### Best For:
- Simple on/off applications
- Where leak-proof essential
- Low-cost installations

---

## Comparison Summary

| Valve | Type | Best Use | K_L | Cost |
|-------|------|----------|-----|------|
| Gate | On/off | Quick stop | 0.15 | Low |
| Globe | Regulation | Throttling | 10 | Medium |
| Ball | On/off + Reg | Slurries | 0.05 | Medium |
| Check | One-way | Backflow | - | Low |
| Butterfly | Regulation | Large pipes | - | Medium |
| Diaphragm | Regulation | Corrosive | - | Medium |
| Plug | On/off | Simple | - | Low |

**Note**: K_L = Loss coefficient (lower = less pressure drop)`,
    keywords: ['gate', 'globe', 'ball', 'check', 'butterfly', 'diaphragm', 'plug', 'throttling', 'pressure drop']
  },
  {
    id: 8,
    name: 'Size Reduction Equipments',
    category: 'Process Equipment',
    shortDesc: 'Crushers and grinders for comminution - coarse and fine particle size reduction',
    content: `## Size Reduction/Comminution

### Ideal Properties:
- Large capacity
- Low power requirement
- Yields product of uniform or desired size

---

## Crushers vs Grinders

### Crushers:
- Low speed machines
- Employed for coarse reduction of feed
- Large quantities processing
- Heavy duty equipment
- Low power consumption (coarse reduction needs less power)
- Mostly open circuit
- Mode: Compression
- Types: Primary (Jaw), Secondary (Gyratory, Roll)
- Large throughput

### Grinders:
- High speed machines
- Fine grinding of feed
- High power consumption per unit mass
- Always (mostly) used in closed circuit
- Mode: Impact and/or attrition/grinding
- Types: Fine (Ball mill), Ultrafine (Attrition mill, Fluid energy mill)
- Small throughput

---

## Jaw Crusher (Primary Crusher)
**Discontinuous discharge**

### Components:
- Fixed jaw (anvil): Nearly vertical
- Swinging jaw: Reciprocates on horizontal plane at 20-30° angle to anvil
- Eccentric: Drives swinging jaw linearly toward anvil
- Jaw surfaces: Smooth or toothed

### Operation:
- Feed introduced between jaws
- Feed breaks due to compressive force
- Material crushed and recrushed until falling off

### Types:

**Blake Type**:
- Swinging jaw pivoted at entry point
- Maximum area at discharge
- Unwanted distribution/variation in product size
- No choking problem

**Dodge Type**:
- Swinging jaw pivoted at exit point
- Fixed discharge area
- Maintains nearly fixed product size
- Faces choking problems
- Lower production rate
- Needs more maintenance

### Advantages:
- Reliability
- Convenient maintenance
- Simple design

### Disadvantages:
- Low throughput
- Limited reduction ratio
- Causes considerable vibration

---

## Gyratory Crusher (Secondary Crusher)
**Continuous discharge**

### Components:
- Conical chamber with wide opening at top
- Conical crushing head fitted eccentrically on shaft
- Shaft causes both linear and rotational motions
- Stationary wall

### Operation:
- Feed introduced from top
- Falls and gets crushed repeatedly by gyrating head
- At times: Head close to one wall
- At other times: Head close to opposite wall
- No choking problem
- Continuous output

### Advantages:
- Higher throughput than jaw crusher
- Continuous output (not discontinuous)
- Higher cost efficiency in power usage

### Disadvantages:
- Very large size (bigger than jaw crusher)
- Costly
- Tough to maintain
- Not suitable for wet/sticky feed

---

## Smooth Roll Crusher
**Compression**

### Construction:
- Two cylindrical rolls on separate horizontal shafts
- Rotate toward each other
- Small clearance between rolls

### Operation:
- Feed drawn by rotating rolls
- Gets crushed passing through clearance

### Characteristics:
- Smooth rolls: Low compression, low reduction ratio
- Continuous operation
- High capacity
- No choking issues
- Highly efficient

### Disadvantages:
- Susceptible to wear and abrasion
- Variation in product size

---

## Toothed Roll Crusher / Disintegrators
**Compression + Shear + Impact**

### Construction:
- Similar to smooth roll crusher
- Rolls contain breaker bars or corrugations/teeth
- Creates multiple action modes

### Characteristics:
- Compression + Shear + Impact simultaneously
- Very versatile
- Higher reduction ratio
- Cannot be used for very hard feed

### Nip Angle:
- Angle between tangents of rolls and feed at contact
- Generally 20-30°
- Relates to achievable reduction

---

## Hammer Mill (Fine Grinder)
**Impact grinding**

### Components:
- Horizontal shell with anvil plates
- Rotor moving at high speed on horizontal shaft
- Multiple rectangular hammers on rotor with enlarged ends
- Grate/screen at lower portion

### Operation:
- Feed introduced from top
- Collides/impacts with high-speed hammers
- Thrown outward
- Collides with anvil, breaks into pieces
- Rubbed against hammers, forms powder
- Screened by grate/screen
- Powder falls down

### Variant - Impactor:
- No grate/screen
- Serves as primary reduction machine

### Advantages:
- Minimal maintenance
- Low cost
- Uncomplicated operation

### Disadvantages:
- Noisy
- Dust formation
- Heat generation
- Less size uniformity

---

## Tumbling Mill (Fine Grinder)
**Grinding by attrition**

### Construction:
- Shell inside which >50% of volume occupied by grinding medium
- Rotates about horizontal shaft at low speeds
- Inner walls lined with abrasion-resistant materials (manganese steel, rubber)

### Operation:
- Grinding medium lifted upward by centrifugal force
- Falls and impacts on solids
- Rolls over each other causing attrition
- Repeated tumbling and grinding

### Types:

**Ball Mill**:
- Grinding medium: Steel balls
- More impact, less attrition
- Rotation speed: 50-75% of critical speed optimal
- High efficiency
- Uniform product distribution
- Continuous operation
- Used for abrasive feed
- Disadvantages: Wear/tear, noise, tough maintenance

**Rod Mill**:
- Grinding medium: Steel long rods
- More attrition (rods roll over each other)
- Less impact than ball mill

**Pebble Mill**:
- Grinding medium: Pebbles (porcelain or zircon)
- Lower cost than ball mill
- Similar operation to ball mill

### Characteristics:
- High efficiency
- Uniform product distribution
- Continuous or batch operation
- Used for abrasive feed
- Susceptible to wear/tear
- Noisy
- Tough maintenance

---

## Attrition Mill (Ultrafine Grinder)

### Construction:
- Two disks with grooved/flat surfaces
- May contain teeth or corrugations
- Disk axis generally horizontal

### Types:

**Single Runner Mill**:
- One disk fixed, other rotating

**Double Runner Mill**:
- Both disks rotating in opposite directions
- Less choking problems
- Cannot handle very hard solids

### Applications:
- Pharmaceutical industries
- Dry milling

### Disadvantages:
- Heating issues
- Not suitable for hard solids

---

## Fluid Energy Mill (Ultrafine Grinder)
**No moving parts, no grinding medium**

### Components:
- Cylindrical tube with circular or elliptical pathway
- Energizing nozzles: Introduce pressurized gas/superheated steam tangentially
- Venturi feeder: Introduces solids
- Reduction chamber
- Classifier near inner wall
- Bag filters and cyclones downstream

### Operation:
1. Venturi feeder introduces solids
2. In reduction chamber: Fluidized by pressurized air
3. Huge turbulence created
4. Solids collide with each other and inner wall
5. Size reduction occurs tremendously
6. At upper part of loop: Sharp turn throws heavier solids outward, lighter inwards
7. Classifier keeps lighter solids inside (continue reduction)
8. Lighter product passes through filters

### Advantages:
- High capacity
- High efficiency
- No moving parts (low maintenance)
- Suitable for heat-sensitive materials (medicines, vitamins, thermoplastics)

### Disadvantages:
- Highly expensive
- Pre-milling needed

### Best For:
- Heat-sensitive materials
- Ultrafine grinding where moving parts problematic
- Specialized pharmaceutical applications

---

## Crushing Efficiency

### Definition:
η_c = Energy stored as surface in product / Energy actually absorbed by feed
η_c = e_s(A_SB - A_SA) / W_n

**Where**:
- e_s: Energy per unit area
- A_SB, A_SA: Specific surface areas (product, feed)
- W_n: Energy absorbed per unit mass

### Mechanical Efficiency:
η_M = Energy absorbed by solids / Energy input to machine
η_M = W_n / P/m = e_s(A_SB - A_SA) / P/m

**Where P** = Power input to machine

### Overall:
- During size reduction: Some energy stored as surface (useful), rest dissipated as heat (loss)`,
    keywords: ['crusher', 'grinder', 'jaw', 'gyratory', 'hammer mill', 'ball mill', 'attrition', 'fluid energy', 'comminution']
  },
  {
    id: 9,
    name: 'Steam Jet Ejector',
    category: 'Vacuum Equipment',
    shortDesc: 'Vacuum pump with no moving parts using steam jets to create vacuum',
    content: `## Steam Jet Ejector

### Definition:
Type of vacuum pump with no moving parts, capable of producing very high amounts of vacuum.

### Main Parts:
1. **Motive chest**: Receives high-pressure steam inlet
2. **Steam nozzle**: Converging and diverging section
3. **Suction line**: From column to be evacuated
4. **Diffuser**: Converging and diverging section

---

## Compressible Flow Fundamentals

### Mach Number Dependency:
**Change of velocity with area depends on Mach number (Ma)**:

- **When Ma < 1 (Subsonic)**:
  - Area increases → Velocity decreases
  - Pressure increases

- **When Ma > 1 (Supersonic)**:
  - Area increases → Velocity INCREASES
  - Pressure decreases

- **Transition (Ma = 1)**:
  - Sonic condition (speed of sound)
  - Shift from subsonic to supersonic causes **shock wave**
  - Shock: Sudden increase in pressure and temperature

### Key Equation:
de/ds = (Ma² - 1) dA/A

---

## Working Principle

### Step 1: Nozzle Section
1. **High-pressure steam** introduced through inlet and motive chest
2. Enters **converging section** of nozzle
3. Velocity increases rapidly
4. Reaches Mach number = 1
5. Enters **diverging section**
6. **Velocity increases further** (now supersonic, Ma > 1)
7. **Pressure decreases dramatically** (energy conservation: KE increases, PE decreases)
8. **Temperature also very low** at nozzle exit due to expansion

### Step 2: Suction/Mixing Section
1. Very low pressure at nozzle exit **"sucks in" fluid from suction line**
2. **Supersonic steam stream mixes** with fluid from suction line
3. Forms **supersonic vacuum stream**
4. Contains: Steam + Non-condensible gases + Condensible gases

### Step 3: Diffuser Section
1. Stream enters **converging section** of diffuser
2. **Ma > 1** (still supersonic)
3. **Area decreases** → Velocity decreases towards Ma = 1
4. **Transition from supersonic to subsonic** at Ma = 1
5. Creates **huge pressure and temperature increase** (shock wave)
6. **Diverging section** of diffuser: Area increases
7. **Velocity decreases further** → Pressure increases more
8. At exit: **Very high pressure, hot stream**

### Step 4: Condensation
1. Hot stream from diffuser passed to **condenser**
2. **Condensible components** (steam) condense
3. Non-condensible gases may be removed

---

## Function Analogy

**Steam Nozzle = Vacuum Creator**:
- Creates low pressure region
- Sucks in fluid from suction line (like mechanical vacuum pump)

**Diffuser = Compressor**:
- Pressurizes the fluid stream
- Increases pressure back to useful level

---

## Advantages

1. **No moving parts**
   - Simpler construction
   - Longer operational life

2. **Can handle corrosive fluids**
   - Nozzle and diffuser can be made from:
     - Corrosion-resistant metals
     - Graphite
     - Inert materials

3. **Easy maintenance**
   - Fewer moving parts to maintain
   - Easier operation

4. **Low installation cost**
   - Simpler design than mechanical pumps

5. **Can produce very high vacuum**
   - Adjustable per requirement
   - Multiple stages possible

---

## Disadvantages

1. **High operating cost**
   - Requires large amounts of steam
   - Continuous steam supply needed

2. **Very high energy requirement**
   - Steam generation energy intensive
   - Inefficient compared to mechanical pumps

3. **High solvent loss**
   - Condensible vapors lost if not captured properly

---

## Applications

**Best used when**:
- Fluid is corrosive in nature
- Corrosive fluid may damage mechanical vacuum pumps
- No moving parts desired
- High vacuum needed

---

## Variations

**Motive Fluid Options**:
- **Steam** (most common)
- **Air/Gas**
- **Water**

**Name Changes Based on Motive Fluid**:
- Steam jet ejector (steam)
- Air jet ejector (air)
- Water jet ejector (water)

---

## Physics Behind Supersonic Flow

### Key Concept:
**Transition from supersonic to subsonic causes transonic shock wave**:
- Immediate increase in pressure
- Immediate increase in temperature
- Immediate increase in density
- Loss of momentum in specific direction

### Momentum Transfer:
- **Supersonic steam** imparts huge momentum to column fluid
- Fluid accelerated to high speeds
- When converted to pressure (diffuser), creates pressure surge

### Why This Works:
1. Kinetic energy from high-speed jet very high
2. When decelerated in diffuser, becomes pressure energy
3. Conservation of energy ensures pressure rise
4. Result: Can evacuate column and compress gas without moving parts`,
    keywords: ['ejector', 'vacuum', 'nozzle', 'diffuser', 'supersonic', 'Mach number', 'steam jet', 'shock wave']
  }
];

export const equipmentsByName = {
  'cooling-tower': equipments[0],
  'pumps': equipments[1],
  'distillation-equipments': equipments[2],
  'heat-exchangers': equipments[3],
  'flowmeters': equipments[4],
  'mixing-equipments': equipments[5],
  'valves': equipments[6],
  'size-reduction-equipments': equipments[7],
  'steam-jet-ejector': equipments[8]
};