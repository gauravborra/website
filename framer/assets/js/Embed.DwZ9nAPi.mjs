import{n as e}from"./rolldown-runtime.Cc88nRxQ.mjs";import{B as t,F as n,N as r,O as i,R as a,c as o,o as s,w as c}from"./react.VFX95UZR.mjs";import{$ as l,M as u,s as d}from"./framer.BaO_qq2l.mjs";import{f,m as p,o as m,t as h}from"./OIjZRBmWDcIE2B6qgG1j.DSqdkLpi.mjs";var g=e((()=>{h()}));function _({type:e,url:t,html:n,style:r={}}){return e===`url`&&t?o(y,{url:t,style:r}):e===`html`&&n?o(x,{html:n,style:r}):o(v,{style:r})}function v({style:e}){return o(`div`,{style:{minHeight:O(e),...p,overflow:`hidden`,...e},children:o(`div`,{style:j,children:`To embed a website or widget, add it to the properties\xA0panel.`})})}function y({url:e,style:t}){let i=!t.height;/[a-z]+:\/\//.test(e)||(e=`https://`+e);let a=m(),[s,c]=n(a?void 0:!1);return r(()=>{if(!a)return;let t=!0;c(void 0);async function n(){let n=await fetch(`https://api.framer.com/functions/check-iframe-url?url=`+encodeURIComponent(e));if(n.status==200){let{isBlocked:e}=await n.json();t&&c(e)}else{let e=await n.text();console.error(e),c(Error(`This site can’t be reached.`))}}return n().catch(e=>{console.error(e),c(e)}),()=>{t=!1}},[e]),a&&i?o(D,{message:`URL embeds do not support auto height.`,style:t}):e.startsWith(`https://`)?s===void 0?o(E,{}):s instanceof Error?o(D,{message:s.message,style:t}):s===!0?o(D,{message:`Can’t embed ${e} due to its content security policy.`,style:t}):o(`iframe`,{src:e,style:{...k,...t},loading:`lazy`,fetchPriority:a?`low`:`auto`,referrerPolicy:`no-referrer`,sandbox:b(a)}):o(D,{message:`Unsupported protocol.`,style:t})}function b(e){let t=[`allow-same-origin`,`allow-scripts`];return e||t.push(`allow-downloads`,`allow-forms`,`allow-modals`,`allow-orientation-lock`,`allow-pointer-lock`,`allow-popups`,`allow-popups-to-escape-sandbox`,`allow-presentation`,`allow-storage-access-by-user-activation`,`allow-top-navigation-by-user-activation`),t.join(` `)}function x({html:e,...t}){if(e.includes(`<\/script>`)){let n=e.includes(`</spline-viewer>`),r=e.includes(`<!-- framer-direct-embed -->`);return o(n||r?C:S,{html:e,...t})}return o(w,{html:e,...t})}function S({html:e,style:a}){let s=i(),[c,l]=n(0);r(()=>{let e=s.current?.contentWindow;function n(t){if(t.source!==e)return;let n=t.data;if(typeof n!=`object`||!n)return;let r=n.embedHeight;typeof r==`number`&&l(r)}return t.addEventListener(`message`,n),e?.postMessage(`getEmbedHeight`,`*`),()=>{t.removeEventListener(`message`,n)}},[]);let u=`
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${e}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`,d={...k,...a};return a.height||(d.height=c+`px`),o(`iframe`,{ref:s,style:d,srcDoc:u})}function C({html:e,style:t}){let n=i();return r(()=>{let t=n.current;if(t)return t.innerHTML=e,T(t),()=>{t.innerHTML=``}},[e]),o(`div`,{ref:n,style:{...A,...t}})}function w({html:e,style:t}){return o(`div`,{style:{...A,...t},dangerouslySetInnerHTML:{__html:e}})}function T(e){if(e instanceof Element&&e.tagName===`SCRIPT`){let t=document.createElement(`script`);t.text=e.innerHTML;for(let{name:n,value:r}of e.attributes)t.setAttribute(n,r);e.parentElement.replaceChild(t,e)}else for(let t of e.childNodes)T(t)}function E(){return o(`div`,{className:`framerInternalUI-componentPlaceholder`,style:{...f,overflow:`hidden`},children:o(`div`,{style:j,children:`Loading…`})})}function D({message:e,style:t}){return o(`div`,{className:`framerInternalUI-errorPlaceholder`,style:{minHeight:O(t),...f,overflow:`hidden`,...t},children:o(`div`,{style:j,children:e})})}function O(e){if(!e.height)return 200}var k,A,j,M=e((()=>{a(),s(),c(),l(),g(),u(_,{type:{type:d.Enum,defaultValue:`url`,displaySegmentedControl:!0,options:[`url`,`html`],optionTitles:[`URL`,`HTML`]},url:{title:`URL`,type:d.String,description:`Some websites don’t support embedding.`,hidden(e){return e.type!==`url`}},html:{title:`HTML`,type:d.String,displayTextArea:!0,hidden(e){return e.type!==`html`}}}),k={width:`100%`,height:`100%`,border:`none`},A={width:`100%`,height:`100%`,display:`flex`,flexDirection:`column`,justifyContent:`center`,alignItems:`center`},j={textAlign:`center`,minWidth:140}}));export{M as n,_ as t};
//# sourceMappingURL=Embed.DwZ9nAPi.mjs.map