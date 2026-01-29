import{d as y,A as b,c as x,e,k as i,w as n,n as w,t as s,f as r,j as v,B as k,h as T,l as I,o as C,g as p,C as _}from"./index-Dp7gseva.js";import{u as d}from"./useScrollReveal-Dt8ysv5c.js";const A={key:0,class:"relative w-full max-w-3xl mx-auto px-6 py-20 flex flex-col gap-12"},R={class:"flex flex-wrap items-center gap-4"},B={class:"text-neutral-500 text-sm"},W={class:"text-neutral-500 text-sm"},G={class:"text-4xl md:text-5xl font-black tracking-tighter text-white leading-tight"},S={class:"text-neutral-400"},E={class:"text-white"},M=["innerHTML"],P={class:"bg-neutral-900/50 p-8 rounded-2xl border border-white/5"},D={class:"text-center"},L=y({__name:"BlogPost",setup(N){const h=_(),m=k(),l=p(null),c=p(null);d(l),d(c,{delay:.2});const g={"why-ai-cant-find-your-business":{title:"Why ChatGPT Can't Find Your Business (Yet)",date:"2026-01-28",category:"AI Search",readTime:"5 min read",author:"Jake Fieldhouse",content:`
      <p class="lead">Search for your business in ChatGPT or Perplexity. Does it recommend you? For most Hull SMBs, the answer is no. Here's why that matters in 2026.</p>
      
      <h2>The Shift from Google to AI</h2>
      <p>25% of searches now bypass Google entirely. Users ask ChatGPT "Who's the best IT company in Hull?" and AI provides direct answers—no clicking through results. If your business isn't in that answer, you don't exist to an increasingly large segment of potential customers.</p>
      
      <h2>Why Most Websites Are Invisible to AI</h2>
      <p>AI systems like ChatGPT don't crawl websites the way Google does. They rely on:</p>
      <ul>
        <li><strong>Structured data</strong> that explicitly communicates what you do</li>
        <li><strong>Entity authority</strong> from trusted sources linking to you</li>
        <li><strong>AI-specific files</strong> that describe your business in machine-readable format</li>
        <li><strong>Question-based content</strong> formatted for direct citation</li>
      </ul>
      <p>Traditional SEO doesn't address any of this. That's why businesses ranking well on Google can be completely invisible to AI.</p>
      
      <h2>The Complexity Factor</h2>
      <p>Getting AI visibility right requires deep technical knowledge: JSON-LD schema implementation, llms.txt specification compliance, semantic HTML structure, and ongoing monitoring of how AI systems cite your content. It's not a one-time fix—it's an evolving strategy.</p>
      
      <h2>Your Competitors Probably Aren't Doing This</h2>
      <p>GEO (Generative Engine Optimization) is so new that less than 1% of businesses have implemented it properly. That's an opportunity for early movers—but it won't last forever.</p>
      
      <p>If you're curious whether AI can currently find your business, <a href="/ai-optimization-hull">request a free AI visibility audit</a> and we'll show you exactly what you're missing.</p>
    `},"macbook-repair-vs-replace-guide":{title:"MacBook Won't Turn On? When Repair Makes More Sense Than Replace",date:"2026-01-25",category:"Repair",readTime:"4 min read",author:"Jake Fieldhouse",content:`
      <p class="lead">Apple quotes you for a full "logic board replacement". But often, the actual fault is a single component that can be repaired at a fraction of the cost.</p>
      
      <h2>Why Apple Says "Unrepairable"</h2>
      <p>Apple's repair model is based on module replacement, not component-level diagnosis. If any chip on the logic board fails, they replace the entire board. It's fast for them, but expensive for you.</p>
      
      <h2>What Component-Level Repair Looks Like</h2>
      <ul>
        <li><strong>Power Management ICs:</strong> A single chip often causes no-power issues</li>
        <li><strong>USB-C Controllers:</strong> Charging problems are typically one component</li>
        <li><strong>Liquid Damage:</strong> Corrosion can be ultrasonically cleaned if caught early</li>
        <li><strong>GPU Issues:</strong> Sometimes a reball or single component swap</li>
      </ul>
      <p>This requires specialized equipment (microscopes, hot air stations, pre-heaters) and years of experience. It's not a DIY job—but it is possible.</p>
      
      <h2>When to Repair vs Replace</h2>
      <p><strong>Repair if:</strong> Your Mac is 1-5 years old, has 16GB+ RAM, or contains irreplaceable data</p>
      <p><strong>Replace if:</strong> It's 7+ years old, or repair cost approaches replacement value</p>
      
      <p><a href="/microsoldering-repair-hull">Request a free diagnosis</a> and we'll give you an honest assessment before you commit to anything.</p>
    `},"weee-regulations-2025-business-guide":{title:"WEEE Regulations 2025: What Hull Businesses Need to Know",date:"2026-01-20",category:"Compliance",readTime:"6 min read",author:"Jake Fieldhouse",content:`
      <p class="lead">The new WEEE regulations effective November 2025 change how UK businesses must dispose of electronic waste. Here's your compliance checklist.</p>
      
      <h2>What Changed</h2>
      <p>The updated regulations increase producer responsibility and tighten requirements for business e-waste disposal. Key changes:</p>
      <ul>
        <li>Stricter documentation requirements for Waste Transfer Notes</li>
        <li>Enhanced data destruction certification requirements</li>
        <li>Higher penalties for non-compliance</li>
      </ul>
      
      <h2>Your Compliance Checklist</h2>
      <ol>
        <li>Use only Environment Agency registered waste carriers</li>
        <li>Obtain Certificate of Destruction for data-bearing devices</li>
        <li>Keep Waste Transfer Notes for 2+ years</li>
        <li>Verify your disposal provider's registration (check CBDL number)</li>
      </ol>
      
      <h2>GDPR Intersection</h2>
      <p>Remember: improper data disposal can result in fines up to £17.5 million under UK GDPR. Data destruction certification isn't optional—it's essential.</p>
      
      <p><a href="/secure-data-disposal-hull">Our free e-waste collection</a> includes NIST 800-88 data destruction and full documentation.</p>
    `}},o=T(()=>{const u=h.params.slug;return g[u]||null}),f={"AI Search":"bg-violet-500/10 text-violet-400 border-violet-500/20",Repair:"bg-red-500/10 text-red-400 border-red-500/20",Compliance:"bg-amber-500/10 text-amber-400 border-amber-500/20"};return b(()=>{o.value||m.push("/blog")}),(u,t)=>{const a=I("router-link");return o.value?(C(),x("div",A,[e("header",{ref_key:"heroRef",ref:l,class:"space-y-6 mt-10"},[i(a,{to:"/blog",class:"text-neutral-500 hover:text-white transition-colors text-sm"},{default:n(()=>[...t[0]||(t[0]=[r(" ← Back to Blog ",-1)])]),_:1}),e("div",R,[e("span",{class:w(["px-3 py-1 rounded-full text-xs font-medium border",f[o.value.category]])},s(o.value.category),3),e("span",B,s(o.value.date),1),e("span",W,"• "+s(o.value.readTime),1)]),e("h1",G,s(o.value.title),1),e("p",S,[t[1]||(t[1]=r(" By ",-1)),e("span",E,s(o.value.author),1)])],512),e("article",{ref_key:"contentRef",ref:c,class:"prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-white prose-p:text-neutral-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:underline hover:prose-a:text-blue-300 prose-strong:text-white prose-ul:text-neutral-300 prose-ol:text-neutral-300 prose-li:marker:text-neutral-500",innerHTML:o.value.content},null,8,M),e("div",P,[t[3]||(t[3]=e("h3",{class:"text-xl font-bold text-white mb-4"},"Need Help With This?",-1)),t[4]||(t[4]=e("p",{class:"text-neutral-400 mb-6"}," Whether it's AI optimization, device repair, or e-waste disposal—I respond within 24 hours. ",-1)),i(a,{to:"/contact",class:"inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3 rounded-xl transition-colors"},{default:n(()=>[...t[2]||(t[2]=[r(" Get in Touch ",-1)])]),_:1})]),e("div",D,[i(a,{to:"/blog",class:"text-neutral-500 hover:text-white transition-colors"},{default:n(()=>[...t[5]||(t[5]=[r(" ← Back to Blog ",-1)])]),_:1})])])):v("",!0)}}});export{L as default};
