import{_ as h,o,c as i,a as e,t,r as l,F as p,b as r,n as V,d as _,w as n,e as g,f as k,g as T,h as y,p as w,i as F}from"./index-9CDZNbKk.js";import{_ as L}from"./avatar-nhPVMH0h.js";const W={name:"CVHeader",props:{fullName:{type:String,required:!0},position:{type:String,required:!0}}},z={class:"cv-header"},B={class:"full-name"},E={class:"position"};function G(s,m,d,f,$,v){return o(),i("div",z,[e("div",B,t(this.$helper.formatStringToCapitalizeEachWord(this.fullName)),1),e("div",E,t(d.position.toUpperCase()),1)])}const P=h(W,[["render",G],["__scopeId","data-v-95662f1b"]]),q={name:"CVCareerGoals"},U={class:"career-goals"},H={class:"career-goals__title"},O={class:"career-goals__content"};function A(s,m,d,f,$,v){return o(),i("div",U,[e("div",H,t(this.$resource[this.$lang].careerGoals.careerGoalsTitle),1),e("div",O,[l(s.$slots,"default",{},void 0,!0)])])}const D=h(q,[["render",A],["__scopeId","data-v-c214aa4a"]]),J={name:"CVEducation"},K={class:"education__shool"},M={class:"school-name"},Q={class:"time-study-in-school"},R={class:"education__content"},X={class:"major"};function Y(s,m,d,f,$,v){return o(),i(p,null,[e("div",K,[e("div",M,[l(s.$slots,"schoolName",{},void 0,!0)]),e("div",Q,[l(s.$slots,"timeStudyInSchool",{},void 0,!0)])]),e("div",R,[e("div",X,[l(s.$slots,"major",{},void 0,!0)]),l(s.$slots,"content",{},void 0,!0)])],64)}const Z=h(J,[["render",Y],["__scopeId","data-v-6e46df2d"]]),ee={name:"CVExperience"},te={class:"experience__company"},se={class:"company-name"},oe={class:"time-work-in-company"},ne={class:"experience__content"},ie={class:"position"};function ae(s,m,d,f,$,v){return o(),i(p,null,[e("div",te,[e("div",se,[l(s.$slots,"companyName",{},void 0,!0)]),e("div",oe,[l(s.$slots,"timeWorkInCompany",{},void 0,!0)])]),e("div",ne,[e("div",ie,[l(s.$slots,"position",{},void 0,!0)]),l(s.$slots,"content",{},void 0,!0)])],64)}const re=h(ee,[["render",ae],["__scopeId","data-v-e1e83249"]]),ce={name:"CVProject"},le={class:"project__title"},_e={class:"project-name"},de={class:"time-work-in-project"},pe={class:"project-content"},ue={class:"position"},he={class:"position-title"},me={class:"position-value"};function fe(s,m,d,f,$,v){return o(),i(p,null,[e("div",le,[e("div",_e,[l(s.$slots,"projectName",{},void 0,!0)]),e("div",de,[l(s.$slots,"timeWorkInProject",{},void 0,!0)])]),e("div",pe,[e("div",ue,[e("span",he,t(this.$resource[this.$lang].project.positionTitle),1),r(" : "),e("span",me,[l(s.$slots,"position",{},void 0,!0)])]),l(s.$slots,"content",{},void 0,!0)])],64)}const $e=h(ce,[["render",fe],["__scopeId","data-v-9a2b8e06"]]),ve={name:"ItemInformation",props:{textIcon:{type:String,required:!0},title:{type:String,default:""}}},Ie={class:"personal-info-row"},ge={class:"personal-info-icon"},ke=["title"];function ye(s,m,d,f,$,v){return o(),i("div",Ie,[e("span",ge,[e("i",{class:V(["icon",d.textIcon])},null,2)]),e("span",{class:"personal-info-text",title:d.title},[l(s.$slots,"default",{},void 0,!0)],8,ke)])}const Ce=h(ve,[["render",ye],["__scopeId","data-v-169fddc5"]]),be={name:"CVPersonalInformation",components:{"item-information":Ce}},xe={class:"personal-info__container"},Se=["href"],je=["href"];function Ne(s,m,d,f,$,v){const c=g("item-information");return o(),i("div",xe,[_(c,{textIcon:"fa-solid fa-person",title:this.$resource.personalInformation.fullName},{default:n(()=>[r(t(this.$resource.personalInformation.fullName),1)]),_:1},8,["title"]),_(c,{textIcon:"fa-solid fa-phone",href:"tel:"+this.$resource.personalInformation.phone,title:this.$resource.personalInformation.phone},{default:n(()=>[r(t(this.$resource.personalInformation.phone),1)]),_:1},8,["href","title"]),_(c,{textIcon:"fa-solid fa-envelope",href:"mailto:"+this.$resource.personalInformation.emailLink,title:this.$resource.personalInformation.emailLink},{default:n(()=>[r(t(this.$resource.personalInformation.emailTitle),1)]),_:1},8,["href","title"]),_(c,{textIcon:"fa-brands fa-facebook",title:this.$resource.personalInformation.facebookTitle},{default:n(()=>[e("a",{href:this.$resource.personalInformation.facebookLink,target:"_blank",style:{color:"var(--white)"}},t(this.$resource.personalInformation.facebookTitle),9,Se)]),_:1},8,["title"]),_(c,{textIcon:"fa-brands fa-github",title:this.$resource.personalInformation.githubTitle},{default:n(()=>[e("a",{href:this.$resource.personalInformation.githubLink,target:"_blank",style:{color:"var(--white)"}},t(this.$resource.personalInformation.githubTitle),9,je)]),_:1},8,["title"]),_(c,{textIcon:"fa-solid fa-location-dot",title:this.$resource.personalInformation.address},{default:n(()=>[r(t(this.$resource.personalInformation.address),1)]),_:1},8,["title"]),_(c,{textIcon:"fa-solid fa-cake-candles",title:this.$resource.personalInformation.dateOfBirth},{default:n(()=>[r(t(this.$resource.personalInformation.dateOfBirth),1)]),_:1},8,["title"]),_(c,{textIcon:"fa-solid fa-venus-mars",title:this.$resource.personalInformation.gender},{default:n(()=>[r(t(this.$resource.personalInformation.gender),1)]),_:1},8,["title"])])}const Ve=h(be,[["render",Ne],["__scopeId","data-v-7a14594e"]]),Te={name:"CVSkill"},we={class:"skill__container"},Fe={class:"item-skill__name"},Le={class:"item-skill__bar"};function We(s,m,d,f,$,v){return o(),i("div",we,[(o(!0),i(p,null,k(this.$resource[this.$lang].skill.skills,c=>(o(),i("div",{class:"item-skill__container",key:c.name},[e("div",Fe,t(c.name),1),e("div",Le,[e("div",{class:"progress-value",style:T({width:c.level+"%"})},t(c.level+"%"),5)])]))),128))])}const ze=h(Te,[["render",We],["__scopeId","data-v-2df9ae14"]]),Be={name:"WebFullStack",components:{"cv-header":P,"cv-careergoals":D,"cv-education":Z,"cv-experience":re,"cv-project":$e,"cv-personal-information":Ve,"cv-skill":ze}},u=s=>(w("data-v-40333ef2"),s=s(),F(),s),Ee={class:"main-container"},Ge={class:"main-left"},Pe={class:"education"},qe={class:"education__title"},Ue=u(()=>e("span",{class:"education__title-icon"},[e("span",{class:"material-symbols-outlined"}," school ")],-1)),He={class:"education__title-text"},Oe=u(()=>e("span",{class:"education__title-line"},null,-1)),Ae={style:{"padding-left":"1em"}},De={class:"experience"},Je={class:"experience__title"},Ke=u(()=>e("span",{class:"experience__title-icon"},[e("span",{class:"material-symbols-outlined"}," workspace_premium ")],-1)),Me={class:"experience__title-text"},Qe=u(()=>e("span",{class:"experience__title-line"},null,-1)),Re=u(()=>e("br",null,null,-1)),Xe=u(()=>e("br",null,null,-1)),Ye={class:"project"},Ze={class:"project__title"},et=u(()=>e("span",{class:"project__title-icon"},[e("span",{class:"material-symbols-outlined"}," terminal ")],-1)),tt={class:"project__title-text"},st=u(()=>e("span",{class:"project__title-line"},null,-1)),ot={class:"main-right"},nt=u(()=>e("div",{class:"avatar"},[e("img",{src:L,alt:"Avatar"})],-1)),it=u(()=>e("hr",null,null,-1));function at(s,m,d,f,$,v){const c=g("cv-header"),C=g("cv-careergoals"),b=g("cv-education"),x=g("cv-experience"),S=g("cv-project"),j=g("cv-personal-information"),N=g("cv-skill");return o(),i(p,null,[_(c,{fullName:this.$resource.fullName,position:this.$resource.jobFullStack},null,8,["fullName","position"]),e("div",Ee,[e("div",Ge,[_(C,{style:{"margin-bottom":"1em"}},{default:n(()=>[r(t(this.$resource[this.$lang].careerGoals.careerGoalsFullStackContent),1)]),_:1}),e("div",Pe,[e("div",qe,[Ue,e("span",He,t(this.$resource[this.$lang].education.educationTitle),1),Oe]),(o(!0),i(p,null,k(this.$resource[this.$lang].education.schools,a=>(o(),y(b,{key:a},{schoolName:n(()=>[r(t(a.schoolName.toUpperCase()),1)]),timeStudyInSchool:n(()=>[r(t(a.start)+" - "+t(this.$helper.formatStringToCapitalizeFirstLetter(a.end)),1)]),major:n(()=>[r(t(a.major),1)]),content:n(()=>[e("ul",Ae,[(o(!0),i(p,null,k(a.contents,I=>(o(),i("li",{key:I},t(I),1))),128))])]),_:2},1024))),128))]),e("div",De,[e("div",Je,[Ke,e("span",Me,t(this.$resource[this.$lang].experience.experienceTitle),1),Qe]),(o(!0),i(p,null,k(this.$resource[this.$lang].experience.experiences,a=>(o(),y(x,null,{companyName:n(()=>[r(t(a.companyName),1)]),timeWorkInCompany:n(()=>[r(t(a.start)+" - "+t(this.$helper.formatStringToCapitalizeFirstLetter(a.end)),1)]),position:n(()=>[r(t(a.position),1)]),content:n(()=>[e("ul",null,[(o(!0),i(p,null,k(a.content,I=>(o(),i("li",{key:I,style:{"list-style-type":"none"}},[r(t(I)+" ",1),Re,Xe]))),128))])]),_:2},1024))),256))]),e("div",Ye,[e("div",Ze,[et,e("span",tt,t(this.$resource[this.$lang].project.projectTitle),1),st]),(o(!0),i(p,null,k(this.$resource[this.$lang].project.projects,a=>(o(),y(S,{key:a},{projectName:n(()=>[r(t(a.projectName.toUpperCase()),1)]),timeWorkInProject:n(()=>[r(t(a.start)+" - "+t(this.$helper.formatStringToCapitalizeFirstLetter(a.end)),1)]),position:n(()=>[r(t(a.position),1)]),content:n(()=>[e("ul",null,[(o(!0),i(p,null,k(a.content,I=>(o(),i("li",{key:I,style:{"list-style-type":"none"}},t(I),1))),128))])]),_:2},1024))),128))])]),e("div",ot,[nt,_(j),it,_(N)])])],64)}const lt=h(Be,[["render",at],["__scopeId","data-v-40333ef2"]]);export{lt as default};
