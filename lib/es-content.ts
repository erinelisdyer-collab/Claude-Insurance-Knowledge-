import { Topic } from "./lloyds-content";

export const esTopics: Topic[] = [
  {
    id: "what-is-es",
    title: "What Is the E&S Market?",
    badge: "Foundation",
    content: `
      <h3>The Purpose of E&S Insurance</h3>
      <p>The Excess & Surplus (E&S) lines market exists to insure risks that the <strong>admitted market</strong> cannot or will not insure at any price. This includes unusual risks, hazardous occupancies, unique coverage needs, and risks in geographies where standard carriers have pulled back. E&S insurers are <strong>non-admitted</strong> — they are not licensed in the state where the risk is located but are approved as eligible surplus lines insurers.</p>

      <h3>Admitted vs. Non-Admitted: The Core Distinction</h3>
      <p>An <strong>admitted carrier</strong> is licensed in the state, must file rates and forms with regulators, and is backed by the state guaranty fund. A <strong>non-admitted (surplus lines) carrier</strong> is not licensed in the state, has rate and form filing flexibility, and is not covered by the guaranty fund. The tradeoff: flexibility in exchange for regulatory protection.</p>

      <h3>Why E&S Exists</h3>
      <p>The admitted market is heavily regulated — carriers must file forms and rates with each state, and regulators may take months or years to approve new products. This rigidity means admitted carriers cannot quickly respond to new or unusual risks. The E&S market, free from these constraints, can innovate rapidly. <strong>Cyber liability</strong> and <strong>drone insurance</strong> are examples of risks that started entirely in the E&S market before admitted carriers followed.</p>

      <h3>The E&S Market Today</h3>
      <p>The US E&S market has grown significantly, now representing approximately <strong>$100+ billion</strong> in direct written premium — roughly 9% of total US P&C premium. Growth has accelerated in recent hard market years as admitted carriers restricted appetite on property cat, habitational, and certain casualty lines. Lloyd's of London, Lexington Insurance, James River, Scottsdale Insurance, and Markel are among the largest E&S writers.</p>

      <h3>The Wholesale Broker's Role</h3>
      <p>In most states, only a <strong>licensed surplus lines broker</strong> (or retail agent working through one) can place business with non-admitted carriers. CRC Group serves as the wholesale intermediary, connecting retail agents and brokers with E&S markets. CRC's value is market access, coverage expertise, and compliance management.</p>
    `,
  },
  {
    id: "regulation",
    title: "Surplus Lines Regulation & Compliance",
    badge: "Compliance Critical",
    content: `
      <h3>State-Level Regulation</h3>
      <p>E&S insurance is regulated at the state level. Each state has its own surplus lines law governing who can place surplus lines, what documentation is required, and what taxes apply. While the <strong>NRRA (Non-admitted and Reinsurance Reform Act of 2010)</strong> streamlined multi-state compliance, each state retains authority over its own residents.</p>

      <h3>The NRRA: Streamlining Multi-State Placement</h3>
      <p>Before the NRRA, placing a multi-state surplus lines policy required complying with the laws of every state where risk was located. The NRRA established the <strong>"home state" rule</strong>: only the policyholder's home state has regulatory authority over the placement. The home state is where the insured maintains its principal place of business (for commercial risks).</p>

      <h3>Surplus Lines Tax</h3>
      <p>States impose a <strong>surplus lines tax</strong> on non-admitted placements, typically 2–5% of premium (rates vary by state). Under the NRRA, only the insured's home state can collect the surplus lines tax for multi-state commercial risks. The tax is collected by the surplus lines broker and remitted to the state. Failure to pay surplus lines tax is a serious compliance issue.</p>

      <h3>Diligent Effort / Declination Requirement</h3>
      <p>Before placing in the E&S market, most states require a <strong>diligent effort</strong> to place with admitted carriers. The traditional standard is <strong>three declinations</strong> from admitted carriers, though requirements vary by state. Some states allow a "constructive declination" — where admitted carriers simply don't write the class of business. The diligent effort requirement must be documented.</p>

      <h3>Exempt Commercial Purchasers</h3>
      <p>The NRRA created an <strong>Exempt Commercial Purchaser (ECP)</strong> designation for sophisticated buyers who can access the non-admitted market without a diligent effort requirement. ECP qualification requires: (a) annual premiums exceeding $100,000; (b) net worth > $20M or annual revenues > $50M (among other criteria); and (c) employing or retaining a risk manager. ECPs effectively bypass the declination requirement.</p>

      <h3>Insurer Eligibility: The "White List"</h3>
      <p>Not every non-admitted carrier can write surplus lines. Each state maintains a list of <strong>eligible surplus lines insurers</strong>. The <strong>NAIC Quarterly Listing of Alien Insurers</strong> (often called the "White List") is the definitive list for alien (non-US) surplus lines insurers. Lloyd's of London is always on this list. Domestic non-admitted carriers appear on individual state eligibility lists (e.g., California's List of Approved Surplus Line Insurers).</p>
    `,
  },
  {
    id: "stamping",
    title: "Stamping Offices & State Filing",
    badge: "Operations",
    content: `
      <h3>What Is a Stamping Office?</h3>
      <p>A <strong>surplus lines stamping office</strong> is a state-authorized organization that receives copies of surplus lines policies and endorsements, collects surplus lines taxes, and maintains records. Not all states have stamping offices — some states require direct filing with the state insurance department. Stamping offices that exist generally charge a small stamping fee (often 0.1–0.25% of premium) in addition to the surplus lines tax.</p>

      <h3>Major Stamping Offices</h3>
      <p><strong>SLIP (Surplus Lines Information Portal)</strong> — serves multiple states. <strong>SLTX (Surplus Lines Stamping Office of Texas)</strong> — Texas only, one of the largest. <strong>LASLI (Louisiana Surplus Lines Information)</strong> — Louisiana. <strong>FILINGS.IO</strong> — technology platform used by several states. California does not have a traditional stamping office; surplus lines filers report directly to CDI.</p>

      <h3>Filing Deadlines</h3>
      <p>States impose filing deadlines — typically 30, 45, or 60 days from the date of the surplus lines transaction. Missing deadlines can result in late fees and regulatory action. The surplus lines broker (CRC) is responsible for timely filing. Good surplus lines compliance programs track policy effective dates and ensure timely filing to all required jurisdictions.</p>

      <h3>Required Documents</h3>
      <p>Standard requirements include: (1) the policy declaration page; (2) the surplus lines disclosure/notice to insured; (3) evidence of diligent effort (or ECP qualification); (4) the completed surplus lines tax return; and (5) any applicable endorsements. Some states also require a copy of the full policy form. Documentation must be maintained for the statutory period (typically 5–7 years).</p>

      <h3>Surplus Lines Disclosure</h3>
      <p>In virtually every state, a <strong>surplus lines disclosure</strong> must be provided to the insured before or at policy issuance. The disclosure advises the insured that the carrier is non-admitted, not backed by the state guaranty fund, and that they have accepted the risk of the insurer's financial failure. The language of the disclosure varies by state — the surplus lines broker is responsible for using the correct language.</p>
    `,
  },
  {
    id: "carriers",
    title: "Key E&S Carriers & Their Niches",
    badge: "Market Knowledge",
    content: `
      <h3>Lexington Insurance (AIG)</h3>
      <p>Lexington is one of the largest non-admitted property writers in the US. Historically dominant in property catastrophe, it writes across property, casualty, and specialty lines. Lexington is licensed as an eligible surplus lines insurer across all US states. Parent: AIG.</p>

      <h3>James River Insurance (Great American)</h3>
      <p>James River is a major casualty-focused E&S writer known for excess and surplus casualty, professional liability, and specialty lines. Strong appetite for difficult casualty risks. Parent: Great American Insurance Group (Berkshire Hathaway entity).</p>

      <h3>Scottsdale Insurance (Nationwide)</h3>
      <p>Scottsdale is a large diversified E&S writer with broad commercial property and casualty appetite. Known for habitational, commercial auto, and small-to-mid market specialty. Parent: Nationwide Insurance.</p>

      <h3>Markel Insurance</h3>
      <p>Markel operates in both admitted and non-admitted markets. Known for specialty casualty, professional liability, and program business. Markel's non-admitted companies write a range of specialty risks. Also a major Lloyd's managing agent (Markel Syndicate).</p>

      <h3>Lloyd's Syndicates</h3>
      <p>As a group, Lloyd's syndicates represent the largest source of specialty non-admitted capacity in the US. Individual syndicates (Beazley, Hiscox, Brit, Talbot, QBE, etc.) provide capacity across property, casualty, marine, aviation, cyber, professional, and specialty lines. For CRC, Lloyd's is accessed through binding authorities, lineslips, and open market placements.</p>

      <h3>Berkley E&S, RLI, Kingsway, and Others</h3>
      <p>The E&S market includes dozens of specialty carriers: <strong>W.R. Berkley</strong> companies (multiple non-admitted subsidiaries), <strong>RLI</strong> (specialty liability), <strong>Nautilus Insurance</strong> (commercial package for smaller risks), <strong>Houston Casualty Company (HCC/Tokio Marine)</strong>, and many more. CRC's value is knowing which carrier has appetite for each type of risk.</p>
    `,
  },
  {
    id: "when-es",
    title: "When to Seek E&S: Risk Triggers",
    badge: "Practical",
    content: `
      <h3>Primary Triggers for E&S Placement</h3>
      <p>Business comes to the E&S market for several reasons: (1) <strong>Declinations</strong> — admitted carriers won't write the risk; (2) <strong>Rate inadequacy</strong> — admitted rates are regulated below what the market would bear; (3) <strong>Form inadequacy</strong> — standard forms don't cover the specific need; (4) <strong>Capacity</strong> — admitted market doesn't have enough limit; (5) <strong>Speed</strong> — the insured needs coverage immediately and admitted carriers are too slow.</p>

      <h3>Classes That Frequently Need E&S</h3>
      <p><strong>Property:</strong> Coastal and Gulf of Mexico exposures, wood-frame apartments (habitational), properties with prior losses, older vacant buildings, CAT zones (wildfire, flood, hail corridors), and unique structures. <strong>Casualty:</strong> Contractors with wrap-up exposure, high-hazard manufacturing, cannabis, firearms, liquor liability, amusement parks, residential care facilities. <strong>Professional:</strong> New classes of business (fintech, crypto), high-limits or unique professional exposures.</p>

      <h3>Hard Market Dynamics</h3>
      <p>In a <strong>hard market</strong> (like the current environment for property), admitted carriers pull back appetite, increase rates, and add exclusions. This pushes more business into the E&S market — exactly where CRC thrives. During the 2020–2024 property hard market, admitted carriers stopped writing or severely restricted: Gulf Coast wind, California wildfire, hail corridor states (CO, MN, TX), and coastal habitational.</p>

      <h3>Coverage Enhancements via E&S</h3>
      <p>E&S placement isn't always about declinations — sometimes a retail agent seeks E&S specifically because the coverage is <strong>better</strong>. E&S carriers can offer: broader property forms (manuscript), higher limits than admitted markets, bespoke endorsements, first-dollar defense for liability, and faster claims service. Sophisticated retailers know to ask CRC for E&S alternatives even when admitted options exist.</p>

      <h3>Transitioning Back to Admitted</h3>
      <p>After a risk has several years of favorable experience in the E&S market, it may become "admissible" — admitted carriers will compete for it. Wholesale brokers must be aware of this dynamic: a loyal retail agent/client relationship requires proactively advising when admitted options become available and competitive, not just keeping the business in E&S.</p>
    `,
  },
  {
    id: "crc-role",
    title: "CRC's Role in the E&S Distribution Chain",
    badge: "CRC Focus",
    content: `
      <h3>The Distribution Chain</h3>
      <p>The E&S insurance distribution chain: <strong>Insured → Retail Agent/Broker → CRC (Wholesale Broker) → E&S Carrier / Lloyd's Syndicate</strong>. CRC sits between the retail agent and the market. Retail agents come to CRC because CRC has market access, coverage expertise, and compliance capabilities that most retail agents don't maintain in-house.</p>

      <h3>CRC's Value Proposition</h3>
      <p>CRC provides: (1) <strong>Market access</strong> — relationships with 100+ E&S carriers and Lloyd's syndicates; (2) <strong>Coverage expertise</strong> — specialist teams in property, casualty, professional, and specialty lines; (3) <strong>Compliance</strong> — surplus lines tax filing, stamping office management, diligent effort documentation; (4) <strong>Speed</strong> — same-day or next-day binding capability on many classes via binding authorities; (5) <strong>Advocacy</strong> — negotiating terms and premiums on behalf of retail clients.</p>

      <h3>CRC's Specialty Divisions</h3>
      <p>CRC has specialty teams focused on specific classes: property (including CAT property), casualty, professional lines, programs, healthcare, transportation, personal lines, and others. As a wholesale insurance leader, knowing which CRC division handles which class — and which markets each division accesses — is essential to directing business efficiently.</p>

      <h3>Binding Authorities & Programs</h3>
      <p>CRC manages numerous binding authorities (binders) with E&S carriers and Lloyd's syndicates. These binders allow CRC underwriters to bind coverage for qualifying risks without going back to the market for each individual risk. CRC's program business — where CRC is the coverholder — is a significant revenue driver and differentiator.</p>

      <h3>Wholesale Broker Fiduciary Duties</h3>
      <p>CRC owes duties to both the retail agent/broker and, in some states, to the insured. Key obligations: (1) disclose all material facts to the market; (2) present coverage options fairly; (3) ensure accurate documentation; (4) manage surplus lines compliance; (5) provide timely communication of coverage. CRC also owes duties of expertise — the retail agent relies on CRC's market knowledge to get the best possible result.</p>
    `,
  },
  {
    id: "es-trends",
    title: "E&S Market Trends & Hard Market Dynamics",
    badge: "Strategy",
    content: `
      <h3>The Current Hard Market</h3>
      <p>The US P&C market has experienced a significant hard market cycle since approximately 2019, with property leading the hardening. Drivers include: increased frequency and severity of CAT events (hurricanes, wildfires, severe convective storms), social inflation in casualty, deteriorating loss ratios, and reinsurance market hardening post-Hurricane Ian (2022).</p>

      <h3>E&S Market Growth</h3>
      <p>The E&S market has grown from approximately $50 billion in DWP in 2018 to over $100 billion by 2024. This reflects both the hard market push of business from admitted to E&S, and genuine expansion of E&S appetite into new risk categories (cannabis, cyber, sharing economy). CIAB surveys consistently show wholesale broker submissions increasing year-over-year.</p>

      <h3>Property: The Defining Issue</h3>
      <p>Property catastrophe is the dominant issue in the current market. Admitted carriers have non-renewed or significantly restricted coverage in: Florida (wind), Gulf Coast (wind/storm surge), California (wildfire), Rocky Mountain states (hail), and coastal markets nationally. CRC's property specialty team has seen dramatic volume increases as retail agents have no choice but to seek E&S solutions.</p>

      <h3>Casualty Concerns: Social Inflation</h3>
      <p><strong>Social inflation</strong> — rising jury awards, nuclear verdicts, litigation funding, and plaintiff attorney tactics — has driven casualty loss severity higher, particularly in: auto (commercial and personal), general liability (construction, premises), and products liability. E&S casualty markets have responded with higher rates, reduced limits, and stricter underwriting.</p>

      <h3>Emerging Lines: Cannabis, Cyber, AI</h3>
      <p>The E&S market leads in coverage for emerging risks. <strong>Cannabis</strong> businesses still face admitted market restrictions in most states — E&S writers lead. <strong>Cyber</strong> remains heavily E&S, with Lloyd's, Beazley, and others being the dominant markets. <strong>AI liability</strong> is the emerging frontier — expect this to develop primarily through E&S innovation.</p>

      <h3>Market Forecast</h3>
      <p>As admitted carriers gradually rebuild appetite and rate adequacy returns, some E&S business will flow back to the admitted market. However, structural growth in the E&S market will continue as: (1) new risk categories emerge; (2) climate change keeps CAT-exposed admitted capacity constrained; and (3) the wholesale distribution model continues to prove its value. CRC is well-positioned to capture both the cyclical and structural growth.</p>
    `,
  },
];

export const esGlossary = [
  { term: "Admitted Carrier", definition: "An insurer licensed and regulated in the state; must file rates/forms; backed by guaranty fund." },
  { term: "Alien Insurer", definition: "An insurer domiciled outside the US (e.g., Lloyd's syndicates)." },
  { term: "Coverholder", definition: "An entity approved to bind coverage on behalf of an E&S carrier under a binding authority." },
  { term: "Diligent Effort", definition: "Requirement to attempt placement with admitted carriers (typically 3 declinations) before going to E&S." },
  { term: "DWP", definition: "Direct Written Premium — the gross premium written before ceding to reinsurers." },
  { term: "ECP (Exempt Commercial Purchaser)", definition: "A sophisticated buyer who may access the non-admitted market without a diligent effort requirement." },
  { term: "Eligible Surplus Lines Insurer", definition: "A non-admitted carrier approved by a state to write surplus lines business." },
  { term: "Home State", definition: "Under the NRRA, the state with regulatory authority (insured's principal place of business)." },
  { term: "Non-Admitted Carrier", definition: "An insurer not licensed in the state; not backed by guaranty fund; has filing flexibility." },
  { term: "NRRA", definition: "Non-admitted and Reinsurance Reform Act of 2010 — federal law streamlining multi-state E&S compliance." },
  { term: "Stamping Fee", definition: "A fee charged by surplus lines stamping offices (typically 0.1–0.25% of premium)." },
  { term: "Stamping Office", definition: "State-authorized entity that receives E&S policy filings and collects surplus lines taxes." },
  { term: "Surplus Lines Broker", definition: "A licensed broker authorized to place business with non-admitted carriers." },
  { term: "Surplus Lines Tax", definition: "State tax on non-admitted insurance premium, typically 2–5% of premium." },
  { term: "White List", definition: "NAIC Quarterly Listing of Alien Insurers — the approved list of foreign (non-US) surplus lines carriers." },
];
