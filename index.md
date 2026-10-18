---
layout: default
home: true
---


<!-- later try:
https://david-abel.github.io/index.html -->



<section class="profile" aria-labelledby="profile-name" markdown="1">

<div class="profile-portrait">
  <img class="profile-photo" src="/images/chenyilan3.jpg" width="176" height="176" alt="Yilan Chen">
</div>

<div class="profile-bio" markdown="1">

# Yilan Chen
{: #profile-name}

<p class="profile-subtitle">Ph.D. candidate · UC San Diego</p>

<!-- <figure>
<img src="/images/chenyilan.jpg" align="left" width="200px" style="margin-right:20px" alt="Yilan's picture" title="2019 at Beijing."/>
<figcaption>2019 at Beijing.</figcaption>
</figure> -->

I am a final-year Ph.D. candidate in [Computer Science and Engineering Department](https://cse.ucsd.edu/) at University of California San Diego (UCSD) working with Prof. [Arya Mazumdar](https://mazumdar.ucsd.edu/index.html). 
<!-- I also work closely with Prof. [Taiji Suzuki](https://ibis.t.u-tokyo.ac.jp/suzuki/) at University of Tokyo. -->
<!-- I'm fortunate to be advised by Prof. [Tsui-Wei (Lily) Weng](https://lilywenglab.github.io/).  -->
I received my M.S. degree from UCSD and B.E. degree from [Xi'an Jiaotong University](http://en.xjtu.edu.cn/). 
During my Ph.D., I haved interned at AWS Agentic AI, Google Research, and RIKEN AIP.
<!-- Here is my [CV](/files/CV_Yilan_Chen.pdf).  -->

<nav class="profile-links" aria-label="Profile links">
  <!-- Icon sources and licenses: {% include icons/LICENSE.txt %} -->
  <a href="https://scholar.google.com/citations?user=6wmzpRIAAAAJ&amp;hl=en">
    {% include icons/google-scholar.svg %}
    <span>Google Scholar</span>
  </a>
  <a href="https://www.linkedin.com/in/yilan-chen-79285a122/">
    {% include icons/linkedin.svg %}
    <span>LinkedIn</span>
  </a>
</nav>

</div>
</section>
<!-- [[Twitter]](https://twitter.com/yilanchen06)
[[Zhihu]](https://www.zhihu.com/people/yilan-24-8/posts) -->

**I’m looking for full-time Research Scientist, Research Engineer, or Member of Technical Staff roles in LLM training, reinforcement learning, and AI agents. If your team is hiring, I’d love to connect!**
{: .hiring-notice}

<!-- I am interning at [deep learning theory team](https://aip.riken.jp/labs/generic_tech/deep_learn_theory/) in RIKEN AIP advised by Prof. [Taiji Suzuki](https://ibis.t.u-tokyo.ac.jp/suzuki/) this summer. -->





## Research Interests


<!-- My current research interests are theoretical machine learning and its applications, with a focus on deep learning theory (optimization, generalization, and robustness). My research goal is to establish theoretical foundations for modern deep learning models and develop principled algorithms for real-world applications. -->

<!-- My research aims to bridge the gap between theory and applications of machine learning by establishing theoretical foundations for modern deep learning models and developing principled algorithms for real-world applications. -->

I develop algorithms for **LLM post-training**, focusing on **reinforcement learning and on-policy distillation** for reasoning models and coding agents. My research combines algorithm design and theoretical analysis with distributed LLM training and empirical evaluation. Recent work includes Reward-Aligned Distillation and agent self-distillation using privileged information.

My broader research spans machine learning theory, including transformer in-context learning, provable dataset distillation, neural-network generalization, and connections between neural networks and kernel methods.

Feel free to drop me an email if you would like to collaborate or have a discussion!
<!-- - Reinforcement learning theory -->




<section class="publications" aria-labelledby="publications" markdown="1">

## Publications

### LLM Post-training & Agents
- [Reward-Aligned Distillation.](https://arxiv.org/pdf/2610.14572) [[project page]](https://reward-aligned-distillation.github.io/)<br>
**Yilan Chen**, Zian Su, Manish Prajapat, Dingmin Wang, Rein Houthooft, Rui Song, Vijay Lingam.<br>
<span class="publication-venue">Under review; also accepted at NeurIPS 2026 PretoPost Workshop.</span>

- [PINT: Privileged Information Internalization for Agentic RL.](https://openreview.net/pdf?id=R1peldcnUL)<br>
Zian Su, **Yilan Chen**, Manish Prajapat, Rein Houthooft, Rui Song, Vijay Lingam.<br>
<span class="publication-venue">Under review; also accepted at NeurIPS 2026 PretoPost Workshop.</span>

- [Token Utility for On-Policy Distillation via Local Trust-Region Optimization.](https://arxiv.org/pdf/2610.18883)<br>
Narayanan Sadagopan, **Yilan Chen**, Vijay Lingam.<br>
<span class="publication-venue">Under review; also accepted at NeurIPS 2026 PretoPost Workshop.</span>

- [BridgeSim: Unveiling the OL-CL Gap in End-to-End Autonomous Driving.](https://arxiv.org/pdf/2604.10856)<br>
Seth Z. Zhao<sup>1</sup>, Luobin Wang<sup>1</sup>, Hongwei Ruan, Yuxin Bao, **Yilan Chen**, et al.<br>
<span class="publication-venue">Conference on Robot Learning (CoRL 2026).</span>

- [Cross-Task Linearity Emerges in the Pretraining-Finetuning Paradigm.](https://arxiv.org/pdf/2402.03660.pdf) [[code]](https://github.com/zzp1012/Cross-Task-Linearity) <br>
Zhanpeng Zhou<sup>1</sup>, Zijun Chen<sup>1</sup>, **Yilan Chen**, Bo Zhang, Junchi Yan.<br>
<span class="publication-venue">Forty-first International Conference on Machine Learning (ICML 2024).</span>


### Machine Learning Theory
- [Generalization Bound of Gradient Flow through Training Trajectory and Data-dependent Kernel.](https://openreview.net/pdf/af0ea9dcf0fa1cc544beb7e368004a6cec2d049e.pdf)<br>
**Yilan Chen**, Zhichao Wang, Wei Huang, Andi Han, Taiji Suzuki, Arya Mazumdar.<br>
<span class="publication-venue">Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025).</span>

- [How Does Label Noise Gradient Descent Improve Generalization in the Low SNR Regime？](https://arxiv.org/pdf/2510.17526)<br>
Wei Huang<sup>1</sup>, Andi Han<sup>1</sup>, Yujin Song, **Yilan Chen**, Denny Wu, Difan Zou, Taiji Suzuki.<br>
<span class="publication-venue">Thirty-Ninth Annual Conference on Neural Information Processing Systems (NeurIPS 2025).</span>

- [Provable and Efficient Dataset Distillation for Kernel Ridge Regression.](https://openreview.net/pdf?id=WI2VpcBdnd) [[code]](https://github.com/Trustworthy-ML-Lab/provable-efficient-dataset-distill-KRR) [[project page]](https://lilywenglab.github.io/provable-efficient-dataset-distill-KRR/)<br>
**Yilan Chen**, Wei Huang, Tsui-Wei Weng.<br>
<span class="publication-venue">Thirty-eighth Conference on Neural Information Processing Systems (NeurIPS 2024).</span>

- [Analyzing Generalization of Neural Networks through Loss Path Kernels.](https://openreview.net/pdf?id=8Ba7VJ7xiM) [[code]](https://github.com/Trustworthy-ML-Lab/NN-LPK) [[slides]](/files/LPK.pdf) [[poster]](/files/LPK_poster.pdf) [[video]](https://nips.cc/virtual/2023/poster/72664)<br>
**Yilan Chen**, Wei Huang, Hao Wang, Charlotte Loh, Akash Srivastava, Lam M. Nguyen, Tsui-Wei Weng.<br>
<span class="publication-venue">Thirty-seventh Conference on Neural Information Processing Systems (NeurIPS 2023).</span>

- [Analyzing Deep PAC-Bayesian Learning with Neural Tangent Kernel: Convergence, Analytic Generalization Bound, and Efficient Hyperparameter Selection.](https://openreview.net/pdf?id=nEX2q5B2RQ)<br>
Wei Huang<sup>1</sup>, Chunrui Liu<sup>1</sup>, **Yilan Chen**, Richard Yi Da Xu, Miao Zhang, Tsui-Wei Weng.<br>
<span class="publication-venue">Transactions on Machine Learning Research (TMLR 2023).</span>

- [On the Equivalence between Neural Network and Support Vector Machine.](https://arxiv.org/pdf/2111.06063.pdf) [[code]](https://github.com/leslie-CH/equiv-nn-svm)[[slides]](/files/SVM_Slides.pdf)[[poster]](/files/SVM_NeurIPS_2021_poster.pdf)[[video]](https://neurips.cc/virtual/2021/poster/27419)<br>
**Yilan Chen**, Wei Huang, Lam M. Nguyen, Tsui-Wei Weng.<br>
<span class="publication-venue">Thirty-fifth Conference on Neural Information Processing Systems (NeurIPS 2021).</span>


### Interpretable Machine Learning
- [The Importance of Prompt Tuning for Automated Neuron Explanations.](https://arxiv.org/pdf/2310.06200.pdf) [[code]](https://github.com/Trustworthy-ML-Lab/Efficient-LLM-automated-interpretability)<br>
Justin Lee<sup>1</sup>, Tuomas Oikarinen<sup>1</sup>, Arjun Chatha, Keng-Chi Chang, **Yilan Chen**, Tsui-Wei Weng.<br>
<span class="publication-venue">NeurIPS 2023 Workshop on Attributing Model Behavior at Scale.</span>

- [Quantifying the Knowledge in a DNN to Explain Knowledge Distillation for Classification.](https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=9864081)<br>
Quanshi Zhang<sup>1</sup>, Xu Cheng<sup>1</sup>, **Yilan Chen**, Zhefan Rao.<br>
<span class="publication-venue">IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI 2023).</span>

- [Explaining Knowledge Distillation by Quantifying the Knowledge.](https://arxiv.org/pdf/2003.03622.pdf)<br>
Xu Cheng, Zhefan Rao<sup>2</sup>, **Yilan Chen**<sup>2</sup>, Quanshi Zhang.<br>
<span class="publication-venue">IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR 2020).</span>

</section>



<!-- ## Preprint -->





## Experience

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>AWS Agentic AI</h3>
  <p class="experience-date">Jun. - Sep. 2026</p>
</header>
<p>Applied Scientist Intern · Santa Clara, USA.</p>

Hosts: [Vijay Lingam](https://www.linkedin.com/in/vijaylingam)

<p class="experience-topic">LLM Post-training: Reinforcement Learning and Distillation</p>
</article>

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>Google Research</h3>
  <p class="experience-date">Jun. - Sep. 2025</p>
</header>
<p>Student researcher · New York, USA.</p>

Hosts: [Ankit Singh Rawat](https://ankitsrawat.github.io/home/), [Aditya Krishna Menon](https://akmenon.github.io/)

<p class="experience-topic">On-Policy Distillation for LLM Reasoning</p>
</article>

<article class="experience-entry" markdown="1">
<header class="experience-header">
  <h3>RIKEN AIP</h3>
  <p class="experience-date">Jun. - Sep. 2024</p>
</header>
<p>Research intern · Tokyo, Japan.</p>

Advisor: Prof. [Taiji Suzuki](https://ibis.t.u-tokyo.ac.jp/suzuki/)

<p class="experience-topic">Theory of neural networks and language models.</p>
</article>

<!-- ## Notes
- [A Note about NTK Derivation](/files/ntk_derivation.pdf)
- [Some Derivations and Proofs about Linearized Networks](/files/linearized_network.pdf) -->


<!-- **<font size='5'>Projects</font>**
* [Prototype Selection for Nearest Neighbor](/files/Prototype_Selection.pdf)
* [Coordinate Descent](/files/coord_desc.pdf) -->




## Talks
Generalization Bound of Gradient Flow through Training Trajectory and Data-dependent Kernel 
- Mar 2025 - [EnCORE Institute Workshop on Theoretical Perspectives on LLMs](https://sites.google.com/ucsd.edu/encore-llm/)

Analyzing Neural Networks through Equivalent Kernels [[slides]](/files/LPK_SOCAMS.pdf)
- Aug 2024 - [RIKEN AIP – SJTU CS Joint Workshop on Machine Learning and Brain-like Intelligence](https://tensorworkshop.github.io/RIKENAIP_SJTUCS2024/)
- Apr 2024 - [Southern California Applied Mathematics Symposium (SOCAMS 2024)](https://www.socams.org/home)

Analyzing Generalization of Neural Networks through Loss Path Kernels [[slides]](/files/LPK.pdf)
- Jan 2024 - ByteDance
- Nov 2023 - AI TIME 



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




## Contact

University of California San Diego, La Jolla, CA<br>
Email: yic031 [at] ucsd.edu
