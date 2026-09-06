import { defineConfig } from 'vitepress'

const themeBootstrapScript = `
(function () {
  try {
    var DARK_THEMES = ['nord', 'neon', 'navy-blue'];
    var t = localStorage.getItem('qubes-theme') || 'default';
    var html = document.documentElement;
    if (t === 'default') return;
    html.setAttribute('data-theme', t);
    if (DARK_THEMES.indexOf(t) !== -1) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  } catch (e) {}
})();
`.trim()

export default defineConfig({
  base: '/bed-docs/',
  title: 'B.Ed Study Material',
  appearance: 'light',
  head: [
    ['meta', { name: 'color-scheme', content: 'light dark' }],
    ['script', {}, themeBootstrapScript],
  ],
  themeConfig: {
    search: { provider: 'local' },
    outline: { level: [2, 3], label: 'On this page' },
    logo: '/logo.svg',
    siteTitle: false, 
    nav: [
      {
        text: 'Courses',
        items: [
          { text: 'Gender, School and Society - (1.4.6)', link: '/gender-school-society/unit-1-key-concerns' },
          { text: 'Knowledge and Curriculum - (1.4.8B)', link: '/knowledge-curriculum/unit-1-dynamics' },
          { text: 'Creating an Inclusive School - (1.4.10)', link: '/inclusive-school/unit-1-introduction' },
          {
            text: '1.4.11 – Optional',
            items: [
              { text: 'Guidance and Counselling', link: '/guidance-counselling/unit-1-overview' },
              { text: 'Environmental & Population Education', link: '/environmental-population-education/unit-1-concept-population-education' },
              { text: 'Yoga Education (Optional)', link: '/yoga-education-optional/unit-1-introduction-yoga-yogic-practices' },
              { text: 'Work & Vocational Education', link: '/work-vocational-education/unit-1-aims-objectives-bases' },
              { text: 'Peace & Value Education', link: '/peace-value-education/unit-1-peace-education' },
              { text: 'Health and Physical Education', link: '/health-physical-education/unit-1-health-education-scenario-india' },
            ],
          },
          { text: 'Critical Understanding of ICT - (EPC-3)', link: '/ict-critical-understanding/unit-1-digital-technology' },
          { text: 'Yoga Education - (EPC-4)', link: '/yoga-education/unit-1-introduction' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bips-git' },
      { icon: 'codeberg', link: 'https://codeberg.org/bips-git' },
    ],

    sidebar: {
      '/gender-school-society/': [{
        text: 'Gender, School and Society',
        items: [
          { text: 'Unit I: Key Concerns', link: '/gender-school-society/unit-1-key-concerns' },
          { text: 'Unit II: Paradigm Shifts', link: '/gender-school-society/unit-2-paradigm-shifts' },
          { text: 'Unit III: Gender, Power and Education', link: '/gender-school-society/unit-3-gender-power-education' },
          { text: 'Unit IV: Gender Issues in Curriculum', link: '/gender-school-society/unit-4-gender-curriculum' },
          { text: 'Unit V: Gender, Sexuality, Harassment and Abuse', link: '/gender-school-society/unit-5-sexuality-harassment' },
        ],
      }],
      '/knowledge-curriculum/': [{
        text: 'Knowledge and Curriculum – II',
        items: [
          { text: 'Unit I: Dynamics of Curriculum Development', link: '/knowledge-curriculum/unit-1-dynamics' },
          { text: 'Unit II: Curriculum and Syllabi', link: '/knowledge-curriculum/unit-2-curriculum-syllabi' },
          { text: 'Unit III: Designing Curriculum & Evaluation', link: '/knowledge-curriculum/unit-3-designing-evaluation' },
          { text: 'Unit IV: Power, Ideology and Curriculum', link: '/knowledge-curriculum/unit-4-power-ideology' },
          { text: 'Unit V: Curriculum as Process and Practice', link: '/knowledge-curriculum/unit-5-process-practice' },
        ],
      }],
      '/inclusive-school/': [{
        text: 'Creating an Inclusive School',
        items: [
          { text: 'Unit I: Introduction', link: '/inclusive-school/unit-1-introduction' },
          { text: 'Unit II: Legal and Policy Perspectives', link: '/inclusive-school/unit-2-legal-policy' },
          { text: 'Unit III: Learners with Special Needs', link: '/inclusive-school/unit-3-special-needs' },
          { text: 'Unit IV: Inclusion in Operation', link: '/inclusive-school/unit-4-inclusion-operation' },
          { text: 'Unit V: Teacher Preparation', link: '/inclusive-school/unit-5-teacher-preparation' },
        ],
      }],
      '/guidance-counselling/': [{
        text: 'Guidance and Counselling',
        items: [
          { text: 'Unit I: Overview', link: '/guidance-counselling/unit-1-overview' },
          { text: 'Unit II: Mental Health', link: '/guidance-counselling/unit-2-mental-health' },
          { text: 'Unit III: Adjustment and Maladjustment', link: '/guidance-counselling/unit-3-adjustment' },
          { text: 'Unit IV: Tools and Techniques', link: '/guidance-counselling/unit-4-tools-techniques' },
          { text: 'Unit V: Abnormal Behaviour and Mental Illness', link: '/guidance-counselling/unit-5-abnormal-behaviour' },
        ],
      }],
      '/environmental-population-education/': [{
        text: 'Environmental & Population Education',
        items: [
          { text: 'Unit I: Concept of Population Education', link: '/environmental-population-education/unit-1-concept-population-education' },
          { text: 'Unit II: Concept of Environmental Education', link: '/environmental-population-education/unit-2-concept-environmental-education' },
          { text: 'Unit III: Population Education Policies', link: '/environmental-population-education/unit-3-population-education-policies' },
          { text: 'Unit IV: Sustainable Development', link: '/environmental-population-education/unit-4-sustainable-development' },
          { text: 'Unit V: Population and Environmental Issues', link: '/environmental-population-education/unit-5-population-environmental-issues' },
        ],
      }],
      '/yoga-education-optional/': [{
        text: 'Yoga Education (Optional)',
        items: [
          { text: 'Unit I: Introduction to Yoga and Yogic Practices', link: '/yoga-education-optional/unit-1-introduction-yoga-yogic-practices' },
          { text: 'Unit II: Ancient Indian Philosophy and Yoga System', link: '/yoga-education-optional/unit-2-ancient-indian-philosophy-yoga-system' },
          { text: 'Unit III: Historical Aspects of Yoga', link: '/yoga-education-optional/unit-3-historical-aspects-yoga' },
          { text: 'Unit IV: Introduction to Yogic Texts', link: '/yoga-education-optional/unit-4-introduction-yogic-texts' },
          { text: 'Unit V: Yoga and Health', link: '/yoga-education-optional/unit-5-yoga-health' },
        ],
      }],
      '/work-vocational-education/': [{
        text: 'Work & Vocational Education',
        items: [
          { text: 'Unit I: Aims, Objectives and Bases', link: '/work-vocational-education/unit-1-aims-objectives-bases' },
          { text: 'Unit II: Development of the Concept and Teacher\'s Role', link: '/work-vocational-education/unit-2-development-concept-teacher' },
          { text: 'Unit III: Approaches and Methods of Teaching', link: '/work-vocational-education/unit-3-approaches-methods-teaching' },
          { text: 'Unit IV: Aids, Equipment and Assistance', link: '/work-vocational-education/unit-4-aids-equipment-assistance' },
          { text: 'Unit V: Aspects of Teaching', link: '/work-vocational-education/unit-5-aspects-teaching' },
        ],
      }],
      '/peace-value-education/': [{
        text: 'Peace & Value Education',
        items: [
          { text: 'Unit I: Peace Education', link: '/peace-value-education/unit-1-peace-education' },
          { text: 'Unit II: Social Perspective of Peace Education', link: '/peace-value-education/unit-2-social-perspective-peace-education' },
          { text: 'Unit III: Value Education', link: '/peace-value-education/unit-3-value-education' },
          { text: 'Unit IV: General Idea of Values', link: '/peace-value-education/unit-4-general-idea-values' },
          { text: 'Unit V: Methods of Evaluation', link: '/peace-value-education/unit-5-methods-evaluation' },
        ],
      }],
      '/health-physical-education/': [{
        text: 'Health and Physical Education',
        items: [
          { text: 'Unit I: Health Education Scenario in India', link: '/health-physical-education/unit-1-health-education-scenario-india' },
          { text: 'Unit II: Common and Uncommon Diseases', link: '/health-physical-education/unit-2-common-uncommon-diseases' },
          { text: 'Unit III: Technology-Related Health Risks', link: '/health-physical-education/unit-3-tech-related-health-risks' },
          { text: 'Unit IV: Health Issues, Vision and Mission', link: '/health-physical-education/unit-4-health-issues-vision-mission' },
          { text: 'Unit V: First Aid — Principles and Uses', link: '/health-physical-education/unit-5-first-aid-principles-uses' },
        ],
      }],
      '/ict-critical-understanding/': [{
        text: 'Critical Understanding of ICT',
        items: [
          { text: 'Unit I: Digital Technology & Socio-economic Context', link: '/ict-critical-understanding/unit-1-digital-technology' },
          { text: 'Unit II: MS Office', link: '/ict-critical-understanding/unit-2-ms-office' },
          { text: 'Unit III: Internet and Educational Resources', link: '/ict-critical-understanding/unit-3-internet-resources' },
          { text: 'Unit IV: Techno-Pedagogic Skills', link: '/ict-critical-understanding/unit-4-techno-pedagogic' },
        ],
      }],
      '/yoga-education/': [{
        text: 'Yoga Education',
        items: [
          { text: 'Unit I: Introduction to Yoga', link: '/yoga-education/unit-1-introduction' },
          { text: 'Unit II: Yogic Texts', link: '/yoga-education/unit-2-yogic-texts' },
          { text: 'Unit III: Yoga and Health', link: '/yoga-education/unit-3-yoga-health' },
          { text: 'Unit IV: Self-concept', link: '/yoga-education/unit-4-self-concept' },
          { text: 'Unit V: Self-esteem', link: '/yoga-education/unit-5-self-esteem' },
        ],
      }],
    },
  },
})
