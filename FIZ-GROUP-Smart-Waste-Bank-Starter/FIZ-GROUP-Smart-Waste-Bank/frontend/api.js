const API=(window.FIZ_CONFIG?.API_BASE_URL||'http://localhost:3000/api').replace(/\/$/,'');
const token=()=>localStorage.getItem('fiz_token');
async function api(path,opt={}){const h={'Content-Type':'application/json',...(opt.headers||{})};if(token())h.Authorization='Bearer '+token();const r=await fetch(API+path,{...opt,headers:h});const d=await r.json().catch(()=>({message:'Respons server tidak valid'}));if(!r.ok)throw Error(d.message||'Permintaan gagal');return d}
function logout(){localStorage.clear();location.href='login.html'}
function guard(){if(!token())location.href='login.html'}
