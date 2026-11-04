---
layout: default
home: true
---


<!-- later try:
https://david-abel.github.io/index.html -->



<section class="profile" aria-labelledby="profile-name" markdown="1">

<div class="profile-heading" markdown="1">

# Yilan Chen
{: #profile-name}

<p class="profile-subtitle">Ph.D. candidate · UC San Diego</p>

</div>
<div class="profile-bio" markdown="1">

<!-- My research aims to build AI systems that **learn efficiently and generalize reliably**.
{: .profile-goal} -->

<!-- <figure>
<img src="/images/chenyilan.jpg" align="left" width="200px" style="margin-right:20px" alt="Yilan's picture" title="2019 at Beijing."/>
<figcaption>2019 at Beijing.</figcaption>
</figure> -->

I am a final-year Ph.D. student in the [Department of Computer Science and Engineering](https://cse.ucsd.edu/) at the University of California San Diego (UCSD), working with Prof. [Arya Mazumdar](https://mazumdar.ucsd.edu/index.html).
During my Ph.D., I have interned at AWS Agentic AI, Google Research, and RIKEN AIP.

<nav class="profile-links" aria-label="Profile links">
  <!-- Icon sources and licenses: {% include icons/LICENSE.txt %} -->
  <a href="mailto:yic031@ucsd.edu">
    {% include icons/email.svg %}
    <span>Email</span>
  </a>
  <!-- <a href="/files/CV_Yilan_Chen.pdf">
    {% include icons/cv.svg %}
    <span>CV</span>
  </a> -->
  <a href="https://scholar.google.com/citations?user=6wmzpRIAAAAJ&amp;hl=en">
    {% include icons/google-scholar.svg %}
    <span>Google Scholar</span>
  </a>
  <a href="https://github.com/yilanchen6">
    {% include icons/github.svg %}
    <span>GitHub</span>
  </a>
  <a href="https://www.linkedin.com/in/yilan-chen-79285a122/">
    {% include icons/linkedin.svg %}
    <span>LinkedIn</span>
  </a>
  <a href="https://x.com/yilanchen06">
    {% include icons/x.svg %}
    <span>X</span>
  </a>
</nav>

</div>
<div class="profile-portrait">
  <img class="profile-photo" src="/images/chenyilan3.jpg" width="192" height="192" alt="Yilan Chen">
</div>
</section>
<!-- [[Twitter]](https://twitter.com/yilanchen06)
[[Zhihu]](https://www.zhihu.com/people/yilan-24-8/posts) -->

<aside class="hiring-notice" aria-label="Career opportunities">
  <span class="availability-label">Open to full-time roles</span>
  <p>Research Scientist, Research Engineer, or Member of Technical Staff in LLM training, reinforcement learning, and AI agents. <a href="mailto:yic031@ucsd.edu">Let’s connect <span aria-hidden="true">↗</span></a></p>
</aside>

<!-- I am interning at [deep learning theory team](https://aip.riken.jp/labs/generic_tech/deep_learn_theory/) in RIKEN AIP advised by Prof. [Taiji Suzuki](https://ibis.t.u-tokyo.ac.jp/suzuki/) this summer. -->





<section class="research-overview" aria-labelledby="research-interests" markdown="1">

## Research
{: #research-interests}

My research aims to build AI systems that **learn efficiently and generalize reliably**.
I pursue this goal by developing better learning algorithms, establishing their theoretical foundations, and studying how models acquire and transfer knowledge. My current focus is **LLM post-training** for reasoning models and agents.
{: .research-intro}

<article class="research-theme" aria-labelledby="research-post-training" markdown="1">

<figure class="research-visual">
  <img src="/assets/images/research/post-training.svg" width="360" height="170" loading="lazy" alt="Teacher supervision and reward feedback guide student learning.">
</figure>

<div class="research-description" markdown="1">

### LLM Post-training & Agent Learning
{: #research-post-training}

I develop reinforcement learning and on-policy distillation methods that help reasoning models and agents learn more effectively from teacher supervision and task feedback. My work aligns token-level learning signals with task rewards, connects distillation to RL advantage estimation, and uses privileged training information to improve agent learning.

<div class="research-papers">
  <a href="https://arxiv.org/abs/2610.14572" title="NeurIPS 2026 PretoPost Workshop">Reward-Aligned Distillation (Preprint 2026)</a>
  <a href="https://arxiv.org/abs/2610.18883" title="NeurIPS 2026 PretoPost Workshop">Token Utility (Preprint 2026)</a>
  <a href="https://openreview.net/pdf?id=R1peldcnUL" title="NeurIPS 2026 PretoPost Workshop">PINT (Preprint 2026)</a>
</div>

</div>
</article>

<article class="research-theme" aria-labelledby="research-learning-theory" markdown="1">

<figure class="research-visual">
  <img src="/assets/images/research/learning-theory.svg" width="360" height="170" loading="lazy" alt="Training dynamics and data structure inform generalization analysis and dataset distillation.">
</figure>

<div class="research-description" markdown="1">

### Learning Theory & Generalization
{: #research-learning-theory}

I study how data, optimization, and model structure determine learning efficiency and generalization. My work develops generalization bounds through connections between training trajectories and kernel methods, analyzes transformer in-context learning, and establishes guarantees for dataset distillation using compact synthetic datasets.

<div class="research-papers">
  <a href="https://arxiv.org/abs/2506.11357">Training Trajectories &amp; Generalization (NeurIPS 2025)</a>
  <a href="https://openreview.net/pdf?id=WI2VpcBdnd">Dataset Distillation (NeurIPS 2024)</a>
  <a href="https://openreview.net/pdf?id=8Ba7VJ7xiM">Loss Path Kernels (NeurIPS 2023)</a>
</div>

</div>
</article>

<article class="research-theme" aria-labelledby="research-interpretability" markdown="1">

<figure class="research-visual">
  <img src="/assets/images/research/knowledge-transfer.svg" width="360" height="170" loading="lazy" alt="Cross-task linearity: for models fine-tuned from the same pretrained checkpoint, interpolating weights yields features approximately matching interpolated model features.">
</figure>

<div class="research-description" markdown="1">

### Interpretability & Knowledge Transfer
{: #research-interpretability}

I investigate what knowledge neural networks acquire and how it is represented and transferred across models and tasks. My work studies relationships between fine-tuned representations, improves automated neuron explanations, and quantifies concepts learned through distillation.

<div class="research-papers">
  <a href="https://arxiv.org/abs/2402.03660">Cross-Task Linearity (ICML 2024)</a>
  <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9864081" title="Quantifying the Knowledge in a DNN to Explain Knowledge Distillation for Classification">Quantifying Knowledge in a DNN (TPAMI 2023)</a>
  <a href="https://arxiv.org/abs/2310.06200" title="NeurIPS 2023 Workshop on Attributing Model Behavior at Scale">Automated Neuron Explanations (NeurIPS Workshop 2023)</a>
</div>

</div>
</article>

</section>




{% include publications.html %}



<!-- ## Preprint -->





## Experience

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>AWS Agentic AI</h3>
  <p class="experience-date">Jun. – Sep. 2026</p>
</header>
<p>Applied Scientist Intern · Santa Clara, USA</p>

Host: [Vijay Lingam](https://www.linkedin.com/in/vijaylingam)

<p class="experience-topic">LLM Post-training: Reinforcement Learning and Distillation</p>
</article>

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>Google Research</h3>
  <p class="experience-date">Jun. – Sep. 2025</p>
</header>
<p>Student Researcher · New York, USA</p>

Hosts: [Ankit Singh Rawat](https://ankitsrawat.github.io/home/), [Aditya Krishna Menon](https://akmenon.github.io/)

<p class="experience-topic">On-Policy Distillation for LLM Reasoning</p>
</article>

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>RIKEN AIP</h3>
  <p class="experience-date">Jun. – Sep. 2024</p>
</header>
<p>Research Intern · Tokyo, Japan</p>

Advisor: Prof. [Taiji Suzuki](https://ibis.t.u-tokyo.ac.jp/suzuki/)

<p class="experience-topic">Theory of Neural Networks and Language Models</p>
</article>

<section class="education" aria-labelledby="education" markdown="1">

## Education

<article class="education-entry" markdown="1">
<header class="education-header">
  <h3>University of California San Diego</h3>
  <p class="education-date">Sep. 2022 – Mar. 2027 (expected)</p>
</header>
<p>Ph.D. in Computer Science</p>

Advisor: [Arya Mazumdar](https://mazumdar.ucsd.edu/)

</article>

<article class="education-entry" markdown="1">
<header class="education-header">
  <h3>University of California San Diego</h3>
  <p class="education-date">Sep. 2020 – Jun. 2022</p>
</header>
<p>M.S. in Computer Science</p>

<!-- Advisors: [Tsui-Wei (Lily) Weng](https://lilywenglab.github.io/) and [Lam M. Nguyen](https://www.lamnguyen.org/) (IBM Research) -->

</article>

<article class="education-entry" markdown="1">
<header class="education-header">
  <h3>Xi’an Jiaotong University</h3>
  <p class="education-date">Aug. 2015 – Jun. 2019</p>
</header>
<p>B.E. in Information Engineering</p>
</article>

</section>

<!-- ## Notes
- [A Note about NTK Derivation](/files/ntk_derivation.pdf)
- [Some Derivations and Proofs about Linearized Networks](/files/linearized_network.pdf) -->


<!-- **<font size='5'>Projects</font>**
* [Prototype Selection for Nearest Neighbor](/files/Prototype_Selection.pdf)
* [Coordinate Descent](/files/coord_desc.pdf) -->




## Talks

<div class="talk-list">
  <article class="talk-entry">
    <header class="talk-header">
      <h3>Generalization Bound of Gradient Flow through Training Trajectory and Data-dependent Kernel</h3>
    </header>
    <ul class="talk-events">
      <li><time datetime="2025-03">Mar. 2025</time><span><a href="https://sites.google.com/ucsd.edu/encore-llm/">EnCORE Institute Workshop on Theoretical Perspectives on LLMs</a></span></li>
    </ul>
  </article>
  <article class="talk-entry">
    <header class="talk-header">
      <h3>Analyzing Neural Networks through Equivalent Kernels</h3>
      <a class="talk-slides" href="/files/LPK_SOCAMS.pdf" aria-label="Slides: Analyzing Neural Networks through Equivalent Kernels">Slides</a>
    </header>
    <ul class="talk-events">
      <li><time datetime="2024-08">Aug. 2024</time><span><a href="https://tensorworkshop.github.io/RIKENAIP_SJTUCS2024/">RIKEN AIP – SJTU CS Joint Workshop on Machine Learning and Brain-like Intelligence</a></span></li>
      <li><time datetime="2024-04">Apr. 2024</time><span><a href="https://www.socams.org/home">Southern California Applied Mathematics Symposium (SOCAMS 2024)</a></span></li>
    </ul>
  </article>
  <article class="talk-entry">
    <header class="talk-header">
      <h3>Analyzing Generalization of Neural Networks through Loss Path Kernels</h3>
      <a class="talk-slides" href="/files/LPK.pdf" aria-label="Slides: Analyzing Generalization of Neural Networks through Loss Path Kernels">Slides</a>
    </header>
    <ul class="talk-events">
      <li><time datetime="2024-01">Jan. 2024</time><span>ByteDance</span></li>
      <li><time datetime="2023-11">Nov. 2023</time><span>AI TIME</span></li>
    </ul>
  </article>
</div>



## Teaching
- [DSC 212: Probability and Statistics](https://sites.google.com/ucsd.edu/dsc212f24/home), TA, Fall 2024
- [DSC 140B: Representation Learning](https://lilywenglab.github.io/DSC-140B-SP24/), TA, Spring 2024
- [DSC 210: Numerical Linear Algebra](https://lilywenglab.github.io/DSC-210-fa23/), TA, Fall 2023
- [DSC 291: Trustworthy Machine Learning](https://lilywenglab.github.io/dsc-291-sp23/), Tutor, Fall 2021






<!-- ## Courses
- Machine Learning:
  - CSE 250A Probabilistic Reason & Learning  A+
  - CSE 251A ML: Learning Algorithms  A+
  - CSE 251C ML: Machine Learning Theory  A
  - CSE	252A Computer Vision I  A+
  - CSE	257  Search and Optimization A

- Math:
  - MATH 245A	Convex Analysis & Optimization I  A
  - MATH 245B	Convex Analysis & Optimization II  A
  - ECE	269   Linear Algebra and Application A
  - MATH 281A Mathematical Statistics ongoing -->






## Professional Service
- Conference Reviewer: ICML, NeurIPS, ICLR
- Area Chair: ICLR 2026 DeLTa Workshop
- Journal Reviewer: Journal of Optimization Theory and Applications (JOTA)
<!-- - Program Committee: AAAI 2023 Workshop MLmDS -->
