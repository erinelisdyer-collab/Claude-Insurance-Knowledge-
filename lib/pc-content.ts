import { Topic } from "./lloyds-content";

export const propertyTopics: Topic[] = [
  {
    id: "commercial-property",
    title: "Commercial Property: ISO Forms & Structure",
    badge: "Foundation",
    content: `
      <h3>The ISO Commercial Property Program</h3>
      <p>Most commercial property coverage is written on Insurance Services Office (ISO) forms or forms substantially similar to them. The core ISO commercial property policy consists of: (1) a <strong>Declarations Page</strong>; (2) one or more <strong>Coverage Forms</strong>; (3) a <strong>Causes of Loss Form</strong>; and (4) applicable <strong>Endorsements</strong>. Understanding this structure is essential — E&S forms often deviate from ISO, and knowing the baseline makes it easier to identify differences.</p>

      <h3>Building & Personal Property Coverage Form (CP 00 10)</h3>
      <p>The foundational property coverage form. It covers: <strong>Building</strong> (the structure, permanently installed fixtures, equipment used to service the building), <strong>Business Personal Property (BPP)</strong> (furniture, equipment, inventory, tenant improvements owned by the insured), and <strong>Personal Property of Others</strong> (non-owned property in the insured's care, custody, or control). Each coverage is scheduled with its own limit.</p>

      <h3>Valuation: Replacement Cost vs. Actual Cash Value</h3>
      <p><strong>Replacement Cost (RC)</strong> pays the cost to repair or replace with new property of like kind and quality, without deduction for depreciation. This is the preferred standard. <strong>Actual Cash Value (ACV)</strong> deducts depreciation from replacement cost — the older the property, the less the insurer pays. <strong>Functional Replacement Cost</strong> is a hybrid, paying to replace with property that performs the same function (not necessarily identical), used for older/historic structures. ACV is common in E&S placements for older or lower-quality structures.</p>

      <h3>Coinsurance</h3>
      <p><strong>Coinsurance</strong> is one of the most important — and most misunderstood — commercial property concepts. The coinsurance clause (typically 80%, 90%, or 100%) requires the insured to carry insurance equal to the specified percentage of the property's value. If the insured is underinsured, they become a co-insurer for the deficit. <strong>Formula:</strong> (Insurance Carried ÷ Insurance Required) × Loss = Claim Payment. At 80% coinsurance on a $1M building, you must carry $800K. If you carry $600K and have a $200K loss: ($600K ÷ $800K) × $200K = $150K paid. The $50K coinsurance penalty hurts. E&S underwriters pay close attention to accurate valuations.</p>

      <h3>Agreed Value Endorsement</h3>
      <p>The <strong>Agreed Value</strong> endorsement suspends the coinsurance clause — the insurer agrees to pay up to the stated limit without applying a coinsurance penalty. This requires a signed statement of values. For large, complex risks, agreed value is strongly preferred by sophisticated buyers.</p>
    `,
  },
  {
    id: "causes-of-loss",
    title: "Causes of Loss Forms: Basic, Broad & Special",
    badge: "Coverage Scope",
    content: `
      <h3>Basic Form (CP 10 10)</h3>
      <p>The most restrictive — covers only <strong>named perils</strong> specifically listed: fire, lightning, explosion, windstorm/hail, smoke, aircraft or vehicles, riot/civil commotion, vandalism, sprinkler leakage, sinkhole collapse, and volcanic action. If the peril isn't listed, there's no coverage. Basic form is rarely seen in commercial placements — primarily used for the most hazardous risks or budget-constrained placements where a low premium is required.</p>

      <h3>Broad Form (CP 10 20)</h3>
      <p>Adds to Basic Form: <strong>falling objects</strong>, <strong>weight of snow, ice, sleet</strong>, <strong>water damage</strong> (leakage from plumbing, HVAC, appliances — not flood). Still a named perils form — must be specifically listed. Broad form is more common than Basic but still represents a narrower coverage scope than most commercial buyers want.</p>

      <h3>Special Form (CP 10 30) — The Standard</h3>
      <p>Special Form (historically called "all risk") is the dominant form in commercial property. It covers <strong>all risks of direct physical loss</strong> unless specifically excluded. This inversion is critical: the insurer bears the burden of proving an exclusion applies; the insured need only show a loss occurred. Major exclusions include: <strong>flood, earthquake, ordinance/law, earth movement, government action, nuclear hazard, utility failure, war, wear/tear/deterioration, mechanical breakdown</strong>. Most exclusions can be bought back via endorsement.</p>

      <h3>The "Physical Loss or Damage" Requirement</h3>
      <p>Under Special Form, coverage triggers require <strong>direct physical loss or damage</strong> to the insured property. This became critical during COVID-19 — courts broadly held that loss of use (government orders closing businesses) did not constitute "direct physical loss" in the absence of actual property damage. The COVID litigation was the most significant property coverage dispute in decades and has informed endorsement drafting in subsequent years.</p>

      <h3>Common Special Form Exclusions in E&S Context</h3>
      <p>E&S property policies frequently contain more restrictive exclusions than standard ISO: <strong>Mold exclusions</strong> (fully excluding mold or mold testing/remediation costs), <strong>microorganism exclusions</strong>, <strong>pollution exclusions</strong> (broader than ISO), <strong>fungi/bacteria exclusions</strong>, and often <strong>sub-limits for water damage</strong> (rather than full coverage). Understanding what's excluded — and pricing accordingly — is core to E&S property underwriting.</p>
    `,
  },
  {
    id: "business-income",
    title: "Business Income & Extra Expense",
    badge: "Time Element",
    content: `
      <h3>Business Income Coverage (BI)</h3>
      <p>Business Income coverage (also called Business Interruption) replaces <strong>net income</strong> lost and pays <strong>continuing normal operating expenses</strong> during a period of restoration after a covered property loss. The trigger is a <strong>direct physical loss or damage</strong> to covered property at the insured premises. BI continues for the "period of restoration" — the time required to repair/rebuild the damaged property with reasonable speed using like materials.</p>

      <h3>Period of Restoration</h3>
      <p>The <strong>period of restoration</strong> begins when the physical loss occurs and ends when the property is repaired/rebuilt (or the business resumes), whichever is earlier. For complex losses (large buildings, specialized equipment), this can be 12–24+ months. Selecting the right BI limit requires projecting the maximum financial exposure over the maximum likely restoration period — often called the <strong>maximum probable loss (MPL)</strong> for BI.</p>

      <h3>Extra Expense</h3>
      <p><strong>Extra Expense (EE)</strong> covers costs incurred to continue operations or minimize business income loss — renting temporary space, expediting equipment repairs, paying overtime to employees. EE is paid only to the extent it reduces BI loss. For businesses with high dependency on specific equipment (e.g., a manufacturer with a unique press), extra expense to expedite replacement can be enormous.</p>

      <h3>Extended Business Income</h3>
      <p><strong>Extended Business Income (EBI)</strong> (ISO term) covers the period <em>after</em> the property is repaired during which the business is restoring customers and revenue back to pre-loss levels. This recognizes that a business that reopens tomorrow won't instantly return to pre-loss revenue — customers may have found alternatives. EBI typically lasts 30–60 days (or longer by endorsement).</p>

      <h3>Dependent Properties / Contingent BI</h3>
      <p><strong>Dependent Properties</strong> coverage (also called Contingent Business Interruption) covers BI loss when a supplier or customer suffers a covered loss that impacts the insured's operations. Example: a manufacturer whose sole steel supplier suffers a fire. This coverage is separate from and must be endorsed onto the policy. Limits are often sub-limited and coverage can be restricted to named locations.</p>

      <h3>Calculating BI Limits</h3>
      <p>BI limits are calculated based on: <strong>(Revenue - Variable Expenses) + Continuing Fixed Expenses</strong> × the estimated restoration period in months/12. A common mistake is setting BI limits based on last year's income without accounting for growth trends or extended restoration periods for complex properties. Underinsured BI is a major cause of post-loss disputes.</p>
    `,
  },
  {
    id: "builders-risk",
    title: "Builder's Risk & Inland Marine",
    badge: "Specialty Property",
    content: `
      <h3>Builder's Risk</h3>
      <p><strong>Builder's Risk</strong> (also called Course of Construction) insures a structure under construction against physical loss or damage. It is a temporary policy — coverage begins when construction starts and ends when the project is complete, sold, or occupied. Builder's risk covers: the structure itself, materials and supplies on site, materials in transit (usually within a mile or set limit), and sometimes the contractor's equipment and tools.</p>

      <h3>Builder's Risk: Coverage Triggers & Common Exclusions</h3>
      <p>Builder's risk is typically written on a <strong>completed value</strong> basis (the full completed value of the structure) or a <strong>reporting form</strong> basis (monthly reports of values as construction progresses). Common exclusions unique to builder's risk: <strong>faulty workmanship</strong> (the cost to fix the bad work itself — but resultant damage from faulty work is usually covered), <strong>design error</strong>, <strong>mechanical breakdown</strong>, and <strong>earth movement</strong> (unless endorsed). Soft costs (architect fees, permitting, loan interest during delay) require specific endorsement.</p>

      <h3>Inland Marine Overview</h3>
      <p><strong>Inland Marine</strong> insurance covers property in transit, property held by a bailee, and certain types of movable or specialized property. It evolved from ocean marine (covering goods once they came ashore). The term is broad and somewhat misleading — it has nothing to do with water. Key classes include: contractor's equipment, commercial articles (camera equipment, fine art, musical instruments), accounts receivable, valuable papers, EDP (electronic data processing) equipment, and installation floaters.</p>

      <h3>Contractor's Equipment Floater</h3>
      <p>A <strong>Contractor's Equipment Floater</strong> covers mobile equipment owned by the insured contractor — backhoes, cranes, lifts, compressors, etc. Coverage follows the equipment anywhere in the US (and sometimes Canada). Key coverage issues: blanket vs. scheduled equipment, rental equipment, leased equipment, operator error, and equipment in transit. Many contractor's equipment floaters are written on an ACV basis in the E&S market.</p>

      <h3>Installation Floater</h3>
      <p>An <strong>Installation Floater</strong> covers property being installed by a contractor — HVAC units, electrical equipment, plumbing systems — from the time it leaves the supplier until it's installed and accepted by the owner. This bridges the gap between the supplier's policy (ends at delivery) and the property owner's policy (begins at acceptance). Installation floaters are common for mechanical/electrical contractors.</p>
    `,
  },
  {
    id: "flood-earthquake",
    title: "Flood, Earthquake & Specialty Perils",
    badge: "CAT Coverage",
    content: `
      <h3>Flood Exclusion in Standard Policies</h3>
      <p>Flood is <strong>excluded</strong> from standard commercial property forms (Basic, Broad, and Special). This is one of the most significant coverage gaps. "Flood" is broadly defined to include: overflow of bodies of water, storm surge, mudflow, and water that backs up from drains/sewers due to flooding. Surface water runoff from rain is often debated — courts have generally treated it as flood unless the policy clearly covers it.</p>

      <h3>NFIP (National Flood Insurance Program)</h3>
      <p>The <strong>NFIP</strong>, administered by FEMA, provides flood insurance for properties in participating communities (those that adopt FEMA's floodplain management standards). Commercial NFIP coverage is limited: $500K building, $500K contents. NFIP does not cover business income. Rates are community-based, not risk-specific. The NFIP is being reformed under "Risk Rating 2.0," which applies more actuarially sound individual risk pricing.</p>

      <h3>Private Flood Market</h3>
      <p>The private flood market has grown significantly, providing higher limits, broader coverage, and competitive pricing for lower-risk properties. For CRC's commercial clients with significant flood exposure, the private market (through E&S carriers and Lloyd's) often provides superior coverage to NFIP: higher limits, BI coverage, broader definition of flood, and lower deductibles for well-rated risks.</p>

      <h3>Earthquake Coverage</h3>
      <p>Like flood, <strong>earthquake is excluded</strong> from standard property forms and must be purchased separately. Earthquake coverage is a distinct product with: <strong>per occurrence deductibles</strong> (often 2–15% of insured values, applied per building or schedule), <strong>waiting periods</strong> for aftershocks, and <strong>sublimits</strong> for specific coverages (BI, extra expense, contents). California, Pacific Northwest, New Madrid Seismic Zone (Central US), and Charleston SC are the primary earthquake exposure areas in the US.</p>

      <h3>Wind/Hail Deductibles</h3>
      <p>In coastal and storm-prone regions, insurers apply <strong>named storm deductibles</strong> or <strong>wind/hail deductibles</strong> — expressed as a percentage (1–5% or more) of the insured building value, rather than a flat dollar amount. A $5M building with a 5% wind deductible has a $250K deductible for wind losses. These percentage deductibles can create severe underinsurance situations if clients don't understand the exposure and don't have adequate retained resources.</p>
    `,
  },
];

export const casualtyTopics: Topic[] = [
  {
    id: "cgl",
    title: "Commercial General Liability (CGL)",
    badge: "Foundation",
    content: `
      <h3>The ISO CGL Form (CG 00 01)</h3>
      <p>The ISO Commercial General Liability policy is the foundation of commercial liability insurance. It consists of three coverages on a single form: <strong>Coverage A</strong> (Bodily Injury and Property Damage Liability), <strong>Coverage B</strong> (Personal and Advertising Injury Liability), and <strong>Coverage C</strong> (Medical Payments). Understanding the structure of the ISO CGL is prerequisite knowledge for every wholesale insurance professional.</p>

      <h3>Coverage A: Bodily Injury & Property Damage</h3>
      <p>Coverage A pays for <strong>bodily injury (BI)</strong> or <strong>property damage (PD)</strong> for which the insured is legally liable, caused by an <strong>occurrence</strong> (defined as an accident, including continuous or repeated exposure to substantially the same harmful conditions). Key exclusions: expected/intended injury, contractual liability (with exceptions), liquor liability (with exceptions), employer's liability, pollution (with exceptions), aircraft/auto/watercraft, professional services, and damage to the insured's own work/product.</p>

      <h3>Occurrence vs. Claims-Made</h3>
      <p>This is one of the most critical distinctions in casualty coverage. An <strong>occurrence policy</strong> covers injury/damage that occurs during the policy period, regardless of when the claim is made. <strong>Claims-made</strong> covers claims first made during the policy period (provided the act/injury occurred after the <strong>retroactive date</strong>). Claims-made is common in professional liability, D&O, and EPL. Occurrence is standard for CGL. For long-tail classes (construction defect, products), occurrence CGL is strongly preferred — the coverage doesn't disappear when the policy cancels.</p>

      <h3>Coverage B: Personal & Advertising Injury</h3>
      <p>Coverage B protects against intentional torts defined in the policy: false arrest, malicious prosecution, wrongful eviction, slander/libel, copyright infringement in advertising, and violation of privacy rights. Not an "occurrence" trigger — it covers offenses committed during the policy period. Important for media companies, landlords, and businesses with advertising operations.</p>

      <h3>Products-Completed Operations (PCO)</h3>
      <p><strong>Products</strong> coverage applies to BI/PD arising from the insured's products after they've left the insured's hands. <strong>Completed Operations</strong> applies to BI/PD arising from work the insured has completed. Both trigger after the insured's operational involvement ends — this is a long-tail exposure (an injury from a defective product can occur years after manufacture). PCO is aggregate limited separately from the general aggregate.</p>

      <h3>Additional Insureds & Contractual Liability</h3>
      <p>The CGL <strong>contractual liability exclusion</strong> is significantly narrowed by exceptions for <strong>insured contracts</strong> — including leases, railroad sidetrack agreements, and most construction contracts where the insured assumes the tort liability of another. The ISO CGL does not automatically cover additional insureds for completed operations — this requires a specific endorsement. Managing additional insured requirements in construction contracts is a significant area of wholesale broker expertise.</p>
    `,
  },
  {
    id: "umbrella-excess",
    title: "Umbrella & Excess Liability",
    badge: "Limits Strategy",
    content: `
      <h3>Umbrella vs. Excess: The Critical Difference</h3>
      <p>These terms are often used interchangeably, but they are legally distinct. A true <strong>umbrella policy</strong> provides: (1) excess limits above underlying scheduled policies; and (2) <strong>drop-down coverage</strong> — it fills gaps in underlying coverage and drops down to be a primary insurer (subject to a self-insured retention) for covered losses not covered by underlying. An <strong>excess liability policy</strong> only provides higher limits above the underlying — it does not drop down for coverage gaps. Most E&S "umbrella" policies are actually excess, not true umbrellas.</p>

      <h3>Follow-Form vs. Manuscript Excess</h3>
      <p>A <strong>follow-form excess</strong> policy adopts all the terms, conditions, and exclusions of the underlying primary policy. A <strong>manuscript (stand-alone) excess</strong> policy has its own terms and conditions. The distinction matters enormously at claim time: a manuscript excess with different exclusions may not respond when the primary does (or vice versa). For large commercial accounts, aligning the excess tower terms with primary is a critical coverage review task.</p>

      <h3>Underlying Scheduled Policies</h3>
      <p>The umbrella/excess policy requires maintaining specific underlying limits. Typical underlying schedule: CGL ($1M/$2M), Commercial Auto ($1M), Employers Liability ($1M/$1M/$1M), sometimes other lines. If the insured allows an underlying policy to lapse or reduces limits below the required minimum, the umbrella insurer can treat the required limits as a self-insured retention — effectively eliminating umbrella coverage for that gap.</p>

      <h3>E&S Excess Market</h3>
      <p>For high-limit excess placements, the E&S market is critical. Lloyd's syndicates are major excess liability writers for large commercial risks. Key E&S excess markets include Markel, James River, Scottsdale, Berkley, and numerous Lloyd's syndicates. For "difficult" casualty classes (cannabis, firearms, nuclear, habitational), the excess market may only be available through Lloyd's or specialized E&S carriers.</p>

      <h3>Nuclear, EIFS, and Absolute Exclusions</h3>
      <p>Many commercial excess policies contain <strong>absolute exclusions</strong> that differ from the underlying. Common E&S excess exclusions that don't appear in standard ISO: absolute pollution exclusion (vs. the ISO qualified exclusion), EIFS (Exterior Insulation and Finish Systems / "synthetic stucco"), lead paint, asbestos, mold, and silica. Understanding these absolute exclusions — and ensuring clients know about them — is essential.</p>
    `,
  },
  {
    id: "professional",
    title: "Professional Liability (E&O) & D&O",
    badge: "Specialty Casualty",
    content: `
      <h3>Professional Liability / E&O Overview</h3>
      <p><strong>Professional Liability</strong> (also called Errors & Omissions, or E&O) covers professionals for claims arising from errors, omissions, or negligent acts in rendering professional services. Standard CGL explicitly excludes professional services — this coverage is a separate policy or endorsement. Every profession has professional liability exposure: lawyers, doctors, engineers, architects, accountants, insurance agents, technology professionals, consultants.</p>

      <h3>Claims-Made Form</h3>
      <p>Professional liability is almost universally written on a <strong>claims-made</strong> basis. This requires active coverage at the time the claim is made, not at the time of the alleged error. The <strong>retroactive date</strong> is critical — it defines how far back in time acts can be covered. "Full prior acts" coverage (no retroactive date) is the broadest. When switching professional liability carriers, managing the retroactive date and extended reporting periods (ERPs) is critical.</p>

      <h3>Extended Reporting Period (ERP / Tail)</h3>
      <p>An <strong>ERP</strong> (also called "tail" coverage) extends the period during which claims can be made after the policy is cancelled or not renewed, for acts that occurred during the original policy period. A <strong>Basic ERP</strong> (60 days, free) is included in most ISO professional liability forms. A <strong>Supplemental ERP</strong> (1–5 years, purchased) is available for additional premium. The <strong>Unlimited ERP</strong> is available for departing practitioners or firms closing. This is especially important in healthcare, law, and architecture/engineering.</p>

      <h3>Directors & Officers (D&O)</h3>
      <p><strong>D&O insurance</strong> protects corporate directors and officers against claims alleging wrongful acts in their capacity as directors/officers. Standard D&O includes three insuring agreements: <strong>Side A</strong> (individual D&O coverage when the company can't indemnify — e.g., bankruptcy), <strong>Side B</strong> (company reimbursement when it does indemnify directors), <strong>Side C</strong> (entity coverage for securities claims — public companies). For private companies, D&O is increasingly important as employment practices claims, derivative suits, and M&A litigation rise.</p>

      <h3>D&O for Private & Non-Profit Companies</h3>
      <p>Private company D&O is a growing E&S market. Key exposures: investor disputes, minority shareholder claims, employment claims (often combined with EPLI), and regulatory investigations. Non-profit D&O faces similar exposures with the added complexity of volunteer directors. D&O deductibles in the E&S market tend to be higher than admitted equivalents, and coverage exclusions (prior litigation, known circumstances) are more common.</p>
    `,
  },
  {
    id: "cyber",
    title: "Cyber Liability & Data Breach",
    badge: "Emerging Line",
    content: `
      <h3>The Cyber Coverage Landscape</h3>
      <p>Cyber liability has evolved from a niche product to an essential commercial coverage in under two decades. A modern cyber policy covers two broad categories: <strong>First-Party Losses</strong> (the insured's own costs — data restoration, business interruption, extortion/ransom, notification costs, credit monitoring, forensic investigation, PR expenses) and <strong>Third-Party Liability</strong> (claims from affected parties — customers, employees, regulators).</p>

      <h3>First-Party Cyber Coverages</h3>
      <p><strong>Data Restoration</strong> — cost to restore/replace corrupted or deleted data. <strong>Business Interruption / System Failure BI</strong> — lost income and extra expenses during a network outage. <strong>Cyber Extortion</strong> — ransom payments and response costs for ransomware. <strong>Social Engineering / Funds Transfer Fraud</strong> — losses from BEC (Business Email Compromise) scams (often sublimited or excluded). <strong>Media Liability</strong> — defamation, copyright infringement in digital media. <strong>Breach Response Costs</strong> — mandatory notification, credit monitoring, call center.</p>

      <h3>Third-Party Cyber Coverages</h3>
      <p><strong>Network Security Liability</strong> — claims arising from a failure of the insured's network security (transmission of malware, unauthorized access to third-party systems). <strong>Privacy Liability</strong> — claims for failure to protect personal information (PII, PHI). <strong>Regulatory Defense & Fines</strong> — defense costs and civil fines from state AG investigations, HIPAA, GDPR. <strong>PCI Fines & Assessments</strong> — often sublimited; assessments from card brands after a card data breach.</p>

      <h3>Ransomware & Market Hardening</h3>
      <p>The ransomware epidemic (2019–present) caused dramatic cyber market hardening: rates increased 50–300% in 2021–2022, capacity pulled back, and underwriting became significantly more rigorous. Cyber underwriters now require: MFA (Multi-Factor Authentication), EDR (Endpoint Detection & Response), offline backups, patch management protocols, and incident response plans. Risks that can't demonstrate basic cyber hygiene face severe coverage restrictions or declinations even in the E&S market.</p>

      <h3>Systemic Cyber Risk</h3>
      <p>Lloyd's has published guidance on <strong>systemic cyber risk</strong> — the concern that a single cyber event could cause simultaneous losses across many policies (as occurred with NotPetya in 2017). Lloyd's mandates that all standalone cyber policies contain exclusions for: (1) nation-state cyber warfare; (2) attacks on critical infrastructure. These exclusions are significant for US government contractors and critical infrastructure operators. Understanding systemic cyber exclusions is essential for CRC's wholesale teams.</p>
    `,
  },
  {
    id: "products",
    title: "Products Liability & Specialty Casualty",
    badge: "High Severity",
    content: `
      <h3>Products Liability</h3>
      <p><strong>Products liability</strong> covers the manufacturer, distributor, or seller of a product for claims arising from bodily injury or property damage caused by a defective product. Three theories of recovery: <strong>manufacturing defect</strong> (the specific product was made incorrectly), <strong>design defect</strong> (the entire product line was defectively designed), and <strong>failure to warn</strong> (inadequate warnings or instructions). Products liability is covered under the CGL's Products-Completed Operations aggregate.</p>

      <h3>Products Liability in the E&S Market</h3>
      <p>Certain product classes are extremely difficult in the admitted market and require E&S solutions: <strong>firearms and ammunition</strong> (few admitted carriers; Lloyd's and specialized E&S carriers are primary market), <strong>chemicals and industrial products</strong> (pollution and products exposure), <strong>food and beverage</strong> (contamination and recall exposure), <strong>medical devices</strong> (product and professional liability overlap), <strong>cannabis products</strong> (THC-infused edibles, vape products). For these classes, CRC's access to Lloyd's is a significant competitive advantage.</p>

      <h3>Product Recall Insurance</h3>
      <p><strong>Product Recall</strong> coverage is separate from general products liability. It covers the first-party costs of a recall: withdrawal costs (pulling product off shelves), destruction costs, replacement costs, business income loss, and reputation rehabilitation expenses. Standard CGL does not cover recall costs. Product recall is particularly important for food/beverage, consumer products, and pharmaceutical manufacturers. This is a specialty E&S and Lloyd's class.</p>

      <h3>Liquor Liability</h3>
      <p><strong>Liquor liability</strong> (dram shop liability) covers a liquor licensee (bar, restaurant, brewery) for claims arising from serving alcohol to an obviously intoxicated person who then causes injury. The CGL excludes liquor liability for businesses "in the business of" manufacturing, distributing, or selling alcohol — those businesses need a separate liquor liability policy. E&S liquor liability markets (Lloyd's, Markel, James River) handle entertainment venues, distilleries, and high-risk liquor establishments.</p>

      <h3>Environmental Liability</h3>
      <p>The standard CGL <strong>absolute pollution exclusion</strong> (ISO CG 00 01 post-1986) excludes virtually all pollution-related claims. Environmental liability requires separate coverage: <strong>Contractor's Pollution Liability (CPL)</strong> for contractors working with pollutants, <strong>Site Pollution Liability</strong> for property owners, and <strong>Professional Liability + Pollution</strong> for environmental consultants. Lloyd's is a major market for environmental — notably Beazley, Liberty Specialty, and Hiscox syndicates.</p>
    `,
  },
];

export const pcGlossary = [
  { term: "ACV (Actual Cash Value)", definition: "Replacement cost minus depreciation. Less favorable than replacement cost for older property." },
  { term: "Additional Insured", definition: "A party added to the policy to have coverage, typically for their vicarious liability. Requires endorsement." },
  { term: "Agreed Value", definition: "Endorsement suspending coinsurance; insurer pays up to stated limit without penalty." },
  { term: "All Risk / Open Perils", definition: "Coverage for all causes of loss not specifically excluded (vs. named perils)." },
  { term: "Business Income (BI)", definition: "Coverage for net income lost and continuing expenses after a covered property loss." },
  { term: "CGL (Commercial General Liability)", definition: "The standard commercial liability policy covering bodily injury, property damage, and personal/advertising injury." },
  { term: "Claims-Made", definition: "Policy trigger based on when the claim is made, not when the act occurred. Common in professional lines." },
  { term: "Coinsurance", definition: "Requirement to carry insurance equal to a set percentage of property value; failure results in a penalty at claim." },
  { term: "Completed Operations", definition: "Liability arising from the insured's completed work after they leave the job site." },
  { term: "ERP (Extended Reporting Period)", definition: "Extends the time to report claims under a claims-made policy after it cancels; also called 'tail.'" },
  { term: "Inland Marine", definition: "Property insurance for movable, specialized, or transit property; evolved from ocean marine." },
  { term: "Named Perils", definition: "Coverage limited to specifically listed causes of loss (vs. all risk)." },
  { term: "Occurrence", definition: "An accident, including continuous or repeated exposure to conditions; the trigger for most CGL policies." },
  { term: "PCO (Products-Completed Operations)", definition: "CGL coverage for liability arising from products sold or work completed by the insured." },
  { term: "Period of Restoration", definition: "The time to repair/rebuild property; defines how long business income coverage pays." },
  { term: "RC (Replacement Cost)", definition: "Cost to replace or repair with new property of like kind and quality, without depreciation deduction." },
  { term: "Retroactive Date", definition: "On claims-made policies, the earliest date from which acts/events are covered." },
  { term: "Special Form", definition: "Open-perils property form covering all risks of direct physical loss unless excluded; formerly 'All Risk.'" },
  { term: "Umbrella Policy", definition: "Provides excess limits AND drops down to fill coverage gaps in underlying policies (vs. excess, which only adds limits)." },
];
