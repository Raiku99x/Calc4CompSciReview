// ============================================================
//  LOGIN
// ============================================================
const USERS = [
  { username: "lhoel",  password: "black67#" },
  { username: "vince",  password: "@black67" },
  { username: "hertz",  password: "black67@" },
  { username: "kian",   password: "#black67"  }
];

function attemptLogin() {
  const user = document.getElementById("loginUser").value.trim();
  const pass = document.getElementById("loginPass").value;
  const error = document.getElementById("loginError");

  const match = USERS.find(u => u.username === user && u.password === pass);

  if (match) {
    document.getElementById("loginOverlay").style.display = "none";
    document.getElementById("appWrapper").style.display = "block";
    renderProblem(0);
  } else {
    error.classList.add("show");
    document.getElementById("loginPass").value = "";
    document.getElementById("loginPass").focus();
  }
}

function togglePassVisibility() {
  const input = document.getElementById("loginPass");
  const btn = document.getElementById("togglePassBtn");
  if (input.type === "password") {
    input.type = "text";
    btn.textContent = "Hide";
  } else {
    input.type = "password";
    btn.textContent = "Show";
  }
}

// Allow Enter key to submit login
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loginPass").addEventListener("keydown", e => {
    if (e.key === "Enter") attemptLogin();
  });
  document.getElementById("loginUser").addEventListener("keydown", e => {
    if (e.key === "Enter") document.getElementById("loginPass").focus();
  });
  // Hide error when user starts typing again
  ["loginUser", "loginPass"].forEach(id => {
    document.getElementById(id).addEventListener("input", () => {
      document.getElementById("loginError").classList.remove("show");
    });
  });
});


//  10 Problems × 7 Steps each
// ============================================================

const STEP_LABELS = [
  "Step 1", "Step 2", "Step 3", "Step 4",
  "Step 5", "Step 6", "Step 7"
];

const STEP_NAMES = [
  "State the Ethical Question Clearly",
  "Identify the Relevant Facts",
  "Identify Stakeholders & Their Interests",
  "Identify Applicable Ethical Principles",
  "List & Evaluate the Options",
  "Make a Decision",
  "Monitor & Evaluate the Decision"
];

// ─────────────────────────────────────────────
//  PROBLEMS DATA
// ─────────────────────────────────────────────
const PROBLEMS = [
  {
    id: 1,
    title: "The Trolley Problem",
    scenario: "A runaway trolley is speeding toward five workers tied to the tracks who cannot escape. You stand next to a lever. Pulling it diverts the trolley to a side track where only one worker is tied. You must decide immediately.",
    question: "Is it morally permissible to pull the lever, actively causing one death to prevent five deaths?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The central moral question is: <strong>May a bystander actively intervene to cause the death of one innocent person in order to prevent the deaths of five other innocent people?</strong></p>
               <p>This distinguishes itself from passive inaction. We are not asking whether to help — we are asking whether we may <em>actively redirect lethal harm</em> onto a specific individual.</p>`,
        verdict: "The question is precise: active killing of one vs. allowing five to die."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p><strong>Known facts:</strong> Five workers will die if nothing is done. One worker will die if the lever is pulled. You are the only bystander in a position to act. The trolley cannot be stopped entirely.</p>
               <p><strong>Morally relevant facts:</strong> The one worker on the side track did not choose to be in the path of a diverted trolley. None of the six workers are morally responsible for the situation.</p>`,
        verdict: "Five deaths are certain without action. One death results from action. All parties are innocent."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The five workers:</strong> Their primary interest is survival. They have families, commitments, and futures at stake.</p>
               <p><strong>The one worker:</strong> Also has a fundamental interest in continued life. Has not consented to being a sacrifice.</p>
               <p><strong>The bystander (you):</strong> Bears the moral weight of either action or inaction, and must live with the consequences.</p>
               <p><strong>Society:</strong> Has an interest in how such principles are established — what norms govern life-and-death interventions.</p>`,
        verdict: "All six workers have equal, inviolable interests in life."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Principle of Double Effect:</strong> An action with both good and bad effects may be permissible if the bad effect is foreseen but not intended, and there is proportionate reason.</p>
               <p><strong>The Sanctity of Life:</strong> Every human life has inherent, equal worth and may not be casually sacrificed.</p>
               <p><strong>The Duty to Rescue:</strong> When we can prevent great harm at minimal personal cost, we have a moral obligation to do so.</p>
               <p><strong>Non-maleficence:</strong> "Do no harm" — do not actively cause harm to innocent persons.</p>`,
        verdict: "Competing principles pull in both directions: rescue the many vs. do not actively kill the innocent."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Pull the lever:</strong> Saves five, kills one. The death of the one is a foreseen but arguably unintended side effect of saving five. Satisfies proportionality; challenged by non-maleficence.</p>
               <p><strong>Option B — Do nothing:</strong> Five die. You are not the proximate cause, but you are a morally relevant agent who could have prevented it. Inaction is also a moral choice.</p>
               <p><strong>Option C — Seek a third way:</strong> In reality, no other option exists in this scenario. Shouting warnings has no effect in this setup.</p>`,
        verdict: "Option A is morally permissible. Option B is not neutral — it is a choice to allow five deaths."
      },
      {
        title: "Make a Decision",
        body: `<p>Applying Scott Rae's framework: the Double Effect principle permits pulling the lever. The <em>intent</em> is to save five, not to kill the one. The death of the one is a tragic, proportionate side effect.</p>
               <p>The weight of five lives against one, combined with the bystander's duty to intervene when possible, makes pulling the lever the most defensible moral choice — though not without moral cost.</p>`,
        verdict: "Decision: Pull the lever. It is morally permissible — and arguably obligatory — given the proportionality."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>The decision carries permanent moral weight. The bystander should not treat this as a clean or consequence-free act. Grief, accountability, and transparency matter.</p>
               <p>At the policy level: this case teaches us that moral frameworks must be established <em>before</em> crisis moments. Societies need clear, pre-deliberated norms about when active intervention causing death is permissible.</p>`,
        verdict: "The decision is morally defensible, but carries genuine moral weight that must not be minimized."
      }
    ],
    conclusion: "Pulling the lever is morally permissible under the Principle of Double Effect. The intent is to save five lives; the death of the one, though tragic, is a foreseen and proportionate side effect rather than the means itself. However, this is a genuine moral tragedy — not a clean calculus — and the agent bears real moral responsibility."
  },

  {
    id: 2,
    title: "The Organ Harvest",
    scenario: "A surgeon has five dying patients who each need a different organ. A healthy patient arrives for a routine checkup. His organs are a perfect match for all five. The surgeon considers harvesting his organs without consent to save the five patients.",
    question: "Is it morally permissible for the surgeon to kill a healthy patient to harvest organs and save five dying patients?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>May a physician deliberately kill an innocent, non-consenting person as the direct means of saving multiple other lives?</strong></p>
               <p>Unlike the trolley problem, here the harm to the one is not a side effect — it <em>is</em> the means. The patient must die so his organs can be taken.</p>`,
        verdict: "This is a question of using a person's death as a tool — not a tragic side effect."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>Five patients will die without new organs. The healthy patient is a perfect match for all five. He has not consented. No alternative donors are available in time. The surgery would require ending his life.</p>
               <p>The healthy patient came to the hospital trusting the physician-patient covenant. This trust is a morally significant fact, not merely a procedural detail.</p>`,
        verdict: "The healthy patient is innocent, non-consenting, and arrived in trust. His death is the direct means — not a side effect."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The healthy patient:</strong> Has an absolute interest in not being killed. Has a right to bodily autonomy and to the physician's covenant of non-maleficence.</p>
               <p><strong>The five dying patients:</strong> Have genuine interests in survival, but not the right to another's non-consenting death.</p>
               <p><strong>The surgeon:</strong> Bears the weight of professional ethics, the Hippocratic tradition, and personal moral integrity.</p>
               <p><strong>Society and medicine:</strong> Trust in doctors would collapse if patients could be killed for their organs. This systemic harm is massive.</p>`,
        verdict: "The healthy patient's interest in life is not outweighed by five others' interest in his organs."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Human dignity:</strong> Persons may never be treated merely as means to another's ends (Kant's Formula of Humanity, echoed in Christian ethics).</p>
               <p><strong>The Hippocratic principle:</strong> "First, do no harm" — the physician's first duty is to the patient before them.</p>
               <p><strong>Principle of Double Effect:</strong> Does NOT apply here. The healthy patient's death is the direct, intended means — not a foreseen side effect.</p>
               <p><strong>Informed consent:</strong> Medical ethics is grounded in the patient's autonomous right to accept or refuse treatment.</p>`,
        verdict: "Human dignity and the physician's covenant both categorically prohibit this act."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Harvest organs without consent:</strong> Saves five, kills one. Violates informed consent, human dignity, and medical ethics. Destroys public trust in medicine. Fails the Double Effect test (death is the means, not a side effect).</p>
               <p><strong>Option B — Refuse and pursue ethical alternatives:</strong> The five patients may die. But the physician maintains the covenant, protects dignity, and preserves the institution of medicine. Seek emergency donor registries, transport, or palliative care.</p>`,
        verdict: "Option A is morally impermissible regardless of numerical outcomes."
      },
      {
        title: "Make a Decision",
        body: `<p>The surgeon must refuse. This is not primarily a numbers question. A person's fundamental right not to be killed cannot be overridden by the needs of others, no matter how many. To do otherwise is to treat a human being as a resource to be harvested.</p>
               <p>Rae's framework emphasizes that moral rules against directly killing the innocent hold even when the consequences of holding them are painful. The integrity of medicine — and of human dignity — depends on this line not being crossed.</p>`,
        verdict: "Decision: Do not harvest. The prohibition on killing the innocent is not subject to numerical override."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>The surgeon must grieve the deaths of the five patients genuinely, pursue every ethical alternative, and advocate for improved organ donation systems that could prevent such tragic shortages in the future.</p>
               <p>At the systemic level: this case underscores the urgent need for opt-out organ donation laws, public education, and expanded donor registries — so that this dilemma never becomes real.</p>`,
        verdict: "Uphold the decision, grieve the outcome, and work to change the systems that created the shortage."
      }
    ],
    conclusion: "The surgeon must not harvest the organs. Unlike the trolley problem, the healthy patient's death is the direct means — not a side effect. No principle of proportionality overrides the prohibition on deliberately killing an innocent, non-consenting person. Human dignity and the physician's covenant are absolute here."
  },

  {
    id: 3,
    title: "The Whistleblower",
    scenario: "You work for a pharmaceutical company and discover that your employer is suppressing clinical trial data showing a widely-prescribed drug causes serious heart complications. Reporting it will save lives but will violate your NDA, end your career, and put your family's financial stability at risk.",
    question: "Are you morally obligated to report the suppressed data despite serious personal cost to yourself and your family?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>When institutional wrongdoing causes serious public harm, does a person's duty to the public good override contractual obligations and personal self-interest?</strong></p>
               <p>This is not merely a question of courage. It is a question of competing obligations: the duty to your employer (NDA), to your family (financial security), and to the public (whose safety is at risk).</p>`,
        verdict: "The question is about the priority of obligations when they conflict: contract, family, and public duty."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>The drug poses a serious, documented cardiac risk. Many patients are currently taking it unaware. The company knowingly suppressed this data. Regulatory bodies are legally entitled to this information. Whistleblower protections exist in many jurisdictions but are imperfect.</p>
               <p>Your family depends on your income. Violating the NDA carries legal risk. Anonymous reporting may reduce personal risk but may also be less credible.</p>`,
        verdict: "Real harm to real patients is ongoing and preventable. Personal risk is real but not equivalent."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>Current and future patients:</strong> Have an urgent interest in accurate safety information to make informed decisions about their health.</p>
               <p><strong>Your family:</strong> Has a legitimate interest in your employment, income, and stability.</p>
               <p><strong>The company:</strong> Has a financial interest in suppression, but no legitimate moral interest in continuing to harm patients.</p>
               <p><strong>The public and regulators:</strong> Have a right to accurate clinical data. Society depends on pharmaceutical integrity.</p>`,
        verdict: "Patients face ongoing physical harm. Family faces financial harm. These are real but not morally equivalent."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Duty to prevent harm:</strong> When you possess information that could prevent serious harm and you are uniquely positioned to act, you bear a special responsibility.</p>
               <p><strong>Truth-telling:</strong> Participating in concealment — even passively — makes you complicit in the deception.</p>
               <p><strong>Justice:</strong> Patients deserve accurate information. Denying it is an act of injustice against them.</p>
               <p><strong>Fidelity to contracts:</strong> NDAs have legitimate force, but they cannot morally bind you to assist in harming others.</p>`,
        verdict: "The duty to prevent harm and tell the truth supersedes a contractual duty to conceal harm."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Report internally first:</strong> Give the company a chance to self-correct. Lower personal risk, but likely ineffective given they already chose suppression.</p>
               <p><strong>Option B — Report anonymously to regulators:</strong> Protects family while fulfilling public duty. Risk of lower credibility.</p>
               <p><strong>Option C — Report publicly with full documentation:</strong> Maximum impact, maximum personal risk. Consult a whistleblower attorney first.</p>
               <p><strong>Option D — Stay silent:</strong> Morally impermissible. You become a knowing participant in ongoing harm to patients.</p>`,
        verdict: "Option B or C are morally required. Option D is not morally neutral — silence is complicity."
      },
      {
        title: "Make a Decision",
        body: `<p>Report the suppressed data. The obligation to prevent serious, ongoing harm to patients outweighs contractual loyalty to an employer who is actively doing wrong. An NDA cannot bind you to be complicit in harming others.</p>
               <p>Practically: consult a whistleblower attorney before acting; explore legal protections; consider anonymous reporting first. Rae's model affirms that moral courage sometimes requires accepting personal cost for the sake of others.</p>`,
        verdict: "Decision: Report — through the safest effective channel, with legal counsel if possible."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>Track whether the report produces regulatory action. Support others in the organization who may face similar pressure. Document everything for legal protection.</p>
               <p>If the decision leads to personal hardship, that is a genuine moral cost — not proof that the decision was wrong. Rae affirms that doing the right thing sometimes involves real suffering. The moral community has an obligation to protect and support whistleblowers.</p>`,
        verdict: "A just decision may still produce painful outcomes. Monitor the impact and seek support."
      }
    ],
    conclusion: "You are morally obligated to report the suppressed data. Silence is not neutral — it makes you complicit in ongoing harm to patients. An NDA cannot legitimately bind you to assist in deception that harms others. Pursue the safest effective channel (legal counsel, anonymous reporting, regulatory bodies), and accept that moral courage sometimes requires personal sacrifice."
  },

  {
    id: 4,
    title: "The Lying Murderer",
    scenario: "A murderer is chasing your friend who has taken refuge in your home. The murderer knocks on your door and asks directly: 'Is your friend inside?' Your friend's survival depends on your answer.",
    question: "Is it morally permissible — or even required — to lie to the murderer to protect your friend's life?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>Does the duty to tell the truth extend to those who intend to use the truth to commit murder?</strong></p>
               <p>This is a classic conflict between the value of truth-telling and the duty to protect innocent life. We must ask: to whom is truthfulness owed, and under what conditions?</p>`,
        verdict: "The question is whether the duty of honesty holds toward a murderer seeking to harm an innocent person."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>Your friend is innocent and in mortal danger. The murderer intends to kill. Your answer will directly determine whether your friend lives or dies. You have no alternative escape route available in the moment.</p>
               <p>The murderer is asking in bad faith — not for the sake of information, but to enable a murder. This is morally significant context.</p>`,
        verdict: "The murderer's intent transforms the moral context of the question being asked."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>Your friend:</strong> Has a fundamental interest in life. Trusts you with their safety.</p>
               <p><strong>The murderer:</strong> Has no legitimate moral claim to truthful information that will be used to kill. Has forfeited the right to honest treatment through criminal intent.</p>
               <p><strong>You:</strong> Bear the weight of both your commitment to truth-telling and your obligation to protect innocent life.</p>
               <p><strong>Society:</strong> Has an interest in norms against both lying and murder. The norm against murder is weightier.</p>`,
        verdict: "A murderer forfeits the normal right to truthful information by their malicious intent."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Truth-telling:</strong> Honesty is a virtue and a duty in ordinary moral relationships. It builds trust and respects persons.</p>
               <p><strong>Protection of the innocent:</strong> We have a strong duty to protect innocent life, especially when someone trusts us with their safety.</p>
               <p><strong>Moral context of the listener:</strong> Many ethicists (including in the Christian tradition Rae draws from) argue that truth is owed to those with a right to it. A murderer has no right to information that enables murder.</p>
               <p><strong>Fidelity to the vulnerable:</strong> The trust your friend placed in you creates a special obligation of protection.</p>`,
        verdict: "The duty of truth-telling applies within moral community. A murderer has stepped outside that community."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Tell the truth:</strong> Your friend is killed. You upheld abstract truth-telling but failed the concrete duty to protect innocent life. Most ethicists consider this morally monstrous.</p>
               <p><strong>Option B — Lie directly:</strong> Your friend is protected. You violated truth-telling, but to a person who had no right to the truth and intended to use it for murder.</p>
               <p><strong>Option C — Mislead without technically lying:</strong> ("I haven't seen them") — Preserves a narrow sense of literal truth while protecting your friend. A middle path some find preferable.</p>`,
        verdict: "Option B or C are morally permissible. Option A is not morally praiseworthy — it is moral rigidity at the cost of innocent life."
      },
      {
        title: "Make a Decision",
        body: `<p>Lie to the murderer, or at minimum mislead them. The duty of truth-telling does not extend to those who would weaponize your honesty to commit murder. The protection of innocent life is the weightier moral obligation in this moment.</p>
               <p>Scott Rae's model, grounded in Christian ethics, holds that persons have a right to truthful communication — but that right is not absolute and is forfeited by those who intend to use truth for murderous ends.</p>`,
        verdict: "Decision: Lie or mislead. Protecting innocent life supersedes truth-telling toward a murderer."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>After your friend is safe: report the murderer to authorities, cooperate fully with law enforcement, and reflect on the experience. The lie was justified, but the underlying threat of violence must be addressed through proper channels.</p>
               <p>This case also illustrates why moral rules are general guides, not mechanical algorithms — context and intent matter profoundly in moral reasoning.</p>`,
        verdict: "The decision was right. Pursue justice through lawful means now that the immediate crisis has passed."
      }
    ],
    conclusion: "It is morally permissible — and arguably required — to lie to the murderer. Truth-telling is a virtue, but it is not owed unconditionally to those who intend to use it for murder. The duty to protect innocent life in your care is the weightier obligation. This is not a license for casual dishonesty — it is a recognition that moral duties apply within a context of mutual respect and good faith."
  },

  {
    id: 5,
    title: "The Drowning Child",
    scenario: "You are walking past a shallow pond and see a small child drowning. You could easily wade in and save them, but it would ruin your expensive new clothes and make you late for an important job interview. No one else is nearby.",
    question: "Are you morally obligated to ruin your clothes and miss your interview to save the drowning child?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>When saving a human life requires only modest personal sacrifice, is the moral obligation to act so strong that failing to act constitutes a serious moral wrong?</strong></p>
               <p>This is not about heroism requiring great personal risk — it is about a minimal-cost rescue that most people would instinctively perform.</p>`,
        verdict: "The question asks whether proximity and ease of rescue create a binding moral obligation to act."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>A child is drowning and will die without intervention. You can save them with certainty. The water is shallow — no risk to your life. The cost is: ruined clothes and a missed interview.</p>
               <p>The child cannot help themselves. No one else is present. You are the only person who can act. Time is critical.</p>`,
        verdict: "The cost of rescue is negligible. The cost of inaction is a child's death."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The child:</strong> Has an absolute interest in survival. Is completely vulnerable and dependent on your action.</p>
               <p><strong>The child's family:</strong> Has an overwhelming interest in the child's survival.</p>
               <p><strong>You:</strong> Have genuine interests in career advancement and property — but these are not morally comparable to a child's life.</p>
               <p><strong>Future employer:</strong> May be inconvenienced, but any reasonable person would understand and respect a genuine rescue.</p>`,
        verdict: "A child's life infinitely outweighs the value of clothes and an interview appointment."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Duty to rescue:</strong> When we can prevent serious harm at comparatively little cost, we are morally obligated to do so. This is widely recognized across ethical traditions.</p>
               <p><strong>Proportionality:</strong> The moral weight of an obligation scales with both the severity of harm and the ease of prevention. Here both factors overwhelmingly favor action.</p>
               <p><strong>The sanctity of human life:</strong> A child's life has intrinsic worth that cannot be traded off against material possessions or personal convenience.</p>`,
        verdict: "The duty to rescue is binding here. Proportionality leaves no room for debate."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Wade in and save the child:</strong> Child lives. You lose clothes and an interview. This is the clear moral choice — the cost is real but proportionally trivial compared to the benefit.</p>
               <p><strong>Option B — Call for help and wait:</strong> If help is genuinely closer and faster, and you cannot swim at all, this might be a transitional step. But in this scenario, you can easily rescue the child yourself — calling for help while waiting is inaction masquerading as action.</p>
               <p><strong>Option C — Walk past:</strong> Morally inexcusable. A child dies so you can preserve dry clothes.</p>`,
        verdict: "Option A is the only morally acceptable choice."
      },
      {
        title: "Make a Decision",
        body: `<p>Save the child without hesitation. This case represents perhaps the clearest application of the duty to rescue in moral philosophy. The disproportion between cost (ruined clothes, missed interview) and benefit (a child's life) is so extreme that there is no serious moral argument for inaction.</p>
               <p>Rae's framework places the sanctity of human life among the highest moral values. No reasonable calculus places career convenience above the life of a child you could easily save.</p>`,
        verdict: "Decision: Save the child immediately. No alternative is morally defensible."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>After the rescue: ensure the child receives medical attention, locate their guardians, and report the incident. Contact your interviewer to explain — most will respect your action, and any employer who does not is not someone you want to work for.</p>
               <p>This case is also instructive for thinking about global poverty: if proximity doesn't change the moral weight of preventable death, what obligations does affluence create toward distant strangers? Rae's framework invites deeper reflection on where the duty to rescue ends.</p>`,
        verdict: "A clear moral decision with straightforward follow-through. Let it also prompt wider reflection on the duty to help."
      }
    ],
    conclusion: "You are absolutely morally obligated to save the drowning child. The cost (clothes, an interview) is so disproportionately trivial compared to a child's life that no serious ethical framework permits inaction. This is one of the clearest cases in applied ethics: when you can prevent death at modest personal cost, you must act."
  },

  {
    id: 6,
    title: "The Lifeboat",
    scenario: "A lifeboat rated for 10 people holds 15 survivors after a shipwreck. The sea is too rough to swim. Structural analysis confirms the boat will capsize and everyone will drown unless 5 people leave the boat. No rescue is coming for hours.",
    question: "Is it morally permissible to force five people off the lifeboat to save the remaining ten?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>In a genuine survival situation with no good options, is it morally permissible to actively compel some people to die so that others may live?</strong></p>
               <p>The key moral distinction is between actively forcing people to their deaths versus facing a natural limitation of the lifeboat's capacity. We must also ask: who decides, and by what process?</p>`,
        verdict: "The question is whether compelled sacrifice can ever be morally legitimate — and if so, by what process."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>The boat will definitely capsize with 15 people — all 15 die. With 10 people, 10 survive. The sea is fatal for anyone in the water. The situation cannot be altered (no other boats, no rope, no swimming distance to shore). These are stipulated as certain facts.</p>
               <p>Fifteen people are alive right now, each with equal claim to the limited space. No one caused the shipwreck through wrongdoing.</p>`,
        verdict: "All 15 die without action. 10 survive if 5 leave. All are innocent victims of the same disaster."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>All 15 survivors:</strong> Each has an equal interest in survival. None has forfeited their right to life.</p>
               <p><strong>Those who might be forced off:</strong> Face not just death but the terror of being actively ejected — a profound dignity violation on top of the loss of life.</p>
               <p><strong>Those who remain:</strong> Will survive, but must live with the knowledge of what happened. Psychological trauma is a real harm.</p>
               <p><strong>Society:</strong> Has an interest in what norms govern survival situations and the treatment of the vulnerable.</p>`,
        verdict: "Every person's interest in survival is equal. No one has priority over another."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Equal dignity:</strong> No life is inherently worth more than another. Age, strength, or social status cannot morally determine who is sacrificed.</p>
               <p><strong>The lesser evil principle:</strong> When all available options result in death, choosing the option that minimizes total deaths may be the least-bad choice — but it remains evil.</p>
               <p><strong>Procedural justice:</strong> If any selection must occur, a fair process (lottery) is morally superior to arbitrary or discriminatory selection.</p>
               <p><strong>Voluntarism:</strong> Voluntary self-sacrifice is morally distinct from being compelled to die. Call for volunteers first.</p>`,
        verdict: "If action must occur, it must be through the fairest possible process — a lottery, after seeking volunteers."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Call for volunteers to leave:</strong> Respects autonomy and dignity. Self-sacrifice is heroic, not murder. Must be the first step.</p>
               <p><strong>Option B — Conduct a fair random lottery:</strong> If no volunteers, a lottery treats all lives as equally valuable. Most defensible if compelled action becomes unavoidable.</p>
               <p><strong>Option C — Select based on criteria (age, health, etc.):</strong> Morally impermissible. Assigning differential value to lives based on attributes violates equal dignity.</p>
               <p><strong>Option D — Do nothing — all 15 die together:</strong> Expresses radical equality but results in 15 deaths where 10 were preventable. Whether this is more moral than Option B is a genuine debate.</p>`,
        verdict: "Option A first, then B only if necessary. Option C is impermissible. Option D is defensible but not superior."
      },
      {
        title: "Make a Decision",
        body: `<p>First: urgently call for volunteers. Self-sacrifice is noble and must be honored if offered. If no volunteers come forward and the boat is about to capsize, a random lottery is the most defensible procedure — it acknowledges equal dignity while acting to save as many as possible.</p>
               <p>Rae's framework acknowledges true moral tragedy: situations where no option preserves all moral goods. The lottery minimizes death while honoring equal dignity. Forcing anyone off without a fair process is not permissible.</p>`,
        verdict: "Decision: Seek volunteers first. Use a fair lottery as the last resort — never arbitrary selection."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>Survivors bear deep psychological wounds. Provide care, allow honest testimony, and do not demand that survivors pretend the event was morally clean. It was not — it was a moral tragedy.</p>
               <p>Upon rescue, the full account must be given to authorities. The survivors who remained should not face legal punishment if a fair process was followed. Society must grapple honestly with the moral ambiguity, not demand false certainty.</p>`,
        verdict: "Acknowledge this as genuine moral tragedy. Seek truth, provide care, and resist false resolution."
      }
    ],
    conclusion: "Call for volunteers first — voluntary self-sacrifice is morally heroic and avoids the darkest aspects of compulsion. If no volunteers come forward and the boat is about to sink, a fair random lottery is the most defensible last resort, honoring equal dignity while preventing maximum death. There is no clean answer here — this is a genuine moral tragedy, not a solved equation."
  },

  {
    id: 7,
    title: "The Stolen Bread",
    scenario: "A father whose family has not eaten in three days steals a loaf of bread from a bakery owned by a moderately wealthy baker who will not miss it. The father has tried every legal means of obtaining food and failed.",
    question: "Is the father's theft morally wrong, morally excused, or morally justified?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>When basic survival needs cannot be met through legitimate means, does stealing to prevent starvation constitute a genuine moral wrong — or does extreme necessity alter the moral status of the act?</strong></p>
               <p>We must distinguish between <em>legal wrongness</em> (the theft is a crime) and <em>moral wrongness</em> (is it blameworthy given the circumstances?).</p>`,
        verdict: "The question distinguishes moral wrongness, moral excuse, and moral justification in conditions of extreme need."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>The family has not eaten in three days — a genuine survival emergency. The father has exhausted all legal options. The baker is moderately wealthy and will not experience serious harm from the loss of one loaf.</p>
               <p>The theft is non-violent. The father's motive is entirely to feed his children, not personal gain. There is no immediate institutional safety net available.</p>`,
        verdict: "Extreme need, exhausted alternatives, and minimal harm to the victim are all morally relevant facts."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The father's children:</strong> Face an immediate life-threatening nutritional crisis. Their interest in survival is paramount.</p>
               <p><strong>The father:</strong> Acts from parental love and duty. Bears moral weight of the theft but is motivated entirely by care for his children.</p>
               <p><strong>The baker:</strong> Has a legitimate property interest, but the harm (loss of one loaf) is minor and does not threaten his survival or wellbeing.</p>
               <p><strong>Society:</strong> Has an interest in property rights and law, but also in preventing children from starving to death.</p>`,
        verdict: "Children's survival interest vastly outweighs the baker's interest in one loaf of bread."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>The principle of necessity:</strong> Many moral traditions recognize that extreme necessity can alter the moral calculus of acts that are normally impermissible. Aquinas argued that in dire need, taking what is necessary for survival is not theft in the full moral sense.</p>
               <p><strong>Property rights:</strong> Are legitimate and important, but they exist to serve human flourishing — not to override it when lives are at stake.</p>
               <p><strong>Proportionality:</strong> The minor harm to the baker and the grave harm to the children from inaction are wildly disproportionate.</p>`,
        verdict: "The principle of necessity applies: extreme survival need can justify what is normally impermissible."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Steal the bread:</strong> Violates property rights, but saves children from starvation. Proportionality strongly favors this when all other options are exhausted.</p>
               <p><strong>Option B — Ask the baker openly:</strong> The father could explain his situation. Many bakers would give bread freely. This should be tried first.</p>
               <p><strong>Option C — Do nothing / starve:</strong> Children face death or serious harm. This option accepts grave harm to prevent a minor property rights violation — a disproportionate outcome.</p>`,
        verdict: "Try asking first. If denied and no other option exists, the theft is morally excused — arguably justified — by necessity."
      },
      {
        title: "Make a Decision",
        body: `<p>The theft is morally excused, and in the context of exhausted alternatives and children facing starvation, Rae's tradition (drawing on Aquinas) would say it approaches moral justification. The act remains legally wrong and produces a debt of gratitude and restitution — but it is not morally blameworthy in the way ordinary theft is.</p>
               <p>The deeper moral failure lies not with the father but with a society that allows children to starve when food exists. The systemic injustice frames the father's act.</p>`,
        verdict: "Decision: The theft is morally excused by necessity. Blame is minimal; the systemic failure is the greater moral wrong."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>The father should, when able, repay the baker — not because he was morally wrong to steal, but as an acknowledgment that property rights retain significance even when overridden by necessity. This act of restitution restores dignity to both parties.</p>
               <p>The case demands systemic reflection: what social structures failed this family? Hunger in contexts of abundance is a collective moral failure, and this dilemma should not recur in a just society.</p>`,
        verdict: "Seek restitution when possible. Address the systemic failures that created this impossible situation."
      }
    ],
    conclusion: "The theft is morally excused — and given the circumstances, arguably justified. Aquinas' principle of necessity holds that in extreme need, taking what is required for survival is not fully morally equivalent to ordinary theft. The father's act is legally wrong but minimally blameworthy given exhausted alternatives and the minor harm to the baker. The greater moral failure belongs to systems that left a family without food."
  },

  {
    id: 8,
    title: "The Self-Driving Car Dilemma",
    scenario: "You are an engineer programming the emergency response protocol for a self-driving car. In a brake failure scenario, the car can swerve and kill one pedestrian on the sidewalk, or stay straight and kill three pedestrians in the crosswalk. You must hard-code this decision before the car ships.",
    question: "How should the car be programmed to respond — and who should make that decision?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question has two parts: <strong>(1) What should the car be programmed to do? (2) Is it morally appropriate to pre-program life-and-death decisions into algorithms at all?</strong></p>
               <p>This is unique because it is not a spontaneous human choice — it is a <em>deliberate institutional decision</em> made in advance, embedded in code, with no human judgment at the moment of impact.</p>`,
        verdict: "Both the content of the decision and the legitimacy of pre-programming it are ethical questions."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>Brake failure in autonomous vehicles is possible though rare. The algorithm will determine who dies in such a scenario with certainty. The pedestrian on the sidewalk did not step into traffic — they were stationary.</p>
               <p>The car's occupant purchased the vehicle in part for its safety features. No pedestrian consented to being included in an algorithmic triage system.</p>`,
        verdict: "The sidewalk pedestrian was in a safer position and did not enter the road. This is morally relevant."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The pedestrians in the crosswalk:</strong> Were in a legitimate traffic space but accepted standard traffic risk.</p>
               <p><strong>The pedestrian on the sidewalk:</strong> Was in the safest possible position, expecting no vehicular threat. Being targeted by a swerving car is a uniquely unjust imposition.</p>
               <p><strong>The car's occupant:</strong> Paid for safety technology and has an interest in the car not being programmed to kill them.</p>
               <p><strong>Society:</strong> Has an interest in autonomous vehicle systems that are transparent, just, and publicly accountable.</p>`,
        verdict: "The sidewalk pedestrian holds a morally distinct position — they were not in any traffic risk zone."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Equal dignity:</strong> An algorithm that pre-assigns lower value to any person's life based on their position or demographics is morally unacceptable.</p>
               <p><strong>Procedural justice:</strong> Any life-allocation rule embedded in public infrastructure must be developed through democratic, transparent deliberation — not by a single engineer.</p>
               <p><strong>Non-maleficence:</strong> Actively swerving to hit a pedestrian who was entirely safe moments before crosses from "redirecting harm" to "actively targeting."</p>
               <p><strong>Informed consent:</strong> People who walk on sidewalks have not consented to being within the risk boundary of autonomous vehicles.</p>`,
        verdict: "No individual engineer should make this choice alone. Democratic consent and transparency are required."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Minimize deaths (swerve, kill one):</strong> Numerically efficient, but actively targets a person who was entirely safe. Requires targeting the innocent sidewalk pedestrian.</p>
               <p><strong>Option B — Stay course (kill three):</strong> Does not actively redirect harm toward a safe person. The harm continues on its original trajectory. Worse numerically.</p>
               <p><strong>Option C — Refuse to hard-code this decision:</strong> Most defensible option. Design safety systems so that brake failure is virtually impossible. This is an engineering and policy problem, not primarily an ethics algorithm problem.</p>`,
        verdict: "Option C is most defensible. If forced to choose, Option B avoids actively targeting someone who was safe."
      },
      {
        title: "Make a Decision",
        body: `<p>The most morally responsible decision is to refuse to individuate this as a single engineer's call and advocate loudly for democratic public deliberation on autonomous vehicle ethics. Any rule embedded in the car must be publicly disclosed and democratically approved.</p>
               <p>If forced to choose technically: do not program the car to swerve onto a sidewalk to target someone who was entirely out of harm's way. The act of redirecting lethal force toward a person who was safe crosses a moral line that numerical optimization does not resolve.</p>`,
        verdict: "Decision: Escalate to democratic deliberation. Do not hard-code targeting of safe bystanders."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>Any autonomous vehicle ethics protocol must be publicly published, subject to regulatory review, and updated as societal values evolve through democratic processes. Engineers, ethicists, policymakers, and the public must all participate.</p>
               <p>Invest aggressively in brake redundancy systems that make this scenario practically impossible. The best ethical answer to trolley-style dilemmas is often: build the world so they don't occur.</p>`,
        verdict: "Monitor through public accountability, regulatory oversight, and continuous safety investment."
      }
    ],
    conclusion: "No single engineer should make this decision unilaterally. It requires public, democratic deliberation and transparent disclosure. If technically forced to code something, do not program the car to swerve onto a sidewalk to target a person who was entirely safe — the act of redirecting lethal force toward an innocent bystander who was never in traffic is morally distinct from staying course. But the real answer is to invest in systems that make this scenario impossible."
  },

  {
    id: 9,
    title: "The Climate Sacrifice",
    scenario: "A city council is deciding whether to impose significant economic restrictions on current residents — higher energy costs, fewer jobs, limited consumption — to meaningfully reduce carbon emissions. The benefits will be felt primarily by people not yet born, over the next 50–100 years.",
    question: "Do present generations have binding moral obligations to make real sacrifices for the benefit of future generations they will never meet?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>Can people who do not yet exist hold moral claims against us — and are present generations obligated to accept genuine hardship to protect an unknowable future?</strong></p>
               <p>This involves both the moral standing of future persons and the extent to which present obligations include stewardship of the long-term common good.</p>`,
        verdict: "The question asks about the moral standing of future persons and the scope of present-generation obligations."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>Current emissions trajectories cause documented, predictable harm to future populations through climate change. The science is well-established. Present actions can meaningfully alter outcomes for people 50–100 years from now.</p>
               <p>Economic restrictions cause real, present hardship — particularly to lower-income residents who face higher energy costs and job losses. These are not abstract costs.</p>`,
        verdict: "Both the reality of climate harm and the reality of present economic harm are morally relevant facts."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>Future generations:</strong> Will inherit the environmental and climatic consequences of present decisions. Cannot advocate for themselves.</p>
               <p><strong>Current lower-income residents:</strong> Bear the highest proportional burden of economic restrictions while being least responsible for emissions and least able to absorb costs.</p>
               <p><strong>Current wealthy residents and corporations:</strong> Bear lower proportional burden; historically responsible for greater emissions.</p>
               <p><strong>The natural world:</strong> Many ethical traditions assign intrinsic value to creation independent of human benefit.</p>`,
        verdict: "Future people have real interests. Present poor bear disproportionate cost. Both must be centered in the policy design."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Stewardship:</strong> Many traditions — including the Christian tradition Rae draws from — hold that humans are trustees, not owners, of creation. We hold the world in trust for those who come after.</p>
               <p><strong>Intergenerational justice:</strong> If we would condemn an ancestor for knowingly degrading our environment for short-term gain, consistency demands we apply the same standard to ourselves.</p>
               <p><strong>Justice toward the vulnerable:</strong> Climate policy that burdens the poor most heavily, while exempting the wealthy who created the problem, is unjust even if the goal is good.</p>`,
        verdict: "Stewardship and intergenerational justice ground the obligation. Justice demands equitable burden distribution."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Impose restrictions equally:</strong> Fails justice — equal burdens are not equitable when starting positions are unequal.</p>
               <p><strong>Option B — Progressive restrictions (more burden on high emitters, protect the poor):</strong> Morally superior. Addresses climate while attending to present justice.</p>
               <p><strong>Option C — Delay action:</strong> Passes compounding costs to future generations. Violates stewardship. Morally impermissible if the science is clear.</p>
               <p><strong>Option D — Voluntary measures only:</strong> Likely insufficient given collective action problems, but less coercive.</p>`,
        verdict: "Option B is most morally defensible — act now, distribute burden equitably, protect the vulnerable present and future."
      },
      {
        title: "Make a Decision",
        body: `<p>Present generations do have binding moral obligations to future generations, grounded in stewardship, intergenerational justice, and the known consequences of inaction. These obligations become especially weighty given scientific certainty about climate trajectories.</p>
               <p>However, climate policy must be designed with justice for present vulnerable populations at its center — not as an afterthought. Action that protects future generations by impoverishing present poor people is not fully just, even if it is environmentally necessary.</p>`,
        verdict: "Decision: Act — equitably. Stewardship demands action. Justice demands fair burden distribution."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>Track both environmental outcomes and equity outcomes. A policy that reduces emissions while increasing poverty is not a moral success. Regularly assess the distribution of costs and benefits and adjust policy accordingly.</p>
               <p>Engage future generations symbolically through long-range planning institutions, youth representation in policy bodies, and explicit long-term impact assessments. The absent must have advocates in every deliberation.</p>`,
        verdict: "Monitor both environmental and equity impacts. Build institutional advocacy for those not yet born."
      }
    ],
    conclusion: "Present generations have genuine moral obligations to future generations, grounded in stewardship of creation and intergenerational justice. Knowingly degrading the world for short-term comfort, when we have the means to act, is a moral failure. However, climate policy must center justice for present vulnerable populations — action that protects the future by impoverishing the present poor is not fully just. The obligation is to act equitably and urgently."
  },

  {
    id: 10,
    title: "The Euthanasia Request",
    scenario: "A terminally ill patient with six months to live is experiencing significant but manageable pain. She is mentally competent, has considered her options fully, and clearly requests physician-assisted death to end her life on her own terms. Her family supports her decision.",
    question: "Is a physician morally permitted — or obligated — to assist in this patient's death upon her request?",
    steps: [
      {
        title: "State the Ethical Question Clearly",
        body: `<p>The question is: <strong>Does patient autonomy over one's own death, combined with terminal illness and suffering, create a moral permission or obligation for a physician to assist in ending that patient's life?</strong></p>
               <p>We must carefully distinguish: (1) the patient's right to refuse treatment, (2) the physician's right of conscientious objection, and (3) whether assisting in death is morally different from allowing death.</p>`,
        verdict: "The question involves autonomy, physician duty, the nature of suffering, and the sanctity of life."
      },
      {
        title: "Identify the Relevant Facts",
        body: `<p>The patient is terminally ill with a clear prognosis. She is mentally competent and her decision is informed and consistent. Her pain is significant but manageable with palliative care. She has six months to live.</p>
               <p>The physician's conscience, professional ethics, and legal context must all be considered. Good palliative care can address much — though not all — of her suffering. Her family is supportive.</p>`,
        verdict: "Pain is real but manageable. Competence is clear. The patient's autonomy is genuine and informed."
      },
      {
        title: "Identify Stakeholders & Their Interests",
        body: `<p><strong>The patient:</strong> Has a profound interest in controlling the circumstances of her own death. Values dignity, autonomy, and relief from suffering.</p>
               <p><strong>The physician:</strong> Has a professional duty of care, a conscience, and possibly a deep commitment to non-maleficence that conflicts with this request.</p>
               <p><strong>The family:</strong> Supports her wishes. Their grief and the quality of her remaining time matter.</p>
               <p><strong>Society and medicine:</strong> The normalization of physician-assisted death has broad implications for how vulnerable patients — the elderly, disabled, depressed — experience medical care.</p>`,
        verdict: "Patient autonomy is real and weighty. Physician conscience is also real. Systemic effects on vulnerable populations cannot be ignored."
      },
      {
        title: "Identify Applicable Ethical Principles",
        body: `<p><strong>Autonomy:</strong> Competent persons have a fundamental right to make decisions about their own bodies, including decisions about how and when to die.</p>
               <p><strong>Non-maleficence and the physician's role:</strong> The Hippocratic tradition holds that physicians must not actively cause death. Many physicians see this as a non-negotiable limit on their role.</p>
               <p><strong>Sanctity of life:</strong> Many traditions hold that human life has inherent dignity that prohibits deliberate ending, even with consent.</p>
               <p><strong>Compassion:</strong> The duty to relieve suffering is also a core medical value. Refusing all assistance may itself be experienced as abandonment.</p>`,
        verdict: "Autonomy and compassion support the request. Sanctity of life and the physician's role create serious moral constraints."
      },
      {
        title: "List & Evaluate the Options",
        body: `<p><strong>Option A — Provide assisted death:</strong> Honors autonomy and relieves suffering. Conflicts with many physicians' understanding of their role and with the sanctity of life principle.</p>
               <p><strong>Option B — Aggressive palliative care:</strong> Addresses pain and suffering without crossing the line of actively ending life. May not satisfy the patient's desire for control and timing.</p>
               <p><strong>Option C — Withdraw life-sustaining treatment (if applicable):</strong> Widely accepted morally and legally — allowing death vs. causing death is a significant moral distinction.</p>
               <p><strong>Option D — Conscientious referral:</strong> The physician declines personally but refers to a colleague who is willing. Respects both conscience and patient autonomy.</p>`,
        verdict: "Options B, C, and D are more defensible than A from within Rae's tradition. D is a morally important middle path."
      },
      {
        title: "Make a Decision",
        body: `<p>Scott Rae's framework, grounded in a Christian ethical tradition, holds that human life has inherent sanctity that cannot be ended by physician action even with consent. The distinction between <em>allowing to die</em> and <em>actively killing</em> is morally significant.</p>
               <p>The most defensible path: provide aggressive, expert palliative care to address suffering maximally; honor her right to refuse any life-sustaining treatment; and if the physician cannot in conscience assist in death, provide a compassionate referral rather than abandonment. The patient's autonomy is real — but so is the physician's conscience.</p>`,
        verdict: "Decision: Maximize palliative care, honor treatment refusal, and refer compassionately if needed — do not actively assist death."
      },
      {
        title: "Monitor & Evaluate the Decision",
        body: `<p>Monitor the quality of the patient's remaining life closely. Revisit pain management regularly. Maintain open, compassionate communication. Ensure she never feels abandoned or that her autonomy is being dismissed.</p>
               <p>At the policy level: this case demands investment in palliative care education and access. Much of the demand for euthanasia arises from inadequate pain management and fear of abandonment — systemic failures, not irresolvable moral dilemmas.</p>`,
        verdict: "Monitor quality of remaining life, ensure her dignity, and invest in systemic palliative care improvements."
      }
    ],
    conclusion: "Within Scott Rae's framework, actively assisting in the patient's death is not morally permissible — the sanctity of life and the physician's non-maleficence principle hold even in the face of genuine autonomy. The moral path is: provide the best possible palliative care, honor the patient's right to refuse life-sustaining treatment, and offer compassionate referral if the physician cannot in conscience proceed. The patient's autonomy is deeply respected — her suffering must be genuinely addressed, and she must never be abandoned."
  }
];

// ─────────────────────────────────────────────
//  STATE & RENDER
// ─────────────────────────────────────────────
let current = 0;

function renderSidebar() {
  const list = document.getElementById("problemList");
  list.innerHTML = "";
  PROBLEMS.forEach((p, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.innerHTML = `<span class="num">${i + 1}.</span> ${p.title}`;
    btn.onclick = () => goTo(i);
    if (i === current) btn.classList.add("active");
    li.appendChild(btn);
    list.appendChild(li);
  });
}

function renderProblem(idx) {
  const p = PROBLEMS[idx];

  document.getElementById("problemMeta").textContent = `Problem ${idx + 1} of ${PROBLEMS.length}`;
  document.getElementById("problemTitle").textContent = p.title;
  document.getElementById("problemScenario").textContent = p.scenario;
  document.getElementById("problemQuestion").textContent = p.question;

  const stepsList = document.getElementById("stepsList");
  stepsList.innerHTML = "";

  p.steps.forEach((step, i) => {
    const card = document.createElement("div");
    card.className = "step-card";

    const header = document.createElement("div");
    header.className = "step-header";
    header.innerHTML = `
      <div class="step-number">${i + 1}</div>
      <div class="step-meta">
        <div class="step-label">${STEP_LABELS[i]}</div>
        <div class="step-title">${STEP_NAMES[i]}</div>
      </div>
      <div class="step-toggle" id="toggle-${i}">▶</div>
    `;

    const body = document.createElement("div");
    body.className = "step-body";
    body.id = `body-${i}`;
    body.innerHTML = `
      ${step.body}
      <div class="step-verdict">⟶ ${step.verdict}</div>
    `;

    header.onclick = () => toggleStep(i);
    card.appendChild(header);
    card.appendChild(body);
    stepsList.appendChild(card);
  });

  // Open step 1 by default
  toggleStep(0);

  document.getElementById("conclusionText").textContent = p.conclusion;
  document.getElementById("navCounter").textContent = `${idx + 1} / ${PROBLEMS.length}`;
  document.getElementById("prevBtn").disabled = idx === 0;
  document.getElementById("nextBtn").disabled = idx === PROBLEMS.length - 1;

  renderSidebar();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleStep(i) {
  const body = document.getElementById(`body-${i}`);
  const toggle = document.getElementById(`toggle-${i}`);
  const isOpen = body.classList.contains("open");
  body.classList.toggle("open", !isOpen);
  toggle.classList.toggle("open", !isOpen);
}

function navigate(dir) {
  const next = current + dir;
  if (next < 0 || next >= PROBLEMS.length) return;
  current = next;
  renderProblem(current);
}

function goTo(idx) {
  current = idx;
  renderProblem(current);
}

// renderProblem(0) is called after successful login
