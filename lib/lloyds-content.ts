export interface Topic {
  id: string;
  title: string;
  badge?: string;
  content: string;
}

export const lloydsTopics: Topic[] = [
  {
    id: "structure",
    title: "The Lloyd's Market: Structure & Governance",
    badge: "Foundation",
    content: `
      <h3>What Is Lloyd's?</h3>
      <p>Lloyd's of London is not an insurance company — it is a <strong>marketplace</strong> where members join together to insure risks. Founded in 1688 at Edward Lloyd's Coffee House, it has evolved into the world's leading specialist insurance and reinsurance market, writing premium of approximately £46 billion annually across more than 200 territories.</p>

      <h3>The Corporation of Lloyd's</h3>
      <p>The Corporation of Lloyd's is the administrative body that regulates and supports the market. It does not itself underwrite risk — that is done by the syndicates. The Corporation provides the market infrastructure: the Lloyd's building, market services, the Lloyd's brand, and the Franchise Performance Directorate (FPD), which sets minimum standards for syndicates.</p>

      <h3>The Society of Lloyd's</h3>
      <p>All participants in the market are members of the Society of Lloyd's. The Council of Lloyd's governs the Society and sets overall strategy. Below the Council sits the Franchise Board, which focuses on performance and oversight of individual syndicates.</p>

      <h3>The Lloyd's Market Association (LMA)</h3>
      <p>The LMA is the trade association representing managing agents and syndicates. It produces standard wordings, market bulletins, and facilitates collaboration on policy language. For wholesale brokers, the LMA is an important resource for understanding what language is standard vs. bespoke.</p>

      <h3>Key Regulators</h3>
      <p>Lloyd's syndicates are regulated by the <strong>Prudential Regulation Authority (PRA)</strong> and the <strong>Financial Conduct Authority (FCA)</strong> in the UK. Lloyd's as a market also maintains relationships with regulators in each country where it operates, maintaining its network of licenses and trust funds.</p>
    `,
  },
  {
    id: "syndicates",
    title: "Syndicates & Managing Agents",
    badge: "Core Concept",
    content: `
      <h3>What Is a Syndicate?</h3>
      <p>A syndicate is a group of capital providers (members) who have pooled their capacity to underwrite risks for a single underwriting year. Syndicates are re-formed annually — each year's business is a separate legal and financial entity. This "annual venture" structure means prior year claims remain the liability of that year's members.</p>

      <h3>Managing Agents</h3>
      <p>A <strong>Managing Agent</strong> manages one or more syndicates on behalf of the members. It employs the underwriters, sets the underwriting strategy, and handles all operational matters. Managing agents are Lloyd's-approved and must meet the Corporation's minimum standards. Major managing agents include Beazley, Hiscox, Brit, Talbot, QBE, and Markel (among many others).</p>

      <h3>Members: Names and Corporate Capital</h3>
      <p>Historically, Lloyd's members were wealthy individuals ("Names") who pledged personal assets to back underwriting. Today, the vast majority of capacity comes from <strong>corporate members</strong> — typically insurance companies, Lloyd's syndicates, and private equity-backed vehicles called <strong>Integrated Lloyd's Vehicles (ILVs)</strong>. Individual names still exist but represent a small fraction of capacity.</p>

      <h3>Capacity and Stamp</h3>
      <p>Each syndicate is given a <strong>stamp capacity</strong> — the maximum premium it can write in a given year of account. The Lloyd's Franchise Board approves business plans annually. Capacity can be bought and sold on the <strong>Lloyd's Capacity Auction</strong> (held annually in November). Syndicates can also apply for additional capacity mid-year if their plan is tracking well.</p>

      <h3>Specialist Syndicates</h3>
      <p>Lloyd's is known for specialty lines. Major areas include: Marine (historic strength), Aviation, Property Catastrophe, Specialty Casualty, Energy, Cyber, Political Risk, and Accident & Health. For a wholesale broker like CRC, the specialty casualty and property syndicates are most frequently accessed.</p>
    `,
  },
  {
    id: "policy",
    title: "The Lloyd's Policy & Slip System",
    badge: "Practical",
    content: `
      <h3>The Slip: Birth of a Lloyd's Policy</h3>
      <p>In the Lloyd's market, business is still placed via a <strong>slip</strong> — a document (now largely electronic) that sets out the key terms of the risk. When a broker presents a risk, underwriters on the slip indicate their line size (percentage of the risk they will take) and initial the slip. This process of building a risk across multiple underwriters is called <strong>subscription market</strong> placement.</p>

      <h3>The Lead and Following Underwriters</h3>
      <p>The <strong>lead underwriter</strong> is the first syndicate to agree terms. They set the rate, terms, and conditions. <strong>Following underwriters</strong> then "follow" on the lead's terms, often with less negotiation. The lead typically takes the largest line. Managing the lead relationship is critical — a strong lead gives other underwriters confidence to follow at better terms.</p>

      <h3>Market Reform Contract (MRC)</h3>
      <p>The Market Reform Contract is the standard document format now used at Lloyd's (replacing the older slip format). It requires specific sections to be completed in a defined order: Risk Details, Information, Security Details, Subscription Agreement, and Fiscal/Regulatory section. The MRC supports <strong>contract certainty</strong> — the requirement that all terms be agreed before inception, not after.</p>

      <h3>Unique Market Reference (UMR)</h3>
      <p>Every Lloyd's risk is assigned a <strong>UMR</strong> — a unique alphanumeric identifier assigned by the broker. This reference flows through the entire lifecycle of the policy: placement, endorsements, premium processing, and claims. The UMR is essential for tracking and reconciliation in the electronic processing systems.</p>

      <h3>Lloyd's Certificate vs. Policy</h3>
      <p>A <strong>Lloyd's Certificate</strong> (or Lloyd's Policy) is the formal insurance document issued to the insured. In the US, Lloyd's policies are issued under the Lloyd's of London standard wordings or custom manuscript forms. For wholesale brokers placing E&S risks through Lloyd's, the certificate must include the surplus lines stamp and applicable state taxes.</p>

      <h3>Signing and Bureaux</h3>
      <p>Once a risk is placed, it flows through the <strong>Xchanging Insurance Services (XIS)</strong> system for technical processing. Lloyd's uses <strong>ACORD</strong> messaging standards for electronic placement. Premiums are settled centrally through the Lloyd's bureau, not directly between broker and syndicate.</p>
    `,
  },
  {
    id: "delegated",
    title: "Delegated Authority: Coverholders & Lineslips",
    badge: "Key for CRC",
    content: `
      <h3>What Is Delegated Authority?</h3>
      <p>Delegated authority (DA) is an arrangement where a Lloyd's syndicate gives a third party — a <strong>coverholder</strong> or <strong>service company</strong> — the authority to bind insurance contracts on the syndicate's behalf. This is one of the most important mechanisms for US wholesale brokers, as it allows Lloyd's paper to be accessed without placing each risk individually in London.</p>

      <h3>Coverholders</h3>
      <p>A <strong>coverholder</strong> is a company or individual who has been approved by Lloyd's to enter into insurance contracts on behalf of a syndicate, under a <strong>binding authority agreement</strong> (binder). Coverholders must be registered with Lloyd's and meet ongoing compliance requirements. At CRC, many specialty programs are placed via binding authorities with Lloyd's syndicates.</p>

      <h3>Binding Authorities (Binders)</h3>
      <p>A binding authority defines: the class of business, the geographic limits, the policy conditions, the premium limits per risk, aggregate premium limits, the reporting requirements, and the claims authority (if any). The binder is the legal contract between the syndicate and the coverholder. Each risk bound under a binder is called a <strong>bordereaux entry</strong>.</p>

      <h3>Lineslips</h3>
      <p>A <strong>lineslip</strong> is an arrangement where a broker has pre-agreed lines of capacity from a panel of syndicates. Rather than placing each risk individually, the broker can access these committed lines for qualifying risks. Lineslips are common in property and casualty for brokers with high volume of similar risks. The lead underwriter on the lineslip generally has authority to bind on behalf of the following underwriters.</p>

      <h3>Service Companies</h3>
      <p>A <strong>service company</strong> (also called a Lloyd's service company) is typically a subsidiary of a Lloyd's managing agent that operates outside the Lloyd's market. Service companies are used to access business in markets where Lloyd's itself doesn't have a direct license — they write on admitted or company paper and then reinsure back into Lloyd's syndicates.</p>

      <h3>Compliance Requirements</h3>
      <p>Coverholders must submit <strong>quarterly bordereau</strong> reports to their Lloyd's syndicate principals. They must also comply with the Lloyd's Coverholder Requirements (LCR), including requirements around data standards (ACORD), claims handling, and audit rights. The Lloyd's Coverholder Management System (CMS) tracks all approved coverholders globally.</p>
    `,
  },
  {
    id: "accessing",
    title: "Accessing the Lloyd's Market as a US Wholesale Broker",
    badge: "Practical",
    content: `
      <h3>The London Broker</h3>
      <p>US wholesale brokers typically access Lloyd's through a <strong>London broker</strong> — a firm with Lloyd's floor access and relationships with the syndicates. Major London brokers include Howden, Lockton, Victor Insurance, Miller, Tysers, and others. CRC has established relationships with London brokers for open market placements.</p>

      <h3>Open Market Placement</h3>
      <p>For a bespoke or large risk that doesn't fit a binding authority, the placement process is: (1) US retail broker submits to CRC (wholesale broker); (2) CRC reviews and prepares a submission; (3) CRC's London correspondent broker approaches Lloyd's underwriters; (4) the risk is placed on a subscription basis. This process can take days to weeks for complex risks.</p>

      <h3>Binding Authority / Program Business</h3>
      <p>For eligible classes of business, CRC may operate as a coverholder or work with a coverholder that has a Lloyd's binder. This allows same-day or next-day binding for qualifying risks without London broker involvement for each individual risk. This is the dominant model for volume specialty business at CRC.</p>

      <h3>Surplus Lines Compliance</h3>
      <p>Lloyd's operates in the US as a <strong>non-admitted, surplus lines insurer</strong> in most states. This means Lloyd's risks must comply with surplus lines laws: diligent effort (usually 3 declinations from admitted market), surplus lines disclosure, and surplus lines tax filing. Lloyd's is on the <strong>NAIC's Quarterly Listing of Alien Insurers</strong> (the "White List"), making it an eligible surplus lines insurer in all states.</p>

      <h3>Lloyd's Trust Funds in the US</h3>
      <p>Lloyd's maintains <strong>US trust funds</strong> to secure the obligations of Lloyd's syndicates to US policyholders. There are separate trust funds for US Situs Risk (risks located in the US) and non-US risk. These trust funds are required by the NAIC and provide financial security comfort to state regulators and policyholders.</p>

      <h3>Key Contacts & Resources</h3>
      <p>The <strong>Lloyd's America</strong> office in New York supports the US market. The <strong>Lloyd's Market Association (LMA)</strong> provides standard wordings and market bulletins. Lloyd's <strong>Risk Codes</strong> (class of business codes) are essential for data management and reporting. The <strong>Kinnect</strong> electronic placement platform continues to grow as a tool for e-trading Lloyd's risks.</p>
    `,
  },
  {
    id: "security",
    title: "Lloyd's Chain of Security & Financial Strength",
    badge: "Risk Management",
    content: `
      <h3>The Chain of Security</h3>
      <p>Lloyd's financial security is built in layers, known as the <strong>Chain of Security</strong>. This is a key differentiator and a selling point when placing E&S business at Lloyd's — it provides multiple layers of protection that give regulators and policyholders confidence in Lloyd's claims-paying ability.</p>

      <h3>Layer 1: Syndicate Premiums Trust Funds</h3>
      <p>Premiums collected by each syndicate are held in <strong>trust funds</strong> separate from any managing agent's own funds. These are the first resource for paying claims. Trust funds are held in approved investments and are segregated by year of account.</p>

      <h3>Layer 2: Members' Funds at Lloyd's (FAL)</h3>
      <p>Every member (individual or corporate) must deposit <strong>Funds at Lloyd's (FAL)</strong> as a condition of membership. FAL serves as additional security behind the trust funds. FAL amounts are set by the Lloyd's capital model and represent a significant additional layer of protection.</p>

      <h3>Layer 3: Central Fund</h3>
      <p>The <strong>Lloyd's Central Fund</strong> is a mutual fund maintained by the Corporation of Lloyd's, funded by levies on syndicates. The Central Fund can be called on if a syndicate and its members cannot meet their obligations. This is the "guarantee" that makes a Lloyd's policy as secure as the market as a whole — not just a single syndicate.</p>

      <h3>Layer 4: Corporation's Own Assets</h3>
      <p>Finally, the Corporation of Lloyd's itself holds assets that can be called upon as a last resort. In practice, the Central Fund has always been sufficient to meet obligations, but this final layer exists.</p>

      <h3>Financial Ratings</h3>
      <p>Lloyd's carries strong financial strength ratings: <strong>AM Best: A (Excellent)</strong>, <strong>S&P: A+ (Strong)</strong>, and <strong>Fitch: AA- (Very Strong)</strong>. These ratings apply to the Lloyd's market as a whole via the Central Fund guarantee, making Lloyd's paper competitive with the largest insurance companies globally.</p>
    `,
  },
  {
    id: "claims",
    title: "Claims at Lloyd's",
    badge: "Operations",
    content: `
      <h3>Lloyd's Claims Philosophy</h3>
      <p>Lloyd's has a stated commitment to prompt and fair claims handling. The <strong>Claims Management Principles</strong> set minimum standards for speed and quality of claims handling across all syndicates. The Lloyd's Claims Transformation programme has pushed for faster, more electronic claims processing.</p>

      <h3>The Lead Claims Underwriter</h3>
      <p>On a subscribed risk, one syndicate is designated the <strong>lead claims underwriter</strong> (usually the lead risk underwriter). The lead has authority to agree coverage, appoint loss adjusters, and settle claims on behalf of all following underwriters. The lead's decision binds the followers for "standard" claims; major losses may require all underwriters to agree.</p>

      <h3>Agreement Parties</h3>
      <p>Some complex claims require a formal vote among all underwriters — those who vote are called <strong>agreement parties</strong>. For very large or contentious losses, agreement parties may appoint independent experts or convene formal meetings. The threshold for what requires agreement party involvement is set in the policy or by market convention.</p>

      <h3>Lloyd's Claims Office</h3>
      <p>Lloyd's has claims specialists in the US (Lloyd's America) who can assist with large US losses. For US surplus lines claims, the process typically flows: insured notifies broker; broker notifies London broker (if applicable); London broker notifies syndicate. Electronic claims notification via <strong>ECF (Electronic Claims Files)</strong> is now the standard.</p>

      <h3>3-Year Year of Account</h3>
      <p>Each syndicate year of account remains open for three years. At the end of three years, the year is "closed" by reinsuring outstanding liabilities into the next open year of the syndicate (or into a run-off vehicle). This process is called <strong>Reinsurance to Close (RITC)</strong>. This structure means Lloyd's syndicates must reserve adequately for long-tail claims from the outset.</p>
    `,
  },
  {
    id: "us-classes",
    title: "Key Lloyd's Classes for US Wholesale Business",
    badge: "Revenue Focus",
    content: `
      <h3>Property Catastrophe</h3>
      <p>Lloyd's has enormous property catastrophe capacity and is a critical market for CRC. Lloyd's syndicates write significant US wind, earthquake, flood, and wildfire exposure — often in excess of what admitted markets will accept. For large schedules and high-value properties in CAT-exposed areas, Lloyd's is frequently the primary market solution.</p>

      <h3>Specialty Casualty</h3>
      <p>Lloyd's writes a broad range of specialty casualty lines: environmental liability, products liability for difficult classes (firearms, chemicals, food/beverage), excess and umbrella, construction defect, and more. For CRC, Lloyd's casualty syndicates are an important market for risks that fall outside standard admitted casualty programs.</p>

      <h3>Professional Liability</h3>
      <p>Lloyd's remains one of the leading markets for professional liability globally — E&O, D&O, cyber, MPL (medical professional liability), and financial institutions. Many of the innovative coverage forms in professional lines were developed at Lloyd's.</p>

      <h3>Marine & Energy</h3>
      <p>Lloyd's originated in marine insurance and remains the world's leading marine market. For CRC's clients with marine exposure (cargo, hull, ports, offshore energy), Lloyd's is the natural market. The <strong>Institute Clauses</strong> used in marine insurance globally are products of the Lloyd's market.</p>

      <h3>Accident & Health / PA</h3>
      <p>Lloyd's writes personal accident, travel insurance, and specialty A&H products. For wholesale brokers, Lloyd's A&H capacity is accessed for group PA programs, sports teams, and entertainment industry risks that don't fit standard health insurance structures.</p>

      <h3>Cyber</h3>
      <p>Lloyd's was an early innovator in cyber insurance and remains a major cyber market. With many US insurers pulling back from cyber or tightening terms, Lloyd's cyber capacity (across multiple syndicates) is increasingly important for CRC's wholesale clients. Lloyd's has also published market guidance on cyber systemic risk and war exclusions.</p>
    `,
  },
];

export const lloydsGlossary = [
  { term: "Annual Venture", definition: "The re-forming of syndicates each year; each year of account is a separate financial entity." },
  { term: "Binding Authority (Binder)", definition: "A contract granting a coverholder authority to bind insurance on behalf of a Lloyd's syndicate." },
  { term: "Bordereaux", definition: "Monthly/quarterly reports submitted by coverholders listing all risks bound under a binder." },
  { term: "Capacity", definition: "The maximum premium a syndicate can write; bought/sold at the annual capacity auction." },
  { term: "Central Fund", definition: "Lloyd's mutual fund that backs the market's obligations; contributes to the Chain of Security." },
  { term: "Contract Certainty", definition: "The requirement that all contract terms be agreed before policy inception." },
  { term: "Coverholder", definition: "A Lloyd's-approved entity that can bind risks on behalf of a syndicate under a binding authority." },
  { term: "FAL (Funds at Lloyd's)", definition: "Assets deposited by members as additional security behind syndicate trust funds." },
  { term: "ILV (Integrated Lloyd's Vehicle)", definition: "A corporate entity that provides capital to Lloyd's syndicates." },
  { term: "Lineslip", definition: "A pre-agreed panel of syndicate capacity that a broker can access for qualifying risks." },
  { term: "LMA", definition: "Lloyd's Market Association — trade body for managing agents and syndicates." },
  { term: "Managing Agent", definition: "The firm that manages a Lloyd's syndicate on behalf of its members." },
  { term: "MRC (Market Reform Contract)", definition: "The standard contract document format used at Lloyd's." },
  { term: "RITC (Reinsurance to Close)", definition: "Process of closing a year of account by reinsuring liabilities into the next open year." },
  { term: "Syndicate", definition: "A group of members pooled to underwrite risks for a single year of account." },
  { term: "UMR (Unique Market Reference)", definition: "The unique identifier assigned to every Lloyd's risk by the broker." },
  { term: "Year of Account", definition: "The underwriting year (Jan–Dec) in which a risk is written; each is a separate entity for 3 years." },
];
