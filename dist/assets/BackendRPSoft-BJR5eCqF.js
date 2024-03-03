import{_ as y}from"./avatar-nhPVMH0h.js";import{_ as a,o,c as n,a as e,t,p as T,i as S,j as m,r as k,d as c,w as p,b as f,e as u,F as g,f as v}from"./index-CBAbCbSq.js";const G={name:"CV1PersonalInformation",props:{position:{type:String,required:!0}}},E=r=>(T("data-v-e5426252"),r=r(),S(),r),P={class:"container"},N=E(()=>e("a",{class:"left",href:"src/assets/img/avatar.png",target:"_blank"},[e("img",{src:y,alt:"Avatar"})],-1)),q={class:"center"},L={class:"position"},w={class:"full-name"},B={class:"right"},A=["href","title"],O=["href","title"],D=["href","title"],R=["href","title"],F=["title"],z=["title"];function W(r,l,s,_,d,h){return o(),n("div",P,[N,e("div",q,[e("div",L,t(s.position),1),e("div",w,t(this.$helper.formatStringToCapitalizeEachWord(this.$resource.fullName)),1)]),e("div",B,[e("a",{href:"tel:"+this.$resource.personalInformation.phone,title:this.$resource.personalInformation.phone},t(this.$resource.personalInformation.phone),9,A),e("a",{href:"mailto:"+this.$resource.personalInformation.emailLink,title:this.$resource.personalInformation.emailLink},t(this.$resource.personalInformation.emailTitle),9,O),e("a",{href:this.$resource.personalInformation.facebookLink,target:"_blank",title:this.$resource.personalInformation.facebookLink},t(this.$resource.personalInformation.facebookTitle),9,D),e("a",{href:this.$resource.personalInformation.githubLink,target:"_blank",title:this.$resource.personalInformation.githubLink},t(this.$resource.personalInformation.githubTitle),9,R),e("a",{title:this.$resource.personalInformation.address},t(this.$resource.personalInformation.address),9,F),e("a",{title:this.$resource.personalInformation.dateOfBirth},t(this.$resource.personalInformation.dateOfBirth),9,z)])])}const H=a(G,[["render",W],["__scopeId","data-v-e5426252"]]),J={name:"CV1CareerGoal",props:{shortTermCareerGoals:{type:String,default:"",required:!1},longTermCareerGoals:{type:String,default:"",required:!1}}},K={class:"container"},M={class:"title"},Q={class:"container-content"},U={key:0},X={class:"sub-title"},Y={class:"content"},Z={key:1},ee={class:"sub-title"},te={class:"content"};function se(r,l,s,_,d,h){return o(),n("div",K,[e("div",M,t(this.$resource[this.$lang].careerGoals.careerGoalsTitle),1),e("div",Q,[s.shortTermCareerGoals?(o(),n("div",U,[e("div",X,t(this.$resource[this.$lang].careerGoals.TitleShortTermCareerGoals),1),e("div",Y,t(s.shortTermCareerGoals),1)])):m("",!0),s.longTermCareerGoals?(o(),n("div",Z,[e("div",ee,t(this.$resource[this.$lang].careerGoals.TitleLongTermCareerGoals),1),e("div",te,t(s.longTermCareerGoals),1)])):m("",!0)])])}const oe=a(J,[["render",se],["__scopeId","data-v-25b44aa3"]]),ne={name:"CV1Skill"},ie={class:"container"},re={class:"title"},ce={class:"container-content"};function ae(r,l,s,_,d,h){const i=u("router-link");return o(),n("div",ie,[e("div",re,t(this.$resource[this.$lang].skill.title),1),e("div",ce,[k(r.$slots,"default",{},void 0,!0)]),c(i,{to:"/skills",class:"more"},{default:p(()=>[f(t(this.$resource[this.$lang].more),1)]),_:1})])}const le=a(ne,[["render",ae],["__scopeId","data-v-6f03b771"]]),_e={name:"CV1ItemSkill",props:{title:{type:String,required:!0},content:{type:String,required:!1}}},de={class:"item-skill"},he={class:"item-skill__title"},ue={class:"item-skill__content"};function $e(r,l,s,_,d,h){return o(),n("div",de,[e("div",he,t(s.title),1),e("div",ue,t(s.content),1)])}const me=a(_e,[["render",$e],["__scopeId","data-v-7e091951"]]),pe={name:"CV1Project"},fe={class:"container"},ke={class:"title"},ge={class:"container-content"},ve=["href"];function Ce(r,l,s,_,d,h){return o(),n("div",fe,[e("div",ke,t(this.$resource[this.$lang].project.projectTitle),1),e("div",ge,[k(r.$slots,"default",{},void 0,!0)]),e("a",{href:this.$resource.personalInformation.githubLink,target:"_blank",class:"more"},t(this.$resource[this.$lang].more),9,ve)])}const Ie=a(pe,[["render",Ce],["__scopeId","data-v-c48f2cbd"]]),Ve={name:"CV1ItemProject",props:{project:{type:Object,required:!0}},created(){}},be={class:"item-project"},je={class:"flex"},xe={class:"item-project__name"},ye={class:"item-project__time"},Te={class:"item-project__content"},Se={class:"content"},Ge={class:"item-content"},Ee={class:"item-content"},Pe={class:"main-task"},Ne={class:"item-content github"},qe=["href"],Le={key:0,class:"item-content demo"},we=["href"],Be={key:1};function Ae(r,l,s,_,d,h){return o(),n("div",be,[e("div",je,[e("div",xe,t(s.project.projectName),1),e("div",ye,t(s.project.start??"")+" - "+t(s.project.end??"Now"),1)]),e("div",Te,[e("ul",Se,[e("li",Ge,t(s.project.content.technique),1),e("li",Ee,[e("span",null,t(s.project.content.mainTask.title),1),e("ul",Pe,[(o(!0),n(g,null,v(s.project.content.mainTask.tasks,i=>(o(),n("li",{class:"item-task",key:i},t(i),1))),128))])]),e("li",Ne,[f(t(this.$resource[this.$lang].linkGithubTitle)+" ",1),e("a",{href:s.project.github,target:"_blank"},t(s.project.github),9,qe)]),s.project.demo??!1?(o(),n("li",Le,[f(t(this.$resource[this.$lang].linkDemoTitle)+" ",1),s.project.demo??!1?(o(),n("a",{key:0,href:s.project.demo,target:"_blank"},t(r.demo),9,we)):(o(),n("span",Be,t(this.$resource[this.$lang].notAvailable),1))])):m("",!0)])])])}const Oe=a(Ve,[["render",Ae],["__scopeId","data-v-20c29542"]]),De={name:"CV1Experience"},Re={class:"container"},Fe={class:"title"},ze={class:"container-content"};function We(r,l,s,_,d,h){return o(),n("div",Re,[e("div",Fe,t(this.$resource[this.$lang].experience.experienceTitle),1),e("div",ze,[k(r.$slots,"default",{},void 0,!0)])])}const He=a(De,[["render",We],["__scopeId","data-v-5fe1374f"]]),Je={name:"CV1ItemExperience",props:{exp:{type:Object,required:!0}}},Ke={class:"container"},Me={class:"flex"},Qe={class:"company"},Ue={class:"work-time"},Xe={class:"project-name"},Ye={class:"tech"},Ze={class:"result"},et={key:0},tt=["href"],st={key:1},ot={key:1},nt=["href"],it={key:1};function rt(r,l,s,_,d,h){return o(),n("div",Ke,[e("div",Me,[e("div",Qe,[e("strong",null,t(s.exp.position),1),f(" - "),e("span",null,t(s.exp.companyName),1)]),e("div",Ue,t(s.exp.start)+" - "+t(s.exp.end),1)]),(o(!0),n(g,null,v(s.exp.projects,i=>(o(),n("div",{class:"project",key:i},[e("div",Xe,t(i.projectName),1),e("ul",null,[e("li",Ye,t(i.technique),1),e("li",Ze,t(i.result),1),i.github??!1?(o(),n("li",et,[e("span",null,t(this.$resource[this.$lang].linkGithubTitle),1),i.github?(o(),n("a",{key:0,href:i.github,class:"github"},t(i.github),9,tt)):(o(),n("span",st,t(this.$resource[this.$lang].notAvailable),1))])):m("",!0),i.demo??!1?(o(),n("li",ot,[e("span",null,t(this.$resource[this.$lang].linkDemoTitle),1),i.demo??!1?(o(),n("a",{key:0,href:i.demo,class:"demo"},t(i.demo),9,nt)):(o(),n("span",it,t(this.$resource[this.$lang].notAvailable),1))])):m("",!0)])]))),128))])}const ct=a(Je,[["render",rt],["__scopeId","data-v-d54752cf"]]),at={name:"CV1Education",props:{cvName:{type:String,required:!0}}},lt={class:"container"},_t={class:"title"},dt={class:"school"},ht={class:"flex"},ut={class:"school-name"},$t={class:"time"},mt={class:"major"},pt={class:"gpa"},ft={key:0,class:"relevant-course-work"};function kt(r,l,s,_,d,h){return o(),n("div",lt,[e("div",_t,t(this.$resource[this.$lang].education.educationTitle),1),(o(!0),n(g,null,v(this.$resource[this.$lang].education.schools,i=>(o(),n("div",dt,[e("div",ht,[e("div",ut,t(i.schoolName),1),e("div",$t,t(i.start)+" - "+t(i.end),1)]),e("div",mt,t(i.major),1),e("div",pt,t(i.gpa),1),i.relevantCoursework[s.cvName]?(o(),n("div",ft,t(i.relevantCoursework[s.cvName]),1)):m("",!0)]))),256))])}const gt=a(at,[["render",kt],["__scopeId","data-v-48a1f773"]]),vt={name:"BackendRPSoft",components:{CV1PersonalInformation:H,CV1CareerGoal:oe,CV1Skill:le,CV1ItemSkill:me,CV1Project:Ie,CV1ItemProject:Oe,CV1Experience:He,CV1ItemExperience:ct,CV1Education:gt}},Ct={class:"page-container"};function It(r,l,s,_,d,h){const i=u("CV1PersonalInformation"),$=u("CV1ItemSkill"),I=u("CV1Skill"),C=u("CV1ItemProject"),V=u("CV1Project"),b=u("CV1ItemExperience"),j=u("CV1Experience"),x=u("CV1Education");return o(),n("div",Ct,[c(i,{position:this.$resource.jobBackEnd},null,8,["position"]),c(I,null,{default:p(()=>[c($,{title:this.$resource[this.$lang].skill.skills[3].name,content:this.$resource[this.$lang].skill.skills[3].shortContent},null,8,["title","content"]),c($,{title:this.$resource[this.$lang].skill.skills[2].name,content:this.$resource[this.$lang].skill.skills[2].shortContent},null,8,["title","content"]),c($,{title:this.$resource[this.$lang].skill.skills[17].name,content:this.$resource[this.$lang].skill.skills[17].shortContent},null,8,["title","content"]),c($,{title:this.$resource[this.$lang].skill.skills[5].name+", "+this.$resource[this.$lang].skill.skills[6].name,content:this.$resource[this.$lang].skill.skills[5].shortContent},null,8,["title","content"]),c($,{title:this.$resource[this.$lang].skill.skills[7].name,content:this.$resource[this.$lang].skill.skills[7].shortContent},null,8,["title","content"]),c($,{title:this.$resource[this.$lang].skill.skills[1].name,content:this.$resource[this.$lang].skill.skills[1].shortContent},null,8,["title","content"])]),_:1}),c(V,null,{default:p(()=>[c(C,{project:this.$resource[this.$lang].project.projects[5]},null,8,["project"]),c(C,{project:this.$resource[this.$lang].project.projects[2]},null,8,["project"])]),_:1}),c(j,null,{default:p(()=>[c(b,{exp:this.$resource[this.$lang].experience.experiences[0]},null,8,["exp"])]),_:1}),c(x,{cvName:"backendRPSoft"})])}const jt=a(vt,[["render",It],["__scopeId","data-v-f2f84b41"]]);export{jt as default};