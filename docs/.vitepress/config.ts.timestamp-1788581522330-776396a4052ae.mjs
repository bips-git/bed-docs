// docs/.vitepress/config.ts
import { defineConfig } from "file:///data/data/com.termux/files/home/git-remote/codeberg/vitepress/bed-docs/node_modules/.pnpm/vitepress@1.6.4_@algolia+client-search@5.57.0_postcss@8.5.26_search-insights@2.17.3/node_modules/vitepress/dist/node/index.js";
var config_default = defineConfig({
  base: "/bed-docs/",
  title: "B.Ed Study Material",
  appearance: "light",
  themeConfig: {
    search: { provider: "local" },
    outline: { level: [2, 3], label: "On this page" },
    logo: "/logo.svg",
    siteTitle: false,
    nav: [
      {
        text: "Courses",
        items: [
          { text: "Gender, School and Society - (1.4.6)", link: "/gender-school-society/unit-1-key-concerns" },
          { text: "Knowledge and Curriculum - (1.4.8B)", link: "/knowledge-curriculum/unit-1-dynamics" },
          { text: "Creating an Inclusive School - (1.4.10)", link: "/inclusive-school/unit-1-introduction" },
          { text: "Guidance and Counselling - (1.4.11)", link: "/guidance-counselling/unit-1-overview" },
          { text: "Critical Understanding of ICT - (EPC-3)", link: "/ict-critical-understanding/unit-1-digital-technology" },
          { text: "Yoga Education - (EPC-4)", link: "/yoga-education/unit-1-introduction" }
        ]
      },
      { text: "GitHub", link: "https://github.com/bips-git" }
    ],
    sidebar: {
      "/gender-school-society/": [{
        text: "Gender, School and Society",
        items: [
          { text: "Unit I: Key Concerns", link: "/gender-school-society/unit-1-key-concerns" },
          { text: "Unit II: Paradigm Shifts", link: "/gender-school-society/unit-2-paradigm-shifts" },
          { text: "Unit III: Gender, Power and Education", link: "/gender-school-society/unit-3-gender-power-education" },
          { text: "Unit IV: Gender Issues in Curriculum", link: "/gender-school-society/unit-4-gender-curriculum" },
          { text: "Unit V: Gender, Sexuality, Harassment and Abuse", link: "/gender-school-society/unit-5-sexuality-harassment" }
        ]
      }],
      "/knowledge-curriculum/": [{
        text: "Knowledge and Curriculum \u2013 II",
        items: [
          { text: "Unit I: Dynamics of Curriculum Development", link: "/knowledge-curriculum/unit-1-dynamics" },
          { text: "Unit II: Curriculum and Syllabi", link: "/knowledge-curriculum/unit-2-curriculum-syllabi" },
          { text: "Unit III: Designing Curriculum & Evaluation", link: "/knowledge-curriculum/unit-3-designing-evaluation" },
          { text: "Unit IV: Power, Ideology and Curriculum", link: "/knowledge-curriculum/unit-4-power-ideology" },
          { text: "Unit V: Curriculum as Process and Practice", link: "/knowledge-curriculum/unit-5-process-practice" }
        ]
      }],
      "/inclusive-school/": [{
        text: "Creating an Inclusive School",
        items: [
          { text: "Unit I: Introduction", link: "/inclusive-school/unit-1-introduction" },
          { text: "Unit II: Legal and Policy Perspectives", link: "/inclusive-school/unit-2-legal-policy" },
          { text: "Unit III: Learners with Special Needs", link: "/inclusive-school/unit-3-special-needs" },
          { text: "Unit IV: Inclusion in Operation", link: "/inclusive-school/unit-4-inclusion-operation" },
          { text: "Unit V: Teacher Preparation", link: "/inclusive-school/unit-5-teacher-preparation" }
        ]
      }],
      "/guidance-counselling/": [{
        text: "Guidance and Counselling",
        items: [
          { text: "Unit I: Overview", link: "/guidance-counselling/unit-1-overview" },
          { text: "Unit II: Mental Health", link: "/guidance-counselling/unit-2-mental-health" },
          { text: "Unit III: Adjustment and Maladjustment", link: "/guidance-counselling/unit-3-adjustment" },
          { text: "Unit IV: Tools and Techniques", link: "/guidance-counselling/unit-4-tools-techniques" },
          { text: "Unit V: Abnormal Behaviour and Mental Illness", link: "/guidance-counselling/unit-5-abnormal-behaviour" }
        ]
      }],
      "/ict-critical-understanding/": [{
        text: "Critical Understanding of ICT",
        items: [
          { text: "Unit I: Digital Technology & Socio-economic Context", link: "/ict-critical-understanding/unit-1-digital-technology" },
          { text: "Unit II: MS Office", link: "/ict-critical-understanding/unit-2-ms-office" },
          { text: "Unit III: Internet and Educational Resources", link: "/ict-critical-understanding/unit-3-internet-resources" },
          { text: "Unit IV: Techno-Pedagogic Skills", link: "/ict-critical-understanding/unit-4-techno-pedagogic" }
        ]
      }],
      "/yoga-education/": [{
        text: "Yoga Education",
        items: [
          { text: "Unit I: Introduction to Yoga", link: "/yoga-education/unit-1-introduction" },
          { text: "Unit II: Yogic Texts", link: "/yoga-education/unit-2-yogic-texts" },
          { text: "Unit III: Yoga and Health", link: "/yoga-education/unit-3-yoga-health" },
          { text: "Unit IV: Self-concept", link: "/yoga-education/unit-4-self-concept" },
          { text: "Unit V: Self-esteem", link: "/yoga-education/unit-5-self-esteem" }
        ]
      }]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udml0ZXByZXNzL2NvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9kYXRhL2RhdGEvY29tLnRlcm11eC9maWxlcy9ob21lL2dpdC1yZW1vdGUvY29kZWJlcmcvdml0ZXByZXNzL2JlZC1kb2NzL2RvY3MvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL2RhdGEvZGF0YS9jb20udGVybXV4L2ZpbGVzL2hvbWUvZ2l0LXJlbW90ZS9jb2RlYmVyZy92aXRlcHJlc3MvYmVkLWRvY3MvZG9jcy8udml0ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vZGF0YS9kYXRhL2NvbS50ZXJtdXgvZmlsZXMvaG9tZS9naXQtcmVtb3RlL2NvZGViZXJnL3ZpdGVwcmVzcy9iZWQtZG9jcy9kb2NzLy52aXRlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZXByZXNzJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBiYXNlOiAnL2JlZC1kb2NzLycsXG4gIHRpdGxlOiAnQi5FZCBTdHVkeSBNYXRlcmlhbCcsXG4gIGFwcGVhcmFuY2U6ICdsaWdodCcsXG4gIHRoZW1lQ29uZmlnOiB7XG4gICAgc2VhcmNoOiB7IHByb3ZpZGVyOiAnbG9jYWwnIH0sXG4gICAgb3V0bGluZTogeyBsZXZlbDogWzIsIDNdLCBsYWJlbDogJ09uIHRoaXMgcGFnZScgfSxcbiAgICBsb2dvOiAnL2xvZ28uc3ZnJyxcbiAgICBzaXRlVGl0bGU6IGZhbHNlLCBcbiAgICBuYXY6IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ0NvdXJzZXMnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ0dlbmRlciwgU2Nob29sIGFuZCBTb2NpZXR5IC0gKDEuNC42KScsIGxpbms6ICcvZ2VuZGVyLXNjaG9vbC1zb2NpZXR5L3VuaXQtMS1rZXktY29uY2VybnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnS25vd2xlZGdlIGFuZCBDdXJyaWN1bHVtIC0gKDEuNC44QiknLCBsaW5rOiAnL2tub3dsZWRnZS1jdXJyaWN1bHVtL3VuaXQtMS1keW5hbWljcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdDcmVhdGluZyBhbiBJbmNsdXNpdmUgU2Nob29sIC0gKDEuNC4xMCknLCBsaW5rOiAnL2luY2x1c2l2ZS1zY2hvb2wvdW5pdC0xLWludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdHdWlkYW5jZSBhbmQgQ291bnNlbGxpbmcgLSAoMS40LjExKScsIGxpbms6ICcvZ3VpZGFuY2UtY291bnNlbGxpbmcvdW5pdC0xLW92ZXJ2aWV3JyB9LFxuICAgICAgICAgIHsgdGV4dDogJ0NyaXRpY2FsIFVuZGVyc3RhbmRpbmcgb2YgSUNUIC0gKEVQQy0zKScsIGxpbms6ICcvaWN0LWNyaXRpY2FsLXVuZGVyc3RhbmRpbmcvdW5pdC0xLWRpZ2l0YWwtdGVjaG5vbG9neScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdZb2dhIEVkdWNhdGlvbiAtIChFUEMtNCknLCBsaW5rOiAnL3lvZ2EtZWR1Y2F0aW9uL3VuaXQtMS1pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiAnR2l0SHViJywgbGluazogJ2h0dHBzOi8vZ2l0aHViLmNvbS9iaXBzLWdpdCcgfSxcbiAgICBdLFxuXG4gICAgc2lkZWJhcjoge1xuICAgICAgJy9nZW5kZXItc2Nob29sLXNvY2lldHkvJzogW3tcbiAgICAgICAgdGV4dDogJ0dlbmRlciwgU2Nob29sIGFuZCBTb2NpZXR5JyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IEk6IEtleSBDb25jZXJucycsIGxpbms6ICcvZ2VuZGVyLXNjaG9vbC1zb2NpZXR5L3VuaXQtMS1rZXktY29uY2VybnMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJSTogUGFyYWRpZ20gU2hpZnRzJywgbGluazogJy9nZW5kZXItc2Nob29sLXNvY2lldHkvdW5pdC0yLXBhcmFkaWdtLXNoaWZ0cycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJSTogR2VuZGVyLCBQb3dlciBhbmQgRWR1Y2F0aW9uJywgbGluazogJy9nZW5kZXItc2Nob29sLXNvY2lldHkvdW5pdC0zLWdlbmRlci1wb3dlci1lZHVjYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJVjogR2VuZGVyIElzc3VlcyBpbiBDdXJyaWN1bHVtJywgbGluazogJy9nZW5kZXItc2Nob29sLXNvY2lldHkvdW5pdC00LWdlbmRlci1jdXJyaWN1bHVtJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgVjogR2VuZGVyLCBTZXh1YWxpdHksIEhhcmFzc21lbnQgYW5kIEFidXNlJywgbGluazogJy9nZW5kZXItc2Nob29sLXNvY2lldHkvdW5pdC01LXNleHVhbGl0eS1oYXJhc3NtZW50JyB9LFxuICAgICAgICBdLFxuICAgICAgfV0sXG4gICAgICAnL2tub3dsZWRnZS1jdXJyaWN1bHVtLyc6IFt7XG4gICAgICAgIHRleHQ6ICdLbm93bGVkZ2UgYW5kIEN1cnJpY3VsdW0gXHUyMDEzIElJJyxcbiAgICAgICAgaXRlbXM6IFtcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IEk6IER5bmFtaWNzIG9mIEN1cnJpY3VsdW0gRGV2ZWxvcG1lbnQnLCBsaW5rOiAnL2tub3dsZWRnZS1jdXJyaWN1bHVtL3VuaXQtMS1keW5hbWljcycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJOiBDdXJyaWN1bHVtIGFuZCBTeWxsYWJpJywgbGluazogJy9rbm93bGVkZ2UtY3VycmljdWx1bS91bml0LTItY3VycmljdWx1bS1zeWxsYWJpJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSUlJOiBEZXNpZ25pbmcgQ3VycmljdWx1bSAmIEV2YWx1YXRpb24nLCBsaW5rOiAnL2tub3dsZWRnZS1jdXJyaWN1bHVtL3VuaXQtMy1kZXNpZ25pbmctZXZhbHVhdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElWOiBQb3dlciwgSWRlb2xvZ3kgYW5kIEN1cnJpY3VsdW0nLCBsaW5rOiAnL2tub3dsZWRnZS1jdXJyaWN1bHVtL3VuaXQtNC1wb3dlci1pZGVvbG9neScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IFY6IEN1cnJpY3VsdW0gYXMgUHJvY2VzcyBhbmQgUHJhY3RpY2UnLCBsaW5rOiAnL2tub3dsZWRnZS1jdXJyaWN1bHVtL3VuaXQtNS1wcm9jZXNzLXByYWN0aWNlJyB9LFxuICAgICAgICBdLFxuICAgICAgfV0sXG4gICAgICAnL2luY2x1c2l2ZS1zY2hvb2wvJzogW3tcbiAgICAgICAgdGV4dDogJ0NyZWF0aW5nIGFuIEluY2x1c2l2ZSBTY2hvb2wnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSTogSW50cm9kdWN0aW9uJywgbGluazogJy9pbmNsdXNpdmUtc2Nob29sL3VuaXQtMS1pbnRyb2R1Y3Rpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJSTogTGVnYWwgYW5kIFBvbGljeSBQZXJzcGVjdGl2ZXMnLCBsaW5rOiAnL2luY2x1c2l2ZS1zY2hvb2wvdW5pdC0yLWxlZ2FsLXBvbGljeScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJSTogTGVhcm5lcnMgd2l0aCBTcGVjaWFsIE5lZWRzJywgbGluazogJy9pbmNsdXNpdmUtc2Nob29sL3VuaXQtMy1zcGVjaWFsLW5lZWRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSVY6IEluY2x1c2lvbiBpbiBPcGVyYXRpb24nLCBsaW5rOiAnL2luY2x1c2l2ZS1zY2hvb2wvdW5pdC00LWluY2x1c2lvbi1vcGVyYXRpb24nIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBWOiBUZWFjaGVyIFByZXBhcmF0aW9uJywgbGluazogJy9pbmNsdXNpdmUtc2Nob29sL3VuaXQtNS10ZWFjaGVyLXByZXBhcmF0aW9uJyB9LFxuICAgICAgICBdLFxuICAgICAgfV0sXG4gICAgICAnL2d1aWRhbmNlLWNvdW5zZWxsaW5nLyc6IFt7XG4gICAgICAgIHRleHQ6ICdHdWlkYW5jZSBhbmQgQ291bnNlbGxpbmcnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSTogT3ZlcnZpZXcnLCBsaW5rOiAnL2d1aWRhbmNlLWNvdW5zZWxsaW5nL3VuaXQtMS1vdmVydmlldycgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJOiBNZW50YWwgSGVhbHRoJywgbGluazogJy9ndWlkYW5jZS1jb3Vuc2VsbGluZy91bml0LTItbWVudGFsLWhlYWx0aCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJSTogQWRqdXN0bWVudCBhbmQgTWFsYWRqdXN0bWVudCcsIGxpbms6ICcvZ3VpZGFuY2UtY291bnNlbGxpbmcvdW5pdC0zLWFkanVzdG1lbnQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJVjogVG9vbHMgYW5kIFRlY2huaXF1ZXMnLCBsaW5rOiAnL2d1aWRhbmNlLWNvdW5zZWxsaW5nL3VuaXQtNC10b29scy10ZWNobmlxdWVzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgVjogQWJub3JtYWwgQmVoYXZpb3VyIGFuZCBNZW50YWwgSWxsbmVzcycsIGxpbms6ICcvZ3VpZGFuY2UtY291bnNlbGxpbmcvdW5pdC01LWFibm9ybWFsLWJlaGF2aW91cicgfSxcbiAgICAgICAgXSxcbiAgICAgIH1dLFxuICAgICAgJy9pY3QtY3JpdGljYWwtdW5kZXJzdGFuZGluZy8nOiBbe1xuICAgICAgICB0ZXh0OiAnQ3JpdGljYWwgVW5kZXJzdGFuZGluZyBvZiBJQ1QnLFxuICAgICAgICBpdGVtczogW1xuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSTogRGlnaXRhbCBUZWNobm9sb2d5ICYgU29jaW8tZWNvbm9taWMgQ29udGV4dCcsIGxpbms6ICcvaWN0LWNyaXRpY2FsLXVuZGVyc3RhbmRpbmcvdW5pdC0xLWRpZ2l0YWwtdGVjaG5vbG9neScgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJOiBNUyBPZmZpY2UnLCBsaW5rOiAnL2ljdC1jcml0aWNhbC11bmRlcnN0YW5kaW5nL3VuaXQtMi1tcy1vZmZpY2UnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJSUk6IEludGVybmV0IGFuZCBFZHVjYXRpb25hbCBSZXNvdXJjZXMnLCBsaW5rOiAnL2ljdC1jcml0aWNhbC11bmRlcnN0YW5kaW5nL3VuaXQtMy1pbnRlcm5ldC1yZXNvdXJjZXMnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJVjogVGVjaG5vLVBlZGFnb2dpYyBTa2lsbHMnLCBsaW5rOiAnL2ljdC1jcml0aWNhbC11bmRlcnN0YW5kaW5nL3VuaXQtNC10ZWNobm8tcGVkYWdvZ2ljJyB9LFxuICAgICAgICBdLFxuICAgICAgfV0sXG4gICAgICAnL3lvZ2EtZWR1Y2F0aW9uLyc6IFt7XG4gICAgICAgIHRleHQ6ICdZb2dhIEVkdWNhdGlvbicsXG4gICAgICAgIGl0ZW1zOiBbXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBJOiBJbnRyb2R1Y3Rpb24gdG8gWW9nYScsIGxpbms6ICcveW9nYS1lZHVjYXRpb24vdW5pdC0xLWludHJvZHVjdGlvbicgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElJOiBZb2dpYyBUZXh0cycsIGxpbms6ICcveW9nYS1lZHVjYXRpb24vdW5pdC0yLXlvZ2ljLXRleHRzJyB9LFxuICAgICAgICAgIHsgdGV4dDogJ1VuaXQgSUlJOiBZb2dhIGFuZCBIZWFsdGgnLCBsaW5rOiAnL3lvZ2EtZWR1Y2F0aW9uL3VuaXQtMy15b2dhLWhlYWx0aCcgfSxcbiAgICAgICAgICB7IHRleHQ6ICdVbml0IElWOiBTZWxmLWNvbmNlcHQnLCBsaW5rOiAnL3lvZ2EtZWR1Y2F0aW9uL3VuaXQtNC1zZWxmLWNvbmNlcHQnIH0sXG4gICAgICAgICAgeyB0ZXh0OiAnVW5pdCBWOiBTZWxmLWVzdGVlbScsIGxpbms6ICcveW9nYS1lZHVjYXRpb24vdW5pdC01LXNlbGYtZXN0ZWVtJyB9LFxuICAgICAgICBdLFxuICAgICAgfV0sXG4gICAgfSxcbiAgfSxcbn0pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZhLFNBQVMsb0JBQW9CO0FBRTFjLElBQU8saUJBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLE9BQU87QUFBQSxFQUNQLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYLFFBQVEsRUFBRSxVQUFVLFFBQVE7QUFBQSxJQUM1QixTQUFTLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE9BQU8sZUFBZTtBQUFBLElBQ2hELE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxJQUNYLEtBQUs7QUFBQSxNQUNIO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixPQUFPO0FBQUEsVUFDTCxFQUFFLE1BQU0sd0NBQXdDLE1BQU0sNkNBQTZDO0FBQUEsVUFDbkcsRUFBRSxNQUFNLHVDQUF1QyxNQUFNLHdDQUF3QztBQUFBLFVBQzdGLEVBQUUsTUFBTSwyQ0FBMkMsTUFBTSx3Q0FBd0M7QUFBQSxVQUNqRyxFQUFFLE1BQU0sdUNBQXVDLE1BQU0sd0NBQXdDO0FBQUEsVUFDN0YsRUFBRSxNQUFNLDJDQUEyQyxNQUFNLHdEQUF3RDtBQUFBLFVBQ2pILEVBQUUsTUFBTSw0QkFBNEIsTUFBTSxzQ0FBc0M7QUFBQSxRQUNsRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEVBQUUsTUFBTSxVQUFVLE1BQU0sOEJBQThCO0FBQUEsSUFDeEQ7QUFBQSxJQUVBLFNBQVM7QUFBQSxNQUNQLDJCQUEyQixDQUFDO0FBQUEsUUFDMUIsTUFBTTtBQUFBLFFBQ04sT0FBTztBQUFBLFVBQ0wsRUFBRSxNQUFNLHdCQUF3QixNQUFNLDZDQUE2QztB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
