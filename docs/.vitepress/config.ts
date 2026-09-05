import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/bed-docs/',
  title: 'B.Ed Study Material',
  appearance: 'light',
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
          { text: 'Guidance and Counselling - (1.4.11)', link: '/guidance-counselling/unit-1-overview' },
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
