/* =========================================================
   GLOBAL PHOTO STORE
   ========================================================= */
const PHOTOS = [];

/* =========================================================
   ICONS
   ========================================================= */
const I = {
  phone:`<svg viewBox="0 0 24 24" fill="#fff"><path d="M6.6 10.8c1.45 2.85 3.75 5.15 6.6 6.6l2.2-2.2c.28-.28.68-.37 1.04-.25 1.12.37 2.32.57 3.56.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.6 21 3 13.4 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.44.57 3.56.12.36.03.76-.25 1.04l-2.22 2.2z"/></svg>`,
  msg:`<svg viewBox="0 0 24 24" fill="#fff"><path d="M12 3.2C6.9 3.2 3 6.75 3 11.1c0 2.45 1.28 4.65 3.3 6.12V21.4l3.35-1.85c.76.16 1.55.25 2.35.25 5.1 0 9-3.55 9-7.9S17.1 3.2 12 3.2z"/></svg>`,
  safari:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.2" fill="none" stroke="#fff" stroke-width="1.5"/><path d="M16.8 7.2l-2.7 6.5-6.5 2.7 2.7-6.5z" fill="#ff3b30"/><path d="M16.8 7.2l-4.5 4.5-4.7 4.7 2.7-6.5z" fill="#fff"/></svg>`,
  camera:`<svg viewBox="0 0 24 24"><path d="M9.2 3.6l-1.4 2H4.2c-.9 0-1.6.72-1.6 1.6v11.2c0 .88.7 1.6 1.6 1.6h15.6c.9 0 1.6-.72 1.6-1.6V7.2c0-.88-.7-1.6-1.6-1.6h-3.6l-1.4-2H9.2z" fill="#fff"/><circle cx="12" cy="12.6" r="3.7" fill="#3a3a3c"/><circle cx="12" cy="12.6" r="2.2" fill="#8e8e93"/></svg>`,
  photos:`<svg viewBox="0 0 24 24"><g transform="translate(12,12)" style="mix-blend-mode:multiply"><ellipse rx="2.6" ry="6.4" fill="#ffcc00"/><ellipse rx="2.6" ry="6.4" fill="#ff9500" transform="rotate(45)"/><ellipse rx="2.6" ry="6.4" fill="#ff3b30" transform="rotate(90)"/><ellipse rx="2.6" ry="6.4" fill="#ff2d55" transform="rotate(135)"/><ellipse rx="2.6" ry="6.4" fill="#af52de" transform="rotate(180)"/><ellipse rx="2.6" ry="6.4" fill="#007aff" transform="rotate(225)"/><ellipse rx="2.6" ry="6.4" fill="#34c759" transform="rotate(270)"/><ellipse rx="2.6" ry="6.4" fill="#5ac8fa" transform="rotate(315)"/></g></svg>`,
  weather:`<svg viewBox="0 0 24 24"><circle cx="9" cy="9" r="3.6" fill="#ffcc00"/><path d="M17.5 19H7.2a4.2 4.2 0 010-8.4h.35A5.4 5.4 0 0117.6 12a3.5 3.5 0 01-.1 7z" fill="#fff"/></svg>`,
  clock:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#fff"/><g stroke="#1c1c1e" stroke-width="1.3" stroke-linecap="round"><path d="M12 3.2v2M12 18.8v2M3.2 12h2M18.8 12h2"/></g><path d="M12 12V6.6" stroke="#1c1c1e" stroke-width="1.7" stroke-linecap="round"/><path d="M12 12l3.6 2.4" stroke="#1c1c1e" stroke-width="1.7" stroke-linecap="round"/><circle cx="12" cy="12" r="1.2" fill="#ff9f0a"/></svg>`,
  maps:`<svg viewBox="0 0 24 24"><path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.9 6.5 12.5 6.5 12.5S18.5 13.9 18.5 9c0-3.6-2.9-6.5-6.5-6.5z" fill="#fff"/><circle cx="12" cy="9" r="2.5" fill="#34c759"/></svg>`,
  notes:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="3" fill="#fff"/><g stroke="#c7c7cc" stroke-width="1.4" stroke-linecap="round"><path d="M7 8.5h10M7 12h10M7 15.5h6"/></g></svg>`,
  calc:`<svg viewBox="0 0 24 24"><rect x="3.5" y="2.5" width="17" height="19" rx="3" fill="#3a3a3c"/><rect x="6" y="5" width="12" height="4.2" rx="1" fill="#8e8e93"/><g fill="#ff9f0a"><circle cx="7.6" cy="12.4" r="1.5"/><circle cx="12" cy="12.4" r="1.5"/><circle cx="16.4" cy="12.4" r="1.5"/><circle cx="7.6" cy="17.2" r="1.5"/><circle cx="12" cy="17.2" r="1.5"/><circle cx="16.4" cy="17.2" r="1.5"/></g></svg>`,
  settings:`<svg viewBox="0 0 24 24"><g fill="#fff"><circle cx="12" cy="12" r="8.4"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(45 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(90 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(135 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(180 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(225 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(270 12 12)"/><rect x="10.8" y="0.4" width="2.4" height="5" rx="1.1" transform="rotate(315 12 12)"/></g><circle cx="12" cy="12" r="3.6" fill="#8e8e93"/><circle cx="12" cy="12" r="1.7" fill="#3a3a3c"/></svg>`,
  game:`<svg viewBox="0 0 24 24" fill="#fff"><path d="M7.2 6h9.6a5.2 5.2 0 015.1 6.2l-.85 4.3A2.6 2.6 0 0118.5 18.5c-.75 0-1.46-.32-1.96-.88L15 15.9H9l-1.54 1.72c-.5.56-1.2.88-1.96.88a2.6 2.6 0 01-2.55-2L2.1 12.2A5.2 5.2 0 017.2 6z"/><path d="M7.4 10.6v3.2M5.8 12.2h3.2" stroke="#1c1c1e" stroke-width="1.5" stroke-linecap="round"/><circle cx="16" cy="11.4" r="1.25" fill="#1c1c1e"/><circle cx="18.2" cy="13.6" r="1.25" fill="#1c1c1e"/></svg>`,
  appstore:`<svg viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.9" stroke-linecap="round"><path d="M6.6 17.6L12 8.2l5.4 9.4"/><path d="M9.1 13.8h5.8"/><path d="M4.4 20.6l1.6-2.8"/><path d="M19.6 20.6l-1.6-2.8"/></svg>`,
  calendar:`<svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="17" rx="4" fill="#fff"/><rect x="3" y="4" width="18" height="5" rx="4" fill="#ff3b30"/><text x="12" y="18.4" font-size="9.5" font-weight="700" fill="#1c1c1e" text-anchor="middle" font-family="Helvetica,Arial">__DAY__</text></svg>`,
  health:`<svg viewBox="0 0 24 24"><path d="M12 20.5S3.5 15 3.5 9.2A4.7 4.7 0 0112 6.4a4.7 4.7 0 018.5 2.8c0 5.8-8.5 11.3-8.5 11.3z" fill="#fff"/></svg>`,
  music:`<svg viewBox="0 0 24 24" fill="#fff"><path d="M20.5 2.6v11.9a3.15 3.15 0 11-2.1-2.97V7.05l-8 1.7v8.75a3.15 3.15 0 11-2.1-2.97V5.6l12.2-3z"/></svg>`,
  wallet:`<svg viewBox="0 0 24 24"><rect x="3" y="6" width="18" height="13" rx="4" fill="#fff"/><rect x="3" y="4.6" width="18" height="6" rx="3" fill="#5ac8fa"/><rect x="3" y="11" width="18" height="5.4" rx="2" fill="#ff9f0a"/><rect x="14.5" y="12.4" width="5" height="3" rx="1.5" fill="#1c1c1e"/></svg>`,
  podcast:`<svg viewBox="0 0 24 24" fill="#fff"><circle cx="12" cy="8" r="3.4"/><path d="M12 12.6c-2.6 0-4.6 1.7-4.2 4l.9 4.2c.15.7.75 1.2 1.5 1.2h3.6c.75 0 1.35-.5 1.5-1.2l.9-4.2c.4-2.3-1.6-4-4.2-4z"/><path d="M5.8 9.6a6.8 6.8 0 1112.4 0" fill="none" stroke="#fff" stroke-width="1.6" stroke-linecap="round"/></svg>`,
  reminders:`<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="4" fill="#fff"/><g><circle cx="7.6" cy="8.4" r="1.6" fill="#ff3b30"/><circle cx="7.6" cy="14" r="1.6" fill="#ff9500"/><circle cx="7.6" cy="19.6" r="1.6" fill="#007aff"/></g></svg>`,
  compass:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#1c1c1e"/><circle cx="12" cy="12" r="9" fill="none" stroke="#48484a" stroke-width="1"/><path d="M16.2 7.8l-2.6 6.4-6.4 2.6 2.6-6.4z" fill="#ff3b30"/><path d="M16.2 7.8l-4.5 4.5-4.5 4.5 2.6-6.4z" fill="#fff"/></svg>`,
  findmy:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill="#5ac8fa"/><circle cx="12" cy="12" r="6.2" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>`,
  files:`<svg viewBox="0 0 24 24"><path d="M4 6.5c0-1.1.9-2 2-2h3.2l1.8 2H18c1.1 0 2 .9 2 2V18c0 1.1-.9 2-2 2H6c-1.1 0-2-.9-2-2V6.5z" fill="#fff"/></svg>`,
  shortcut:`<svg viewBox="0 0 24 24"><defs><linearGradient id="sg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff5e8a"/><stop offset="1" stop-color="#b06bff"/></linearGradient></defs><path d="M5 6c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H7c-1.1 0-2-.9-2-2V6z" fill="url(#sg)"/><path d="M9 8.5l6 7M9 15.5l6-7" stroke="#fff" stroke-width="1.8" stroke-linecap="round"/></svg>`,
  chrome:`<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.4" fill="#fff"/><circle cx="12" cy="12" r="4.1" fill="#4285f4"/><path d="M12 7.9h10.2A10.4 10.4 0 0012 1.6 10.4 10.4 0 002.7 6.6h7.6A4.1 4.1 0 0112 7.9z" fill="#ea4335"/><path d="M15.6 13.5l-5.1 8.9A10.4 10.4 0 0012 22.4a10.4 10.4 0 009-5.2l-3.8-6.6a4.1 4.1 0 01-1.6 2.9z" fill="#34a853"/><path d="M8.4 10.5a4.1 4.1 0 004.8 5.9l-5.1 8.9A10.4 10.4 0 013 12a10.4 10.4 0 011-4.4h7.1a4.1 4.1 0 00-2.7 2.9z" fill="#fbbc05"/></svg>`
};
// Replace calendar day
I.calendar = I.calendar.replace('__DAY__', new Date().getDate());

/* =========================================================
   HELPERS
   ========================================================= */
function esc(s){ return String(s).replace(/[&<>"]/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c])); }
function stub(emoji,title,desc){
  return `<div class="app-inner" style="background:#000">
    <div class="app-top"><span class="app-title">${title}</span></div>
    <div class="stub"><div class="big">${emoji}</div><h3>${title}</h3><p>${desc}</p></div>
  </div>`;
}
function stubPage(emoji,title,desc){ return stub(emoji,title,desc); }
function card(emoji,label,val,unit){
  return `<div style="background:rgba(255,255,255,.08);border-radius:18px;padding:16px;color:#fff">
    <div style="font-size:20px">${emoji}</div>
    <div style="font-size:12.5px;color:#8e8e93;margin-top:8px">${label}</div>
    <div style="font-size:26px;font-weight:600;margin-top:2px">${val}</div>
    <div style="font-size:11.5px;color:#636366">${unit}</div>
  </div>`;
}

/* =========================================================
   SETTINGS STATE & DATA
   ========================================================= */
const SettingsState = {
  airplane:false, wifi:true, bluetooth:true, cellular:true,
  brightness:0.7, volume:0.5, darkMode:false,
  autoBrightness:true, trueTone:true, nightShift:false,
  haptics:true, vibrateRing:true, vibrateSilent:true,
  faceid:true, faceidStore:true, faceidWallet:true, faceidPass:true,
  passcode:true, lowPower:false, autoUpdate:true,
  backgroundRefresh:true, wifiName:'Home 5G', deviceName:'iPhone của Tôi',
  autoLock:'1 phút', ringtone:'Reflection', textTone:'Note',
  changeWithButtons:true, askWifi:true, cellData:true, fiveG:true,
  lowData:false, roamingData:false, hotspotAllow:true, raiseWake:true,
  locationSvc:true, trackingAllow:false, shareAnalytics:true,
  shareAnalyticsICloud:true, personalAds:false, lockdownMode:false,
  optimalCharging:true, limit80:false, overnight:true, autoTime:true,
  eraseData:false, optimalCharge:true, autoTimeZone:true
};

const AboutInfo = {
  ios:'26.1', model:'iPhone 17 Pro Max', modelNum:'A3090',
  serial:'F2LX9K8PQ1Y3', imei:'35 623410 823456 1',
  imei2:'35 623410 823456 9', meid:'35234108234561',
  eid:'89049 00012 34567 8901 2', modem:'Snapdragon X85 5G',
  capacity:'256 GB', available:'127,6 GB',
  wifiMac:'7C:D9:5C:2A:1F:88', btMac:'7C:D9:5C:2A:1F:89',
  carrier:'Viettel 5G', warranty:'12/10/2027'
};

const StorageData = {
  total:256, used:128.4,
  breakdown:[
    {name:'Ảnh', size:42.8, color:'#ff9f0a'},
    {name:'Ứng dụng', size:38.2, color:'#34c759'},
    {name:'Hệ thống', size:14.2, color:'#8e8e93'},
    {name:'Tin nhắn', size:12.4, color:'#5ac8fa'},
    {name:'Nhạc', size:8.6, color:'#ff2d55'},
    {name:'Safari', size:5.3, color:'#007aff'},
    {name:'Khác', size:6.9, color:'#af52de'}
  ],
  apps:[
    {name:'Photos', icon:'🖼️', size:'42,8 GB'},
    {name:'Instagram', icon:'📷', size:'12,4 GB'},
    {name:'TikTok', icon:'🎵', size:'8,9 GB'},
    {name:'YouTube', icon:'▶️', size:'6,2 GB'},
    {name:'Messages', icon:'💬', size:'5,4 GB'},
    {name:'WhatsApp', icon:'💚', size:'4,8 GB'},
    {name:'Spotify', icon:'🎧', size:'3,6 GB'},
    {name:'Gmail', icon:'✉️', size:'3,1 GB'},
    {name:'Chrome', icon:'🌐', size:'2,8 GB'},
    {name:'Games', icon:'🎮', size:'2,4 GB'}
  ]
};

/* =========================================================
   SETTINGS PAGES
   ========================================================= */
const SettingsPages = (function(){
  const st = SettingsState;
  const about = AboutInfo;
  const storage = StorageData;

  const toggleRow = (label,key,icon,bg)=>`
    <div class="set-row" data-toggle-key="${key}">
      ${icon?`<div class="set-ico" style="background:${bg||'#8e8e93'}">${icon}</div>`:''}
      <span>${label}</span>
      <div class="toggle ${st[key]?'on':''}" data-t><i></i></div>
    </div>`;

  const navRow = (label,target,icon,bg,value,badge)=>`
    <div class="set-row" data-nav="${target}">
      ${icon?`<div class="set-ico" style="background:${bg||'#8e8e93'}">${icon}</div>`:''}
      <span>${label}</span>
      ${value?`<span class="set-value">${value}</span>`:''}
      ${badge?`<span class="set-badge">${badge}</span>`:''}
      <span class="arrow" style="margin-left:${value||badge?'8px':'auto'}">›</span>
    </div>`;

  const staticRow = (label,value,icon,bg)=>`
    <div class="set-row">
      ${icon?`<div class="set-ico" style="background:${bg||'#8e8e93'}">${icon}</div>`:''}
      <span>${label}</span>
      ${value?`<span class="set-value">${value}</span>`:''}
    </div>`;

  return {
    main:{ title:'Cài đặt', render:()=>`
      <div class="set-search">🔍 Tìm kiếm</div>
      <div class="set-profile">
        <div class="avatar">N</div>
        <div class="info"><b>ĐỖ TUẤN HƯNG</b><small>Apple ID, iCloud, Mua hàng</small></div>
        <span class="arrow" style="color:#636366">›</span>
      </div>
      <div class="set-group">
        ${toggleRow('Chế độ máy bay','airplane','✈️','#ff9f0a')}
        ${navRow('Wi‑Fi','wifi','📶','#007aff', st.wifi?st.wifiName:'Tắt')}
        ${navRow('Bluetooth','bluetooth','🔵','#007aff', st.bluetooth?'Bật':'Tắt')}
        ${navRow('Di động','cellular','📱','#30d158', st.cellular?'Bật':'Tắt')}
      </div>
      <div class="set-group">
        ${navRow('Thông báo','notifications','🔔','#ff375f')}
        ${navRow('Âm thanh & Cảm ứng','sounds','🔊','#ff2d55')}
        ${navRow('Tập trung','focus','🌙','#5e5ce6')}
        ${navRow('Thời gian sử dụng','screentime','⏱️','#5e5ce6','3h 42m')}
      </div>
      <div class="set-group">
        ${navRow('Cài đặt chung','general','⚙️','#8e8e93')}
        ${navRow('Trợ năng','accessibility','♿','#007aff')}
        ${navRow('Hình nền','wallpaper','🖼️','#5ac8fa')}
        ${navRow('Màn hình & Độ sáng','display','☀️','#007aff')}
        ${navRow('Pin','battery','🔋','#30d158','87%')}
      </div>
      <div class="set-group">
        ${navRow('Face ID & Mật mã','faceid','🔒','#30d158', st.faceid?'Bật':'Tắt')}
        ${navRow('SOS khẩn cấp','sos','🆘','#ff3b30')}
        ${navRow('Quyền riêng tư & Bảo mật','privacy','🛡️','#007aff')}
      </div>
      <div class="set-group">
        ${navRow('App Store','appstore','🅰️','#007aff')}
        ${navRow('Ví & Apple Pay','wallet','💳','#000')}
      </div>
      <div class="set-group">
        ${navRow('Mật khẩu','passwords','🔑','#8e8e93')}
        ${navRow('Thư','mail','✉️','#007aff')}
        ${navRow('Danh bạ','contacts','👤','#8e8e93')}
        ${navRow('Lịch','calendar','📅','#ff3b30')}
        ${navRow('Ghi chú','notes','📝','#ffcc00')}
        ${navRow('Nhắc nhở','reminders','✅','#fff')}
      </div>
      <div style="text-align:center;color:#48484a;font-size:11.5px;padding:6px 0 40px">
        iPhone 17 Pro Max · iOS 26.1
      </div>`},

    general:{ title:'Cài đặt chung', render:()=>`
      <div class="set-group">
        ${navRow('Giới thiệu','about')}
        ${navRow('Cập nhật phần mềm','software',null,null,null,'1')}
      </div>
      <div class="set-group">
        ${navRow('iPhone Storage','storage',null,null,about.available+' trống')}
        ${navRow('Làm mới ứng dụng chạy nền','bgrefresh',null,null, st.backgroundRefresh?'Bật':'Tắt')}
      </div>
      <div class="set-group">
        ${navRow('Ngày & Giờ','datetime')}
        ${navRow('Bàn phím','keyboard')}
        ${navRow('Phông chữ','fonts')}
        ${navRow('Ngôn ngữ & Vùng','language',null,null,'Tiếng Việt')}
        ${navRow('Từ điển','dictionary')}
      </div>
      <div class="set-group">${navRow('VPN & Quản lý thiết bị','vpn')}</div>
      <div class="set-group">${navRow('Pháp lý & Quy định','legal')}</div>
      <div class="set-group">${navRow('Chuyển hoặc Đặt lại iPhone','reset')}</div>
      <div class="set-group">${navRow('Tắt nguồn','shutdown')}</div>`},

    about:{ title:'Giới thiệu', render:()=>`
      <div style="text-align:center;padding:8px 0 18px">
        <div style="font-size:52px">📱</div>
        <div style="color:#fff;font-size:19px;font-weight:600;margin-top:6px">${about.model}</div>
        <div style="color:#8e8e93;font-size:13px;margin-top:2px">iOS ${about.ios}</div>
      </div>
      <div class="set-group">
        ${staticRow('Tên', st.deviceName)}
        ${staticRow('Phiên bản iOS', about.ios)}
        ${staticRow('Tên kiểu máy', about.model)}
        ${staticRow('Số kiểu máy', about.modelNum)}
        ${staticRow('Số sê-ri', about.serial)}
      </div>
      <div class="set-group">
        ${staticRow('Bài hát','1.847')}
        ${staticRow('Video','236')}
        ${staticRow('Ảnh','12.483')}
        ${staticRow('Ứng dụng','94')}
        ${staticRow('Dung lượng', about.capacity)}
        ${staticRow('Còn trống', about.available)}
      </div>
      <div class="set-group">
        ${staticRow('Nhà mạng', about.carrier)}
        ${staticRow('IMEI', about.imei)}
        ${staticRow('IMEI2', about.imei2)}
        ${staticRow('MEID', about.meid)}
        ${staticRow('EID', about.eid)}
        ${staticRow('Modem Firmware', about.modem)}
      </div>
      <div class="set-group">
        ${staticRow('Địa chỉ Wi‑Fi', about.wifiMac)}
        ${staticRow('Địa chỉ Bluetooth', about.btMac)}
      </div>
      <div class="set-group">${staticRow('Bảo hành','Còn hạn đến '+about.warranty)}</div>
      <div class="set-group">
        ${navRow('Chứng nhận','certificates')}
        ${navRow('Thông tin pháp lý','legalinfo')}
      </div>`},

    storage:{ title:'iPhone Storage', render:()=>{
      const used = storage.breakdown.reduce((a,b)=>a+b.size,0);
      const bars = storage.breakdown.map(b=>`<div style="width:${(b.size/storage.total*100)}%;background:${b.color}"></div>`).join('');
      const legend = storage.breakdown.map(b=>`<div class="item"><span class="dot" style="background:${b.color}"></span><span>${b.name} · ${b.size} GB</span></div>`).join('');
      const apps = storage.apps.map(a=>`<div class="app-row"><div class="app-ico">${a.icon}</div><div class="app-info"><b>${a.name}</b><small>Ứng dụng</small></div><span class="size">${a.size}</span></div>`).join('');
      return `
        <div style="text-align:center;padding:8px 0 6px">
          <div style="font-size:14px;color:#8e8e93">Đã dùng</div>
          <div style="font-size:34px;font-weight:600;letter-spacing:-1px;color:#fff">
            ${used.toFixed(1)} <span style="font-size:18px;color:#8e8e93">/ ${storage.total} GB</span>
          </div>
        </div>
        <div class="storage-bar">${bars}</div>
        <div class="storage-legend">${legend}</div>
        <div style="background:rgba(255,255,255,.06);border-radius:16px;padding:14px 16px;margin-bottom:18px">
          <div style="display:flex;justify-content:space-between;color:#fff;font-size:15px;margin-bottom:4px"><span>Tổng dung lượng</span><span>${storage.total} GB</span></div>
          <div style="display:flex;justify-content:space-between;color:#fff;font-size:15px;margin-bottom:4px"><span>Đã dùng</span><span>${used.toFixed(1)} GB</span></div>
          <div style="display:flex;justify-content:space-between;color:#30d158;font-size:15px;font-weight:500"><span>Còn trống</span><span>${(storage.total-used).toFixed(1)} GB</span></div>
        </div>
        <div style="color:#8e8e93;font-size:12.5px;margin-bottom:8px;padding-left:2px">Ứng dụng</div>
        <div class="storage-apps">${apps}</div>
        <div style="height:30px"></div>`;
    }},

    software:{ title:'Cập nhật phần mềm', render:()=>`
      <div style="padding:14px 0 10px">
        <div style="color:#fff;font-size:22px;font-weight:600">iOS 26.1</div>
        <div style="color:#8e8e93;font-size:13.5px;margin-top:4px">Apple Inc.</div>
      </div>
      <div style="background:rgba(255,255,255,.06);border-radius:16px;padding:16px;margin-bottom:18px;color:#fff;font-size:14.5px;line-height:1.55">
        Bản cập nhật này cải thiện hiệu suất, sửa lỗi và nâng cao bảo mật cho iPhone của bạn.
      </div>
      <div class="set-group">${toggleRow('Tự động cập nhật','autoUpdate','🔄','#007aff')}</div>
      <div class="set-group">
        <div class="set-row" data-nav="beta"><span>iOS 26.2 Beta</span><span class="set-value">Có sẵn</span><span class="arrow" style="margin-left:8px">›</span></div>
      </div>`},

    display:{ title:'Màn hình & Độ sáng', render:()=>`
      <div style="color:#8e8e93;font-size:12px;margin:8px 0;padding-left:2px;text-transform:uppercase;letter-spacing:.5px">Giao diện</div>
      <div class="appearance-row">
        <div class="appearance-card ${!st.darkMode?'active':''}" data-appearance="light">
          <div class="preview" style="background:#f2f2f7">
            <i style="background:#c7c7cc;width:70%"></i><i style="background:#c7c7cc;width:50%"></i><i style="background:#c7c7cc;width:60%"></i>
          </div><span>Sáng</span>
        </div>
        <div class="appearance-card ${st.darkMode?'active':''}" data-appearance="dark">
          <div class="preview" style="background:#1c1c1e">
            <i style="background:#48484a;width:70%"></i><i style="background:#48484a;width:50%"></i><i style="background:#48484a;width:60%"></i>
          </div><span>Tối</span>
        </div>
      </div>
      <div class="set-group">
        <div class="set-row" style="flex-direction:column;align-items:stretch;padding:0">
          <div style="padding:13px 16px 8px;display:flex;justify-content:space-between">
            <span>Độ sáng</span><span class="set-value" id="brightVal">${Math.round(st.brightness*100)}%</span>
          </div>
          <div style="padding:0 16px 16px">
            <div class="bright-slider" id="brightSlider">
              <div class="fill" style="width:${st.brightness*100}%"></div>
              <div class="sun">☀️</div>
            </div>
          </div>
        </div>
      </div>
      <div class="set-group">
        ${toggleRow('Tự động','autoBrightness','','#007aff')}
        ${toggleRow('True Tone','trueTone','','#007aff')}
        ${toggleRow('Night Shift','nightShift','','#5e5ce6')}
      </div>
      <div class="set-group">
        ${navRow('Tự động khoá','autolock',null,null, st.autoLock)}
        ${navRow('Nâng để đánh thức','raisewake')}
      </div>`,
      bind:(body)=>{
        body.querySelectorAll('[data-appearance]').forEach(el=>{
          el.onclick=()=>{
            st.darkMode = el.dataset.appearance==='dark';
            body.querySelectorAll('[data-appearance]').forEach(e=>e.classList.toggle('active',e===el));
          };
        });
        const s = body.querySelector('#brightSlider');
        const f = s.querySelector('.fill');
        const v = body.querySelector('#brightVal');
        s.addEventListener('pointerdown', e=>{
          e.preventDefault();
          const upd = x=>{
            const r = s.getBoundingClientRect();
            const p = Math.max(0,Math.min(1,(x-r.left)/r.width));
            st.brightness = p; f.style.width=(p*100)+'%'; v.textContent=Math.round(p*100)+'%';
          };
          upd(e.clientX);
          const mv = ev=>upd(ev.clientX);
          const up = ()=>{window.removeEventListener('pointermove',mv);window.removeEventListener('pointerup',up);};
          window.addEventListener('pointermove',mv); window.addEventListener('pointerup',up);
        });
      }},

    wifi:{ title:'Wi‑Fi', render:()=>`
      <div class="set-group">
        <div class="set-row" data-toggle-key="wifi"><span>Wi‑Fi</span>
          <div class="toggle ${st.wifi?'on':''}" data-t><i></i></div></div>
      </div>
      ${st.wifi?`
        <div style="color:#8e8e93;font-size:12px;margin:0 0 8px;padding-left:2px;text-transform:uppercase;letter-spacing:.5px">Mạng của tôi</div>
        <div class="set-group" style="padding:0 16px">
          <div class="wifi-item"><span style="color:#0a84ff;font-size:18px">✓</span>
            <div class="info"><b>${st.wifiName}</b><small>5GHz · WPA3</small></div>
            <span class="sig">📶</span><span class="arrow">ⓘ</span></div>
        </div>
        <div style="color:#8e8e93;font-size:12px;margin:14px 0 8px;padding-left:2px;text-transform:uppercase;letter-spacing:.5px">Mạng khác</div>
        <div class="set-group" style="padding:0 16px">
          <div class="wifi-item"><span class="lock">🔒</span><div class="info"><b>Cafe_WiFi</b></div><span class="sig">📶</span></div>
          <div class="wifi-item"><span class="lock">🔒</span><div class="info"><b>Viettel_5G</b></div><span class="sig">📶</span></div>
          <div class="wifi-item"><span class="lock">🔒</span><div class="info"><b>FPT_Telecom</b></div><span class="sig">📶</span></div>
          <div class="wifi-item"><span class="lock">🔒</span><div class="info"><b>Neighbor_2.4G</b></div><span class="sig">📶</span></div>
        </div>`:''}
      <div class="set-group">
        ${navRow('Hỏi để tham gia mạng','askwifi',null,null,'Bật')}
        ${navRow('Tự động tham gia Hotspot','autohotspot',null,null,'Hỏi')}
      </div>`,
      bind:(body,nav)=>{
        const t = body.querySelector('[data-toggle-key="wifi"] [data-t]');
        if(t) t.onclick = e=>{ e.stopPropagation(); st.wifi=!st.wifi; nav.rerender(); };
      }},

    bluetooth:{ title:'Bluetooth', render:()=>`
      <div class="set-group">
        <div class="set-row" data-toggle-key="bluetooth"><span>Bluetooth</span>
          <div class="toggle ${st.bluetooth?'on':''}" data-t><i></i></div></div>
      </div>
      ${st.bluetooth?`
        <div style="color:#8e8e93;font-size:12px;margin:0 0 8px;padding-left:2px;text-transform:uppercase;letter-spacing:.5px">Thiết bị của tôi</div>
        <div class="set-group" style="padding:0 16px">
          <div class="wifi-item"><span style="font-size:20px">⌚</span><div class="info"><b>Apple Watch Ultra 3</b><small>Đã kết nối</small></div><span class="arrow">ⓘ</span></div>
          <div class="wifi-item"><span style="font-size:20px">🎧</span><div class="info"><b>AirPods Pro 3</b><small>Đã kết nối · Pin 92%</small></div><span class="arrow">ⓘ</span></div>
        </div>
        <div style="color:#8e8e93;font-size:12px;margin:14px 0 8px;padding-left:2px;text-transform:uppercase;letter-spacing:.5px">Thiết bị khác</div>
        <div class="set-group" style="padding:0 16px">
          <div class="wifi-item"><span style="font-size:20px">🔊</span><div class="info"><b>JBL Flip 6</b></div></div>
          <div class="wifi-item"><span style="font-size:20px">🖥️</span><div class="info"><b>MacBook Pro M4</b></div></div>
        </div>`:''}`,
      bind:(body,nav)=>{
        const t = body.querySelector('[data-toggle-key="bluetooth"] [data-t]');
        if(t) t.onclick = e=>{ e.stopPropagation(); st.bluetooth=!st.bluetooth; nav.rerender(); };
      }},

    cellular:{ title:'Di động', render:()=>`
      <div class="set-group">
        <div class="set-row" data-toggle-key="cellular"><span>Dữ liệu di động</span>
          <div class="toggle ${st.cellular?'on':''}" data-t><i></i></div></div>
      </div>
      <div class="set-group">
        ${staticRow('Nhà mạng','Viettel 5G')}
        ${staticRow('Dữ liệu đã dùng','12,4 GB')}
        ${staticRow('Chu kỳ','1/10 – 31/10')}
      </div>
      <div class="set-group">
        ${navRow('Tuỳ chọn dữ liệu di động','dataoptions')}
        ${navRow('Chuyển vùng dữ liệu','roaming',null,null, st.roamingData?'Bật':'Tắt')}
        ${navRow('Điểm truy cập cá nhân','hotspot',null,null, st.hotspotAllow?'Bật':'Tắt')}
      </div>
      <div class="set-group">${navRow('SIM & eSIM','sims')}</div>`},

    sounds:{ title:'Âm thanh & Cảm ứng', render:()=>`
      <div class="set-group">
        <div class="set-row" style="flex-direction:column;align-items:stretch;padding:0">
          <div style="padding:13px 16px 8px;display:flex;justify-content:space-between">
            <span>Âm lượng</span><span class="set-value" id="volVal">${Math.round(st.volume*100)}%</span>
          </div>
          <div style="padding:0 16px 16px">
            <div class="bright-slider" id="volSlider" style="height:50px">
              <div class="fill" style="width:${st.volume*100}%;background:linear-gradient(90deg,#007aff,#5ac8fa)"></div>
              <div class="sun" style="color:#fff;font-size:16px">🔊</div>
            </div>
          </div>
        </div>
        ${toggleRow('Điều chỉnh bằng nút','changeWithButtons','','#007aff')}
      </div>
      <div class="set-group">
        <div class="set-row"><span>Nhạc chuông</span><span class="set-value">${st.ringtone}</span><span class="arrow" style="margin-left:8px">›</span></div>
        <div class="set-row"><span>Âm thanh tin nhắn</span><span class="set-value">${st.textTone}</span><span class="arrow" style="margin-left:8px">›</span></div>
        <div class="set-row"><span>Âm thanh thư mới</span><span class="set-value">None</span><span class="arrow" style="margin-left:8px">›</span></div>
        <div class="set-row"><span>Đã gửi thư</span><span class="set-value">Swoosh</span><span class="arrow" style="margin-left:8px">›</span></div>
        <div class="set-row"><span>Lịch</span><span class="set-value">Chord</span><span class="arrow" style="margin-left:8px">›</span></div>
      </div>
      <div class="set-group">
        ${toggleRow('Rung khi đổ chuông','vibrateRing','','#ff2d55')}
        ${toggleRow('Rung khi im lặng','vibrateSilent','','#ff2d55')}
        ${toggleRow('Phản hồi cảm ứng hệ thống','haptics','','#ff2d55')}
      </div>`,
      bind:(body)=>{
        const s = body.querySelector('#volSlider');
        const f = s.querySelector('.fill');
        const v = body.querySelector('#volVal');
        s.addEventListener('pointerdown', e=>{
          e.preventDefault();
          const upd = x=>{
            const r = s.getBoundingClientRect();
            const p = Math.max(0,Math.min(1,(x-r.left)/r.width));
            st.volume=p; f.style.width=(p*100)+'%'; v.textContent=Math.round(p*100)+'%';
          };
          upd(e.clientX);
          const mv=ev=>upd(ev.clientX);
          const up=()=>{window.removeEventListener('pointermove',mv);window.removeEventListener('pointerup',up);};
          window.addEventListener('pointermove',mv); window.addEventListener('pointerup',up);
        });
      }},

    faceid:{ title:'Face ID & Mật mã', render:()=>`
      <div class="set-group">
        ${toggleRow('Dùng Face ID cho iPhone','faceid','😀','#30d158')}
        ${toggleRow('Dùng Face ID cho iTunes & App Store','faceidStore','','#30d158')}
        ${toggleRow('Dùng Face ID cho Ví & Apple Pay','faceidWallet','','#30d158')}
        ${toggleRow('Dùng Face ID cho mật khẩu','faceidPass','','#30d158')}
      </div>
      <div class="set-group">${navRow('Đặt lại Face ID','resetFace')}</div>
      <div class="set-group">
        ${toggleRow('Bật mật mã','passcode','🔢','#ff3b30')}
        ${navRow('Đổi mật mã','changePass')}
        ${navRow('Yêu cầu mật mã','requirePass',null,null,'Ngay lập tức')}
      </div>
      <div class="set-group">${toggleRow('Xoá dữ liệu','eraseData','','#ff3b30')}</div>`},

    privacy:{ title:'Quyền riêng tư & Bảo mật', render:()=>`
      <div class="set-group">
        ${navRow('Vị trí','location','📍','#007aff')}
        ${navRow('Theo dõi','tracking','🎯','#5ac8fa')}
        ${navRow('Danh bạ','contactsPerm','👤','#8e8e93')}
        ${navRow('Lịch','calPerm','📅','#ff3b30')}
        ${navRow('Ảnh','photoPerm','🖼️','#ff9f0a')}
        ${navRow('Camera','camPerm','📷','#8e8e93')}
        ${navRow('Micro','micPerm','🎤','#ff3b30')}
        ${navRow('Sức khoẻ','healthPerm','❤️','#ff2d55')}
      </div>
      <div class="set-group">
        ${navRow('Phân tích','analytics')}
        ${navRow('Quảng cáo của Apple','ads')}
      </div>
      <div class="set-group">${navRow('Khoá an toàn Lockdown','lockdown','🔐','#1c1c1e')}</div>`},

    battery:{ title:'Pin', render:()=>`
      <div style="display:flex;align-items:center;gap:14px;padding:6px 0 16px">
        <div style="width:70px;height:70px;border-radius:50%;border:5px solid #30d158;
          display:grid;place-items:center;font-size:22px;font-weight:600;color:#fff;
          background:rgba(48,209,88,.15)">87%</div>
        <div>
          <div style="color:#fff;font-size:17px;font-weight:500">iPhone 17 Pro Max</div>
          <div style="color:#8e8e93;font-size:13.5px;margin-top:2px">Sạc gần nhất: 100% lúc 07:42</div>
        </div>
      </div>
      <div class="set-group">${toggleRow('Chế độ nguồn điện thấp','lowPower','🔋','#ffcc00')}</div>
      <div class="set-group">${navRow('Tình trạng pin & Sạc','batteryHealth','🔋','#30d158','99%')}</div>
      <div class="set-group">
        <div class="set-row"><span>Sử dụng</span><span class="set-value">6h 12m</span></div>
        <div class="set-row"><span>Chờ</span><span class="set-value">18h 42m</span></div>
      </div>
      <div class="set-group">${navRow('Sạc qua đêm','optimalCharge')}</div>`},

    notifications:{title:'Thông báo',render:()=>stubPage('🔔','Thông báo','Quản lý thông báo cho từng ứng dụng.')},
    focus:{title:'Tập trung',render:()=>stubPage('🌙','Tập trung','Không làm phiền, Cá nhân, Làm việc, Ngủ.')},
    screentime:{title:'Thời gian sử dụng',render:()=>stubPage('⏱️','Thời gian sử dụng','Hôm nay: 3h 42m')},
    accessibility:{title:'Trợ năng',render:()=>stubPage('♿','Trợ năng','VoiceOver, Zoom, Chạm, v.v.')},
    wallpaper:{title:'Hình nền',render:()=>stubPage('🖼️','Hình nền','Chọn hình nền cho màn hình khoá và màn hình chính.')},
    sos:{title:'SOS khẩn cấp',render:()=>stubPage('🆘','SOS khẩn cấp','Gọi dịch vụ khẩn cấp và thông báo cho liên hệ.')},
    appstore:{title:'App Store',render:()=>stubPage('🅰️','App Store','Tự động tải, cập nhật ứng dụng.')},
    wallet:{title:'Ví & Apple Pay',render:()=>stubPage('💳','Ví & Apple Pay','Thẻ, vé, chìa khoá.')},
    passwords:{title:'Mật khẩu',render:()=>stubPage('🔑','Mật khẩu','Mật khẩu và passkeys được lưu trong iCloud Keychain.')},
    mail:{title:'Thư',render:()=>stubPage('✉️','Thư','Tài khoản, chữ ký, quy tắc.')},
    contacts:{title:'Danh bạ',render:()=>stubPage('👤','Danh bạ','Sắp xếp, hiển thị, nhập/xuất.')},
    calendar:{title:'Lịch',render:()=>stubPage('📅','Lịch','Múi giờ, lịch thay thế, đồng bộ.')},
    notes:{title:'Ghi chú',render:()=>stubPage('📝','Ghi chú','Tài khoản, sắp xếp ghi chú.')},
    reminders:{title:'Nhắc nhở',render:()=>stubPage('✅','Nhắc nhở','Đồng bộ, mặc định.')},
    bgrefresh:{title:'Làm mới ứng dụng chạy nền',render:()=>`<div class="set-group">${toggleRow('Làm mới ứng dụng chạy nền','backgroundRefresh')}</div><div style="color:#8e8e93;font-size:12.5px;padding:0 4px;line-height:1.5">Cho phép ứng dụng làm mới nội dung khi chạy nền.</div>`},
    datetime:{title:'Ngày & Giờ',render:()=>`<div class="set-group">${toggleRow('Tự động đặt','autoTime')}${navRow('Múi giờ','timezone',null,null,'Hà Nội')}</div>`},
    keyboard:{title:'Bàn phím',render:()=>stubPage('⌨️','Bàn phím','Bàn phím, văn bản thay thế, từ điển.')},
    fonts:{title:'Phông chữ',render:()=>stubPage('🅰️','Phông chữ','Phông chữ đã cài đặt.')},
    language:{title:'Ngôn ngữ & Vùng',render:()=>`<div class="set-group">${staticRow('Ngôn ngữ iPhone','Tiếng Việt')}${staticRow('Vùng','Việt Nam')}${staticRow('Lịch','Dương lịch')}</div>`},
    dictionary:{title:'Từ điển',render:()=>stubPage('📖','Từ điển','Từ điển đã tải.')},
    vpn:{title:'VPN & Quản lý thiết bị',render:()=>stubPage('🛡️','VPN & Quản lý thiết bị','Chưa có cấu hình VPN.')},
    legal:{title:'Pháp lý & Quy định',render:()=>stubPage('📄','Pháp lý & Quy định','Thông tin pháp lý, giấy phép.')},
    reset:{title:'Chuyển hoặc Đặt lại iPhone',render:()=>`<div class="set-group">${navRow('Chuẩn bị cho iPhone mới','prep')}${navRow('Đặt lại','resetOptions')}</div>`},
    shutdown:{title:'Tắt nguồn',render:()=>`<div style="padding:24px 0;text-align:center">
        <div style="font-size:60px;margin-bottom:14px">⏻</div>
        <div style="color:#fff;font-size:17px;margin-bottom:22px">Bạn có chắc muốn tắt nguồn?</div>
        <button id="doShutdown" style="background:#ff3b30;color:#fff;border:none;padding:12px 34px;border-radius:26px;font-size:15px;font-weight:600;cursor:pointer;font-family:inherit">Tắt nguồn</button>
      </div>`,
      bind:(body,nav)=>{ body.querySelector('#doShutdown').onclick=()=>{ nav.closeApp(); lockPhone(); }; }},
    certificates:{title:'Chứng nhận tin cậy',render:()=>stubPage('📜','Chứng nhận tin cậy','Chứng nhận gốc.')},
    legalinfo:{title:'Thông tin pháp lý',render:()=>stubPage('⚖️','Thông tin pháp lý','Giấy phép, điều khoản.')},
    beta:{title:'iOS 26.2 Beta',render:()=>stubPage('🧪','iOS 26.2 Beta','Đã đăng ký nhận bản beta.')},
    autolock:{title:'Tự động khoá',render:()=>`<div class="set-group">${['30 giây','1 phút','2 phút','3 phút','4 phút','5 phút','Không bao giờ'].map(t=>`<div class="set-row" data-lock="${t}"><span>${t}</span><span class="arrow" style="margin-left:auto;color:${st.autoLock===t?'#0a84ff':'#636366'}">${st.autoLock===t?'✓':'›'}</span></div>`).join('')}</div>`,
      bind:(body,nav)=>{ body.querySelectorAll('[data-lock]').forEach(r=>r.onclick=()=>{st.autoLock=r.dataset.lock;nav.rerender();}); }},
    raisewake:{title:'Nâng để đánh thức',render:()=>`<div class="set-group">${toggleRow('Nâng để đánh thức','raiseWake')}</div>`},
    askwifi:{title:'Hỏi để tham gia mạng',render:()=>`<div class="set-group">${toggleRow('Hỏi để tham gia mạng','askWifi')}</div>`},
    autohotspot:{title:'Tự động tham gia Hotspot',render:()=>stubPage('📶','Tự động tham gia Hotspot','Chọn Hỏi / Không bao giờ / Tự động.')},
    dataoptions:{title:'Tuỳ chọn dữ liệu di động',render:()=>`<div class="set-group">${toggleRow('Dữ liệu di động','cellData')}${toggleRow('5G','fiveG','','#30d158')}${toggleRow('Chế độ dữ liệu thấp','lowData')}</div>`},
    roaming:{title:'Chuyển vùng dữ liệu',render:()=>`<div class="set-group">${toggleRow('Chuyển vùng dữ liệu','roamingData')}</div>`},
    hotspot:{title:'Điểm truy cập cá nhân',render:()=>`<div class="set-group">${toggleRow('Cho phép người khác tham gia','hotspotAllow')}</div>`},
    sims:{title:'SIM & eSIM',render:()=>`<div class="set-group">${staticRow('SIM vật lý','Viettel')}${staticRow('eSIM','Vietnamobile')}</div>`},
    batteryHealth:{title:'Tình trạng pin & Sạc',render:()=>`
      <div style="text-align:center;padding:14px 0">
        <div style="color:#8e8e93;font-size:14px">Dung lượng tối đa</div>
        <div style="color:#fff;font-size:44px;font-weight:600;letter-spacing:-1px">99%</div>
      </div>
      <div class="set-group">${toggleRow('Sạc pin tối ưu','optimalCharging','','#30d158')}${toggleRow('Giới hạn 80%','limit80','','#30d158')}</div>
      <div style="color:#8e8e93;font-size:12.5px;line-height:1.55;padding:0 4px">Pin được thiết kế để giữ 80% dung lượng ban đầu sau 1.000 chu kỳ sạc đầy.</div>`},
    optimalCharge:{title:'Sạc qua đêm',render:()=>`<div class="set-group">${toggleRow('Sạc qua đêm','overnight')}</div>`},
    location:{title:'Dịch vụ định vị',render:()=>`<div class="set-group">${toggleRow('Dịch vụ định vị','locationSvc','','#007aff')}</div>`},
    tracking:{title:'Theo dõi',render:()=>`<div class="set-group">${toggleRow('Cho phép ứng dụng yêu cầu theo dõi','trackingAllow')}</div>`},
    contactsPerm:{title:'Danh bạ',render:()=>stubPage('👤','Danh bạ','Ứng dụng có quyền truy cập danh bạ.')},
    calPerm:{title:'Lịch',render:()=>stubPage('📅','Lịch','Ứng dụng có quyền truy cập lịch.')},
    photoPerm:{title:'Ảnh',render:()=>stubPage('🖼️','Ảnh','Ứng dụng có quyền truy cập ảnh.')},
    camPerm:{title:'Camera',render:()=>stubPage('📷','Camera','Ứng dụng có quyền truy cập camera.')},
    micPerm:{title:'Micro',render:()=>stubPage('🎤','Micro','Ứng dụng có quyền truy cập micro.')},
    healthPerm:{title:'Sức khoẻ',render:()=>stubPage('❤️','Sức khoẻ','Ứng dụng có quyền truy cập dữ liệu sức khoẻ.')},
    analytics:{title:'Phân tích',render:()=>`<div class="set-group">${toggleRow('Chia sẻ phân tích iPhone','shareAnalytics')}${toggleRow('Chia sẻ phân tích iCloud','shareAnalyticsICloud')}</div>`},
    ads:{title:'Quảng cáo của Apple',render:()=>`<div class="set-group">${toggleRow('Quảng cáo cá nhân hoá','personalAds')}</div>`},
    lockdown:{title:'Khoá an toàn Lockdown',render:()=>`<div class="set-group">${toggleRow('Khoá an toàn Lockdown','lockdownMode','','#ff3b30')}</div>`},
    resetFace:{title:'Đặt lại Face ID',render:()=>stubPage('😀','Đặt lại Face ID','Bạn sẽ cần thiết lập lại Face ID.')},
    changePass:{title:'Đổi mật mã',render:()=>stubPage('🔢','Đổi mật mã','Nhập mật mã hiện tại để thay đổi.')},
    requirePass:{title:'Yêu cầu mật mã',render:()=>`<div class="set-group">${['Ngay lập tức','Sau 1 phút','Sau 5 phút','Sau 15 phút','Sau 1 giờ'].map(t=>`<div class="set-row"><span>${t}</span><span class="arrow" style="margin-left:auto">›</span></div>`).join('')}</div>`},
    prep:{title:'Chuẩn bị cho iPhone mới',render:()=>stubPage('📲','Chuẩn bị cho iPhone mới','Chuyển dữ liệu sang iPhone mới.')},
    resetOptions:{title:'Đặt lại',render:()=>`<div class="set-group">
      <div class="set-row"><span style="color:#ff3b30">Đặt lại tất cả cài đặt</span></div>
      <div class="set-row"><span style="color:#ff3b30">Xoá tất cả nội dung và cài đặt</span></div>
      <div class="set-row"><span style="color:#ff3b30">Đặt lại màn hình chính</span></div>
      <div class="set-row"><span style="color:#ff3b30">Đặt lại mạng</span></div>
      <div class="set-row"><span style="color:#ff3b30">Đặt lại bàn phím</span></div>
    </div>`}
  };
})();

/* =========================================================
   BROWSER ENGINE
   ========================================================= */
const BrowserHome = [
  { name:'Google',    ico:'G',  bg:'#4285f4', url:'https://www.google.com/search?igu=1&q=' },
  { name:'YouTube',   ico:'▶',  bg:'#ff0033', url:'https://m.youtube.com' },
  { name:'Wikipedia', ico:'W',  bg:'#000',    url:'https://vi.m.wikipedia.org' },
  { name:'DuckDuckGo',ico:'🦆', bg:'#de5833', url:'https://duckduckgo.com/?q=' },
  { name:'Bing',      ico:'b',  bg:'#008373', url:'https://www.bing.com/search?q=' },
  { name:'VnExpress', ico:'V',  bg:'#a90000', url:'https://vnexpress.net' },
  { name:'Tinhte',    ico:'T',  bg:'#c8102e', url:'https://tinhte.vn' },
  { name:'GitHub',    ico:'gh', bg:'#24292e', url:'https://github.com' }
];

function makeBrowser(root){
  const viewEl   = root.querySelector('.browser-view');
  const homeEl   = root.querySelector('.browser-home');
  const inputEl  = root.querySelector('#urlInput');
  const backBtn  = root.querySelector('#navBack');
  const fwdBtn   = root.querySelector('#navFwd');
  const homeBtn  = root.querySelector('#navHome');
  const reloadBtn= root.querySelector('#navReload');
  const shareBtn = root.querySelector('#navShare');
  const loading  = root.querySelector('.loading-bar');

  let history = [], idx = -1, iframe = null, loadTimer = null;

  function startLoading(){
    loading.style.transition='none'; loading.style.width='0%';
    requestAnimationFrame(()=>{
      loading.style.transition='width 2.6s cubic-bezier(.1,.8,.4,1)';
      loading.style.width='78%';
    });
  }
  function finishLoading(){
    loading.style.transition='width .25s'; loading.style.width='100%';
    setTimeout(()=>{ loading.style.width='0%'; }, 260);
  }
  function showHome(){
    viewEl.innerHTML=''; iframe=null;
    homeEl.style.display='block'; inputEl.value='';
    backBtn.disabled=fwdBtn.disabled=true;
  }
  function prettyUrl(u){
    try{ const x=new URL(u); return x.hostname+(x.pathname!=='/'?x.pathname:''); }catch(e){ return u; }
  }

  function loadUrl(raw, pushHistory){
    let u = (raw||'').trim(); if(!u) return;
    const isUrl = /^(https?:\/\/)/i.test(u) || /^[\w-]+\.[a-z]{2,}([\/?#].*)?$/i.test(u);
    if(!isUrl) u = 'https://www.bing.com/search?q='+encodeURIComponent(u);
    else if(!/^https?:\/\//i.test(u)) u = 'https://'+u;

    homeEl.style.display='none';
    viewEl.innerHTML='';
    startLoading();

    iframe = document.createElement('iframe');
    iframe.setAttribute('referrerpolicy','no-referrer');
    iframe.setAttribute('sandbox','allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox');

    let loaded=false;
    iframe.addEventListener('load', ()=>{ loaded=true; finishLoading(); });
    iframe.src = u;
    viewEl.appendChild(iframe);

    clearTimeout(loadTimer);
    loadTimer = setTimeout(()=>{ if(!loaded) showBlocked(u); }, 4000);

    inputEl.value = prettyUrl(u);
    backBtn.disabled=fwdBtn.disabled=false;

    if(pushHistory!==false){
      history = history.slice(0, idx+1);
      history.push(u); idx = history.length-1;
    }
  }

  function showBlocked(u){
    finishLoading();
    viewEl.innerHTML = `
      <div class="blocked">
        <div class="ico">🚫</div>
        <h3>Không thể nhúng trang này</h3>
        <p><b>${esc(u)}</b> đã chặn việc hiển thị trong iframe vì lý do bảo mật (X‑Frame‑Options). Đây là giới hạn của trình duyệt, không phải lỗi của ứng dụng.</p>
        <button class="open-ext" id="openExt">Mở trong tab mới ↗</button>
      </div>`;
    viewEl.querySelector('#openExt').onclick = ()=> window.open(u,'_blank','noopener');
    iframe = null;
  }

  inputEl.addEventListener('keydown', e=>{
    if(e.key==='Enter'){ inputEl.blur(); loadUrl(inputEl.value, true); }
  });
  inputEl.addEventListener('focus', ()=> inputEl.select());

  backBtn.onclick = ()=>{ if(idx>0){ idx--; loadUrl(history[idx], false); } };
  fwdBtn.onclick  = ()=>{ if(idx<history.length-1){ idx++; loadUrl(history[idx], false); } };
  homeBtn.onclick = showHome;
  reloadBtn.onclick = ()=>{ if(history[idx]) loadUrl(history[idx], false); };
  shareBtn.onclick = ()=>{ const u=history[idx]; if(u) window.open(u,'_blank','noopener'); };

  root.querySelectorAll('.bm').forEach(b=>{
    b.onclick = ()=>{
      const url = b.dataset.url;
      if(url.endsWith('=')){
        showHome(); inputEl.focus(); inputEl.value='';
        inputEl.placeholder = 'Tìm kiếm với '+b.querySelector('span').textContent;
      } else loadUrl(url, true);
    };
  });
  root.querySelectorAll('.search-choice').forEach(c=>{
    c.onclick = ()=>{ showHome(); inputEl.focus();
      inputEl.placeholder = 'Tìm kiếm với '+c.dataset.name; };
  });

  showHome();
  return ()=>{ clearTimeout(loadTimer); if(iframe) iframe.src='about:blank'; };
}

function browserRender(){
  return `<div class="browser">
    <div class="browser-top">
      <div class="loading-bar"></div>
      <div class="url-bar">
        <span class="lock-icon">🔒</span>
        <input id="urlInput" type="text" autocomplete="off" autocorrect="off" spellcheck="false"
               placeholder="Tìm kiếm hoặc nhập địa chỉ web" />
        <button class="reload" id="navReload">↻</button>
      </div>
    </div>
    <div class="browser-view">
      <div class="browser-home">
        <h2>Trang chủ</h2>
        <div class="search-choices">
          <button class="search-choice" data-name="Bing">🔎 Bing</button>
          <button class="search-choice" data-name="Google">G Google</button>
          <button class="search-choice" data-name="DuckDuckGo">🦆 DuckDuckGo</button>
        </div>
        <div class="bookmark-grid">
          ${BrowserHome.map(b=>`
            <div class="bm" data-url="${b.url}">
              <div class="bm-ico" style="background:${b.bg}">${b.ico}</div>
              <span>${b.name}</span>
            </div>`).join('')}
        </div>
        <div style="color:#8e8e93;font-size:12.5px;line-height:1.6;padding:0 4px">
          💡 Mẹo: nhập từ khoá để tìm kiếm, hoặc gõ địa chỉ như <b>vnexpress.net</b>.<br>
          Một số trang lớn chặn nhúng — bấm <b>Mở trong tab mới</b> khi được hỏi.
        </div>
      </div>
    </div>
    <div class="browser-bottom">
      <button class="bnav" id="navBack" disabled>‹</button>
      <button class="bnav" id="navFwd" disabled>›</button>
      <button class="bnav center" id="navShare">⤴</button>
      <button class="bnav center" id="navHome">⌂</button>
    </div>
  </div>`;
}

/* =========================================================
   APPS
   ========================================================= */
const APPS = [
  { id:'camera', name:'Camera', bg:'linear-gradient(180deg,#7a7a80,#3a3a3c)', icon:I.camera,
    render:()=>`<div class="cam-app">
      <video id="camVideo" autoplay playsinline muted></video>
      <div class="cam-ui" id="camUI">
        <div class="cam-top">
          <button id="camFlash">⚡</button>
          <button id="camFlip">🔄</button>
        </div>
        <div class="cam-bottom">
          <div class="cam-mode">PHOTO</div>
          <button class="cam-shutter" id="camShutter" aria-label="Chụp"></button>
          <div class="cam-thumb" id="camThumb">🖼️</div>
        </div>
      </div>
    </div>`,
    init: async (root)=>{
      const video = root.querySelector('#camVideo');
      const ui    = root.querySelector('#camUI');
      const thumb = root.querySelector('#camThumb');
      let stream=null, facing='user', alive=true;

      if(!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia){
        ui.innerHTML = `<div class="cam-error">Thiết bị không hỗ trợ Camera<br><small>Hãy mở trang bằng HTTPS hoặc localhost để dùng camera.</small></div>`;
        return;
      }
      async function start(){
        try{
          if(stream) stream.getTracks().forEach(t=>t.stop());
          stream = await navigator.mediaDevices.getUserMedia({
            video:{ facingMode:facing, width:{ideal:1080}, height:{ideal:1920} }, audio:false });
          if(!alive){ stream.getTracks().forEach(t=>t.stop()); return; }
          video.srcObject = stream;
          await video.play().catch(()=>{});
        }catch(err){
          ui.innerHTML = `<div class="cam-error">Không thể truy cập Camera<br><small>${(err&&err.message)||'Vui lòng cấp quyền camera.'}</small></div>`;
        }
      }
      root.querySelector('#camFlip').onclick = ()=>{ facing = (facing==='user')?'environment':'user'; start(); };
      root.querySelector('#camFlash').onclick = (e)=>{ e.currentTarget.style.color = e.currentTarget.style.color==='gold' ? '#fff' : 'gold'; };
      root.querySelector('#camShutter').onclick = ()=>{
        if(!video.videoWidth) return;
        const c = document.createElement('canvas');
        c.width=video.videoWidth; c.height=video.videoHeight;
        const ctx = c.getContext('2d');
        if(facing==='user'){ ctx.translate(c.width,0); ctx.scale(-1,1); }
        ctx.drawImage(video,0,0);
        const url = c.toDataURL('image/jpeg',0.85);
        PHOTOS.unshift(url);
        ui.classList.add('flash'); setTimeout(()=>ui.classList.remove('flash'),150);
        thumb.innerHTML = `<img src="${url}" alt="">`;
      };
      if(PHOTOS[0]) thumb.innerHTML = `<img src="${PHOTOS[0]}" alt="">`;
      start();
      return ()=>{ alive=false; if(stream) stream.getTracks().forEach(t=>t.stop()); };
    }},

  { id:'photos', name:'Ảnh', bg:'#fff', icon:I.photos,
    render:()=>{
      if(!PHOTOS.length){
        return `<div class="app-inner" style="background:#000">
          <div class="app-top"><span class="app-title">Ảnh</span></div>
          <div class="app-body"><div class="empty">Chưa có ảnh nào.<br>Hãy mở Camera và chụp vài tấm nhé!</div></div></div>`;
      }
      return `<div class="app-inner" style="background:#000">
        <div class="app-top"><span class="app-title">Ảnh</span></div>
        <div class="app-body">
          <div style="color:#8e8e93;font-size:12px;margin-bottom:10px">${PHOTOS.length} ảnh · Hôm nay</div>
          <div class="photo-grid">${PHOTOS.map(p=>`<img src="${p}" alt="">`).join('')}</div>
        </div></div>`;
    }},

  { id:'weather', name:'Thời tiết', bg:'linear-gradient(180deg,#4facfe,#00f2fe)', icon:I.weather,
    render:()=>`<div class="weather">
        <div class="city">Hà Nội</div>
        <div class="temp">32°</div>
        <div class="cond">Nắng có mây</div>
        <div class="hi">Cao 34° · Thấp 26°</div>
        <div class="wf">
          <div><small>T2</small><div class="ico">☀️</div><b>32°</b></div>
          <div><small>T3</small><div class="ico">⛅</div><b>31°</b></div>
          <div><small>T4</small><div class="ico">🌧️</div><b>28°</b></div>
          <div><small>T5</small><div class="ico">⛈️</div><b>27°</b></div>
          <div><small>T6</small><div class="ico">☀️</div><b>33°</b></div>
        </div>
      </div>` },

  { id:'clock', name:'Đồng hồ', bg:'#000', icon:I.clock,
    render:()=>`<div class="app-inner" style="background:#000">
      <div class="app-top"><span class="app-title">Đồng hồ</span></div>
      <div class="app-body">
        <div class="clock-face">
          <div class="hand hh" id="hHour"></div>
          <div class="hand mh" id="hMin"></div>
          <div class="hand sh" id="hSec"></div>
          <div class="center"></div>
        </div>
        <div class="world"><div><b>Hà Nội</b><small>Hôm nay</small></div><b id="wcHN">--:--</b></div>
        <div class="world"><div><b>Tokyo</b><small>+2 giờ</small></div><b id="wcTK">--:--</b></div>
        <div class="world"><div><b>New York</b><small>-11 giờ</small></div><b id="wcNY">--:--</b></div>
        <div class="world"><div><b>London</b><small>-6 giờ</small></div><b id="wcLD">--:--</b></div>
      </div></div>`,
    init:(root)=>{
      const tick=()=>{
        const d=new Date();
        const s=d.getSeconds(), m=d.getMinutes(), h=d.getHours()%12;
        const set=(id,deg)=>{ const el=root.querySelector(id); if(el) el.style.transform=`rotate(${deg}deg)`; };
        set('#hSec', s*6); set('#hMin', m*6+s*0.1); set('#hHour', h*30+m*0.5);
        const p=(n)=>{ const x=new Date(d.getTime()+n*3600000);
          return String(x.getHours()).padStart(2,'0')+':'+String(x.getMinutes()).padStart(2,'0'); };
        const a=root.querySelector('#wcHN'); if(a) a.textContent=p(0);
        const b=root.querySelector('#wcTK'); if(b) b.textContent=p(2);
        const c=root.querySelector('#wcNY'); if(c) c.textContent=p(-11);
        const e=root.querySelector('#wcLD'); if(e) e.textContent=p(-6);
      };
      tick();
      const iv=setInterval(tick,1000);
      return ()=>clearInterval(iv);
    }},

  { id:'calc', name:'Máy tính', bg:'#000', icon:I.calc,
    render:()=>`<div class="calc">
      <div class="calc-display"><span id="calcOut">0</span></div>
      <div class="calc-keys">
        <button class="k fn" data-k="AC">AC</button>
        <button class="k fn" data-k="+/-">+/−</button>
        <button class="k fn" data-k="%">%</button>
        <button class="k op" data-k="/">÷</button>
        <button class="k" data-k="7">7</button>
        <button class="k" data-k="8">8</button>
        <button class="k" data-k="9">9</button>
        <button class="k op" data-k="*">×</button>
        <button class="k" data-k="4">4</button>
        <button class="k" data-k="5">5</button>
        <button class="k" data-k="6">6</button>
        <button class="k op" data-k="-">−</button>
        <button class="k" data-k="1">1</button>
        <button class="k" data-k="2">2</button>
        <button class="k" data-k="3">3</button>
        <button class="k op" data-k="+">+</button>
        <button class="k zero" data-k="0">0</button>
        <button class="k" data-k=".">,</button>
        <button class="k op" data-k="=">=</button>
      </div></div>`,
    init:(root)=>{
      const out=root.querySelector('#calcOut');
      let cur='0', prev=null, op=null, wait=false;
      const fmt=(n)=>{ if(!isFinite(n)) return 'Lỗi';
        let s=String(parseFloat(n.toPrecision(12))); return s.replace('.',','); };
      const calc=(a,b,o)=> o==='+'?a+b : o==='-'?a-b : o==='*'?a*b : b===0?NaN : a/b;
      root.querySelectorAll('.k').forEach(b=>{
        b.onclick=()=>{
          const k=b.dataset.k;
          if(k==='AC'){ cur='0'; prev=null; op=null; wait=false; out.textContent='0'; return; }
          if(k==='+/-'){ cur = cur.startsWith('-') ? cur.slice(1) : (cur==='0'?'0':'-'+cur);
            out.textContent=cur.replace('.',','); return; }
          if(k==='%'){ cur=String(parseFloat(cur)/100); out.textContent=fmt(parseFloat(cur)); return; }
          if('+-*/'.includes(k)){
            if(op && !wait){ cur=String(calc(parseFloat(prev),parseFloat(cur),op)); out.textContent=fmt(parseFloat(cur)); }
            prev=cur; op=k; wait=true; return;
          }
          if(k==='='){
            if(op){ cur=String(calc(parseFloat(prev),parseFloat(cur),op));
              out.textContent=fmt(parseFloat(cur)); prev=null; op=null; wait=false; }
            return;
          }
          if(k==='.'){ if(wait){ cur='0'; wait=false; } if(!cur.includes('.')) cur+='.';
            out.textContent=cur.replace('.',','); return; }
          if(wait){ cur=k; wait=false; } else { cur = cur==='0' ? k : cur+k; }
          out.textContent=cur.replace('.',',');
        };
      });
    }},

  { id:'notes', name:'Ghi chú', bg:'#1c1c1e', icon:I.notes,
    render:()=>`<div class="app-inner" style="background:#1c1c1e">
      <div class="app-top"><span class="app-title">Ghi chú</span></div>
      <div class="app-body" id="notesList"></div>
      <div class="note-edit" id="noteEdit" style="display:none">
        <div class="note-bar">
          <button id="noteBack">‹ Danh sách</button>
          <button id="noteNew">+ Mới</button>
          <button id="noteDone">Xong</button>
        </div>
        <textarea id="noteArea" placeholder="Bắt đầu viết..."></textarea>
      </div>
    </div>`,
    init:(root)=>{
      const list=[{t:'Ý tưởng làm game',c:'Làm một con game flappy bird bằng canvas, thêm hiệu ứng neon.',d:'Hôm nay'},
                  {t:'Mua sắm',c:'Sữa, trứng, bánh mì, cà phê, táo',d:'Hôm qua'}];
      const listEl=root.querySelector('#notesList');
      const editEl=root.querySelector('#noteEdit');
      const area=root.querySelector('#noteArea');
      let editing=-1;
      function draw(){
        if(!list.length){ listEl.innerHTML='<div class="empty">Chưa có ghi chú nào</div>'; return; }
        listEl.innerHTML=list.map((n,i)=>`<div class="note-item" data-i="${i}">
          <h4>${esc(n.t)}</h4><p>${esc(n.c)}</p><small>${n.d}</small></div>`).join('');
        listEl.querySelectorAll('.note-item').forEach(el=>{
          el.onclick=()=>{ editing=+el.dataset.i; area.value=list[editing].c; editEl.style.display='flex'; };
        });
      }
      root.querySelector('#noteBack').onclick=()=>{
        if(editing>=0){ list[editing].c=area.value; }
        editEl.style.display='none'; draw();
      };
      root.querySelector('#noteNew').onclick=()=>{
        editing=-1; area.value=''; editEl.style.display='flex'; area.focus();
      };
      root.querySelector('#noteDone').onclick=()=>{
        const txt=area.value.trim();
        if(txt){ if(editing>=0) list[editing].c=txt;
          else list.unshift({t:txt.split('\n')[0].slice(0,24)||'Ghi chú mới',c:txt,d:'Vừa xong'}); }
        editEl.style.display='none'; draw();
      };
      draw();
    }},

  { id:'music', name:'Âm nhạc', bg:'linear-gradient(135deg,#fa709a,#fee140)', icon:I.music,
    render:()=>`<div class="app-inner" style="background:linear-gradient(180deg,#1a0f1f,#0a0a0d 60%)">
      <div class="app-top"><span class="app-title">Đang phát</span></div>
      <div class="app-body">
        <div class="music-art">🎧</div>
        <div class="music-title">Neon Skyline</div>
        <div class="music-artist">Synthwave Collective</div>
        <div class="prog"><i id="progBar"></i></div>
        <div class="times"><span id="tCur">0:00</span><span id="tEnd">3:42</span></div>
        <div class="controls">
          <button id="prevBtn">⏮</button>
          <button class="play" id="playBtn">⏸</button>
          <button id="nextBtn">⏭</button>
        </div>
      </div></div>`,
    init:(root)=>{
      let playing=true, t=0, total=222;
      const bar=root.querySelector('#progBar'), cur=root.querySelector('#tCur'), play=root.querySelector('#playBtn');
      const fmt=(s)=>Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0');
      const iv=setInterval(()=>{
        if(playing){ t+=1; if(t>=total) t=0; }
        bar.style.width=(t/total*100)+'%'; cur.textContent=fmt(t);
      },1000);
      play.onclick=()=>{ playing=!playing; play.textContent=playing?'⏸':'▶'; };
      root.querySelector('#prevBtn').onclick=()=>{ t=0; };
      root.querySelector('#nextBtn').onclick=()=>{ t=0; };
      return ()=>clearInterval(iv);
    }},

  { id:'game', name:'Game', bg:'linear-gradient(135deg,#3ef2ff,#b06bff)', icon:I.game,
    render:()=>`<div class="game-wrap" id="gameWrap">
        <div class="game-overlay" id="gameOverlay">
          <h2>NEON FLAPPY</h2>
          <p>Chạm để bay lên.<br>Vượt qua các cột neon!</p>
          <button class="btn" id="startBtn">BẮT ĐẦU</button>
        </div>
      </div>`,
    init:(root)=>{
      const wrap=root.querySelector('#gameWrap');
      const overlay=root.querySelector('#gameOverlay');
      const cv=document.createElement('canvas');
      const W=390,H=844;
      cv.width=W; cv.height=H;
      wrap.appendChild(cv);
      const ctx=cv.getContext('2d');

      let bird,pipes,score,best=0,over,started,raf,stars;
      const G=0.52, JUMP=-8.6, GAP=178, PW=68, SPEED=3.1;

      const initStars=()=>{ stars=[];
        for(let i=0;i<60;i++) stars.push({x:Math.random()*W,y:Math.random()*H*.8,r:Math.random()*1.5+.3,a:Math.random()*.7+.2}); };
      const reset=()=>{
        bird={x:108,y:340,v:0,r:15,rot:0};
        pipes=[]; score=0; over=false; started=false;
        for(let i=0;i<4;i++) pipes.push({x:460+i*225, gy:170+Math.random()*330, passed:false});
        initStars();
      };
      const jump=()=>{ if(over) return;
        if(!started){ started=true; overlay.style.display='none'; } bird.v=JUMP; };
      const loop=()=>{ update(); draw(); raf=requestAnimationFrame(loop); };
      const update=()=>{
        if(!started||over) return;
        bird.v+=G; bird.y+=bird.v;
        bird.rot=Math.max(-.5,Math.min(1.2, bird.v*0.06));
        if(bird.y-bird.r<0){ bird.y=bird.r; bird.v=0; }
        if(bird.y+bird.r>H-60){ gameOver(); }
        pipes.forEach(p=>{
          p.x-=SPEED;
          if(p.x+PW<-20){ p.x+=pipes.length*225; p.gy=170+Math.random()*330; p.passed=false; }
          if(!p.passed && p.x+PW < bird.x-bird.r){ p.passed=true; score++; }
          if(hit(p)) gameOver();
        });
      };
      const hit=(p)=>{
        if(bird.x+bird.r < p.x || bird.x-bird.r > p.x+PW) return false;
        return bird.y-bird.r < p.gy-GAP/2 || bird.y+bird.r > p.gy+GAP/2;
      };
      const gameOver=()=>{
        if(over) return;
        over=true; best=Math.max(best,score);
        overlay.style.display='flex';
        overlay.innerHTML=`<h2>KẾT THÚC</h2>
          <p>Điểm: <b style="color:#3ef2ff;font-size:22px">${score}</b><br>Kỷ lục: ${best}</p>
          <button class="btn" id="startBtn">CHƠI LẠI</button>`;
        overlay.querySelector('#startBtn').onclick=(e)=>{
          e.stopPropagation(); overlay.style.display='none'; reset(); started=true;
        };
      };
      const roundRect=(x,y,w,h,r)=>{ ctx.beginPath(); ctx.moveTo(x+r,y);
        ctx.arcTo(x+w,y,x+w,y+h,r); ctx.arcTo(x+w,y+h,x,y+h,r);
        ctx.arcTo(x,y+h,x,y,r); ctx.arcTo(x,y,x+w,y,r); ctx.closePath(); };
      const drawPipe=(x,y,w,h,isTop)=>{
        const grad=ctx.createLinearGradient(x,0,x+w,0);
        grad.addColorStop(0,'#0d5f7a'); grad.addColorStop(.35,'#3ef2ff');
        grad.addColorStop(.65,'#7de8ff'); grad.addColorStop(1,'#0d5f7a');
        ctx.shadowColor='#3ef2ff'; ctx.shadowBlur=18;
        ctx.fillStyle=grad; roundRect(x,y,w,h,10); ctx.fill();
        ctx.shadowBlur=0;
        const lx=x-6, lw=w+12, lh=24;
        const ly = isTop ? y+h-lh : y;
        ctx.fillStyle=grad; roundRect(lx,ly,lw,lh,8); ctx.fill();
      };
      const draw=()=>{
        const g=ctx.createLinearGradient(0,0,0,H);
        g.addColorStop(0,'#0a0e27'); g.addColorStop(.55,'#141033'); g.addColorStop(1,'#1d0b2e');
        ctx.fillStyle=g; ctx.fillRect(0,0,W,H);
        stars.forEach(s=>{ ctx.globalAlpha=s.a; ctx.fillStyle='#cfe6ff';
          ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,7); ctx.fill(); });
        ctx.globalAlpha=1;
        const rg=ctx.createRadialGradient(300,180,0,300,180,240);
        rg.addColorStop(0,'rgba(176,107,255,.35)');
        rg.addColorStop(1,'rgba(176,107,255,0)');
        ctx.fillStyle=rg; ctx.fillRect(0,0,W,H);
        pipes.forEach(p=>{
          drawPipe(p.x, 0, PW, p.gy-GAP/2, true);
          drawPipe(p.x, p.gy+GAP/2, PW, H-(p.gy+GAP/2), false);
        });
        const gg=ctx.createLinearGradient(0,H-60,0,H);
        gg.addColorStop(0,'#1a0f2e'); gg.addColorStop(1,'#08050f');
        ctx.fillStyle=gg; ctx.fillRect(0,H-60,W,60);
        ctx.strokeStyle='rgba(62,242,255,.5)'; ctx.lineWidth=2;
        ctx.beginPath(); ctx.moveTo(0,H-60); ctx.lineTo(W,H-60); ctx.stroke();
        ctx.save();
        ctx.translate(bird.x,bird.y); ctx.rotate(bird.rot);
        ctx.shadowColor='#3ef2ff'; ctx.shadowBlur=22;
        const bg=ctx.createRadialGradient(-4,-4,1,0,0,bird.r+3);
        bg.addColorStop(0,'#b8fbff'); bg.addColorStop(.6,'#3ef2ff'); bg.addColorStop(1,'#1c8fa8');
        ctx.fillStyle=bg; ctx.beginPath(); ctx.arc(0,0,bird.r,0,7); ctx.fill();
        ctx.shadowBlur=0;
        ctx.fillStyle='#04101c'; ctx.beginPath(); ctx.arc(5,-4,3.4,0,7); ctx.fill();
        ctx.fillStyle='#fff'; ctx.beginPath(); ctx.arc(6,-5,1.3,0,7); ctx.fill();
        ctx.fillStyle='#ffb547';
        ctx.beginPath(); ctx.moveTo(bird.r-2,1); ctx.lineTo(bird.r+9,5); ctx.lineTo(bird.r-2,9); ctx.closePath(); ctx.fill();
        ctx.restore();
        ctx.font='800 62px -apple-system,Helvetica,Arial';
        ctx.textAlign='center';
        ctx.fillStyle='rgba(255,255,255,.92)';
        ctx.shadowColor='#3ef2ff'; ctx.shadowBlur=24;
        if(started) ctx.fillText(score, W/2, 130);
        ctx.shadowBlur=0;
      };
      const onDown=(e)=>{ e.preventDefault(); if(over) return; jump(); };
      wrap.addEventListener('pointerdown', onDown);
      const sb=overlay.querySelector('#startBtn');
      if(sb) sb.onclick=(e)=>{ e.stopPropagation(); overlay.style.display='none'; reset(); started=true; };
      reset(); loop();
      return ()=>{ cancelAnimationFrame(raf); wrap.removeEventListener('pointerdown', onDown); };
    }},

  { id:'settings', name:'Cài đặt', bg:'#000', icon:I.settings,
    render:()=>`<div class="app-inner" id="settingsApp" style="background:#000">
      <div class="app-top" style="padding:62px 22px 8px;display:flex;align-items:center;gap:8px;flex:none">
        <button id="settingsBack" class="set-back" style="display:none">‹</button>
        <span class="app-title" id="settingsTitle">Cài đặt</span>
      </div>
      <div class="app-body" id="settingsBody" style="flex:1;overflow-y:auto;padding:0 20px 30px;-webkit-overflow-scrolling:touch;touch-action:pan-y"></div>
    </div>`,
    init:(root)=>{
      const titleEl = root.querySelector('#settingsTitle');
      const bodyEl  = root.querySelector('#settingsBody');
      const backBtn = root.querySelector('#settingsBack');
      const stack = [{ id:'main' }];

      const nav = {
        push:(id)=>{ stack.push({id}); render(); },
        back:()=>{ if(stack.length>1){ stack.pop(); render(); } },
        rerender:()=>render(),
        closeApp:()=>closeApp()
      };

      function render(){
        const cur = stack[stack.length-1];
        const page = SettingsPages[cur.id];
        if(!page){ console.warn('Missing settings page:', cur.id); return; }
        titleEl.textContent = page.title;
        bodyEl.innerHTML = page.render();
        bodyEl.scrollTop = 0;
        backBtn.style.display = stack.length>1 ? 'grid' : 'none';

        bodyEl.querySelectorAll('[data-toggle-key]').forEach(row=>{
          const t = row.querySelector('[data-t]'); if(!t) return;
          t.onclick = (e)=>{
            e.stopPropagation();
            const k = row.dataset.toggleKey;
            SettingsState[k] = !SettingsState[k];
            t.classList.toggle('on', !!SettingsState[k]);
          };
        });
        bodyEl.querySelectorAll('[data-nav]').forEach(row=>{
          row.onclick = (e)=>{
            if(e.target.closest('[data-t]')) return;
            nav.push(row.dataset.nav);
          };
        });
        if(page.bind) page.bind(bodyEl, nav);
      }

      backBtn.onclick = ()=>{ if(stack.length>1){ stack.pop(); render(); } };
      render();
    }},

  { id:'maps', name:'Bản đồ', bg:'linear-gradient(135deg,#8ecae6,#219ebc)', icon:I.maps,
    render:()=>stub('🗺️','Bản đồ','Vị trí hiện tại: Hà Nội, Việt Nam') },
  { id:'appstore', name:'App Store', bg:'linear-gradient(180deg,#1e9bff,#0064d2)', icon:I.appstore,
    render:()=>stub('🅰️','App Store','Khám phá ứng dụng & trò chơi mới mỗi ngày.') },
  { id:'calendar', name:'Lịch', bg:'#fff', icon:I.calendar,
    render:()=>stub('📅','Lịch','Hôm nay không có sự kiện nào.') },
  { id:'health', name:'Sức khoẻ', bg:'#fff', icon:I.health,
    render:()=>`<div class="app-inner" style="background:#000">
      <div class="app-top"><span class="app-title">Sức khoẻ</span></div>
      <div class="app-body">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
          ${card('❤️','Nhịp tim','72','BPM')}
          ${card('👟','Bước chân','8.432','bước')}
          ${card('🔥','Calo','512','kcal')}
          ${card('😴','Giấc ngủ','7h 12m','đêm qua')}
        </div>
      </div></div>` },
  { id:'wallet', name:'Ví', bg:'#000', icon:I.wallet,
    render:()=>stub('💳','Ví','Thẻ, vé và chìa khoá của bạn.') },
  { id:'podcast', name:'Podcast', bg:'linear-gradient(180deg,#b06bff,#7d2ae8)', icon:I.podcast,
    render:()=>stub('🎙️','Podcast','Nghe các tập mới nhất.') },
  { id:'reminders', name:'Nhắc nhở', bg:'#fff', icon:I.reminders,
    render:()=>stub('✅','Nhắc nhở','Không có nhắc nhở nào sắp tới.') },
  { id:'compass', name:'La bàn', bg:'#1c1c1e', icon:I.compass,
    render:()=>stub('🧭','La bàn','Hướng: Đông Bắc (NE) · 45°') },
  { id:'findmy', name:'Find My', bg:'linear-gradient(180deg,#5ac8fa,#0a84ff)', icon:I.findmy,
    render:()=>stub('📍','Find My','Thiết bị: iPhone 17 Pro Max · Tại nhà') },
  { id:'files', name:'Tệp', bg:'linear-gradient(180deg,#4facfe,#0064d2)', icon:I.files,
    render:()=>stub('📁','Tệp','iCloud Drive · 128 GB trống') },
  { id:'shortcut', name:'Phím tắt', bg:'linear-gradient(180deg,#ff5e8a,#b06bff)', icon:I.shortcut,
    render:()=>stub('⚡','Phím tắt','Tạo quy trình tự động hoá.') },
  { id:'phone', name:'Điện thoại', bg:'linear-gradient(180deg,#5ee07a,#28a745)', icon:I.phone,
    render:()=>stub('📞','Điện thoại','Gần đây: 0912 345 678 · 3 phút trước') },
  { id:'msg', name:'Tin nhắn', bg:'linear-gradient(180deg,#5ee07a,#28a745)', icon:I.msg,
    render:()=>stub('💬','Tin nhắn','Chưa có tin nhắn mới.') },
  { id:'safari', name:'Safari', bg:'linear-gradient(180deg,#e8f4ff,#c7e8ff)', icon:I.safari,
    render:()=>browserRender(), init:(root)=> makeBrowser(root) },
  { id:'chrome', name:'Chrome', bg:'#fff', icon:I.chrome,
    render:()=>browserRender(), init:(root)=> makeBrowser(root) }
];

/* =========================================================
   STATE
   ========================================================= */
const S = { locked:true, currentApp:null, currentCleanup:null, ccOpen:false, ncOpen:false };

const $screen   = document.getElementById('screen');
const $appView  = document.getElementById('appView');
const $homeWrap = document.getElementById('homeWrap');
const $pages    = document.getElementById('pages');
const $dots     = document.getElementById('dots');
const $dock     = document.getElementById('dock');
const $lock     = document.getElementById('lockScreen');
const $cc       = document.getElementById('cc');
const $nc       = document.getElementById('nc');
const $gzL      = document.getElementById('gzL');
const $island   = document.getElementById('island');
const $hi       = document.getElementById('homeIndicator');

/* =========================================================
   RENDER HOME
   ========================================================= */
const dockIds = ['phone','safari','chrome','msg'];
const gridApps = APPS.filter(a=>!dockIds.includes(a.id));
const dockApps = dockIds.map(id=>APPS.find(a=>a.id===id)).filter(Boolean);

const page1Apps = gridApps.slice(0,16);
const page2Apps = gridApps.slice(16);
const appEl = (a)=>`<div class="app" data-app="${a.id}">
  <div class="icon" style="background:${a.bg}">${a.icon}</div>
  <span>${a.name}</span>
</div>`;

$pages.innerHTML = `
  <div class="page">${page1Apps.map(appEl).join('')}</div>
  <div class="page">
    <div style="grid-column:span 4"><div class="search-bar">🔍 Tìm kiếm</div></div>
    ${page2Apps.map(appEl).join('')}
  </div>`;
$dots.innerHTML = `<i class="on"></i><i></i><i></i>`;
$dock.innerHTML = dockApps.map(appEl).join('');

$pages.querySelectorAll('[data-app]').forEach(el=> el.addEventListener('click', ()=> openApp(el.dataset.app)));
$dock.querySelectorAll('[data-app]').forEach(el=> el.addEventListener('click', ()=> openApp(el.dataset.app)));

$pages.addEventListener('scroll', ()=>{
  const idx = Math.round($pages.scrollLeft / $pages.clientWidth);
  $dots.querySelectorAll('i').forEach((d,i)=> d.classList.toggle('on', i===idx));
});

/* =========================================================
   APP OPEN / CLOSE
   ========================================================= */
function openApp(id){
  const app = APPS.find(a=>a.id===id);
  if(!app) return;
  if(S.currentCleanup){ try{S.currentCleanup();}catch(e){} S.currentCleanup=null; }
  $appView.innerHTML = app.render ? app.render() : stub('📱',app.name,'');
  $appView.classList.add('show');
  S.currentApp = id;
  $gzL.classList.add('active');
  if(app.init){
    requestAnimationFrame(()=>{
      try{ S.currentCleanup = app.init($appView) || null; }catch(e){ console.warn(e); }
    });
  }
  pulseIsland();
}
function closeApp(){
  if(S.currentCleanup){ try{S.currentCleanup();}catch(e){} S.currentCleanup=null; }
  $appView.classList.remove('show');
  $appView.style.transform = '';
  $appView.style.opacity = '';
  $appView.style.borderRadius = '';
  S.currentApp = null;
  $gzL.classList.remove('active');
  setTimeout(()=>{ if(!S.currentApp) $appView.innerHTML=''; }, 380);
}

/* =========================================================
   DYNAMIC ISLAND
   ========================================================= */
let islandTimer=null;
$island.addEventListener('click', ()=>{
  $island.classList.toggle('open');
  if($island.classList.contains('open')){
    clearTimeout(islandTimer);
    islandTimer = setTimeout(()=>$island.classList.remove('open'), 4000);
  }
});
function pulseIsland(){
  $island.classList.add('open');
  clearTimeout(islandTimer);
  islandTimer = setTimeout(()=>$island.classList.remove('open'), 2200);
}

/* =========================================================
   CLOCK
   ========================================================= */
const VN_DAYS = ['Chủ Nhật','Thứ Hai','Thứ Ba','Thứ Tư','Thứ Năm','Thứ Sáu','Thứ Bảy'];
function updateClocks(){
  const d = new Date();
  const hh = String(d.getHours()).padStart(2,'0');
  const mm = String(d.getMinutes()).padStart(2,'0');
  const t = hh+':'+mm;
  document.getElementById('sbTime').textContent = t;
  document.getElementById('lockTime').textContent = t;
  document.getElementById('lockDate').textContent =
    VN_DAYS[d.getDay()] + ', ' + d.getDate() + ' tháng ' + (d.getMonth()+1);
  const nt = document.getElementById('ncTime'); if(nt) nt.textContent = t;
  const nd = document.getElementById('ncDate'); if(nd) nd.textContent =
    VN_DAYS[d.getDay()] + ', ' + d.getDate() + ' tháng ' + (d.getMonth()+1);
}
updateClocks();
setInterval(updateClocks, 1000);

/* =========================================================
   LOCK / UNLOCK
   ========================================================= */
function unlock(){ S.locked=false; $lock.classList.add('gone'); }
function lockPhone(){
  S.locked=true; closeApp();
  $lock.classList.remove('gone');
  $lock.style.transform=''; $lock.style.opacity='';
}

/* =========================================================
   CONTROL / NOTIFICATION CENTER
   ========================================================= */
function openCC(){ S.ccOpen=true; $cc.classList.add('open'); }
function closeCC(){ S.ccOpen=false; $cc.classList.remove('open'); }
function openNC(){ S.ncOpen=true; $nc.classList.add('open'); }
function closeNC(){ S.ncOpen=false; $nc.classList.remove('open'); }

$cc.querySelectorAll('.cc-tile[data-t]').forEach(t=>{
  t.addEventListener('click', (e)=>{
    e.stopPropagation();
    const k = t.dataset.t;
    if(k==='lock'){ closeCC(); lockPhone(); return; }
    if(k==='music'){ closeCC(); openApp('music'); return; }
    if(k==='cam'){ closeCC(); openApp('camera'); return; }
    if(k==='calc'){ closeCC(); openApp('calc'); return; }
    t.classList.toggle('active');
  });
});
$cc.querySelectorAll('.cc-slider').forEach(s=>{
  s.addEventListener('pointerdown', e=>{
    e.stopPropagation();
    const rect = s.getBoundingClientRect();
    const update = (clientX)=>{
      const p = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      s.querySelector('.fill').style.width = (p*100)+'%';
    };
    update(e.clientX);
    const move = ev => update(ev.clientX);
    const up = ()=>{ window.removeEventListener('pointermove', move); window.removeEventListener('pointerup', up); };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  });
});

/* =========================================================
   GESTURES
   ========================================================= */
function makeGesture(zoneEl, type){
  let g = null;
  zoneEl.addEventListener('pointerdown', e=>{
    if(e.pointerType==='mouse' && e.button!==0) return;
    zoneEl.setPointerCapture(e.pointerId);
    const rect = $screen.getBoundingClientRect();
    g = { type, startX:e.clientX-rect.left, startY:e.clientY-rect.top,
          curX:e.clientX-rect.left, curY:e.clientY-rect.top,
          W:rect.width, H:rect.height, startTime:Date.now(), active:false };
  });
  zoneEl.addEventListener('pointermove', e=>{
    if(!g) return;
    const rect = $screen.getBoundingClientRect();
    g.curX = e.clientX - rect.left;
    g.curY = e.clientY - rect.top;
    const dx = g.curX - g.startX;
    const dy = g.curY - g.startY;
    if(!g.active){
      if(Math.abs(dx) < 8 && Math.abs(dy) < 8) return;
      g.active = true;
      if(type==='home') $hi.classList.add('grab');
    }
    handleGestureMove(g, dx, dy);
  });
  zoneEl.addEventListener('pointerup', ()=>{
    if(!g) return;
    const g0 = g; g = null;
    $hi.classList.remove('grab');
    if(g0.active) handleGestureEnd(g0); else handleGestureTap(g0);
  });
  zoneEl.addEventListener('pointercancel', ()=>{ if(g){ $hi.classList.remove('grab'); g=null; } });
}

function handleGestureMove(g, dx, dy){
  const H = g.H;
  if(g.type==='home'){
    const progress = Math.max(0, Math.min(1, -dy / (H*0.35)));
    if(S.currentApp){
      $appView.style.transition='none';
      $appView.style.transform=`scale(${1-0.28*progress}) translateY(${-progress*70}px)`;
      $appView.style.borderRadius=`${progress*44}px`;
      $appView.style.opacity=String(1-progress*0.65);
    }
  } else if(g.type==='cc'){
    const progress = Math.max(0, Math.min(1, dy / (H*0.55)));
    $cc.classList.add('dragging');
    $cc.style.transform = `translateY(${(progress-1)*100}%)`;
  } else if(g.type==='nc'){
    const progress = Math.max(0, Math.min(1, dy / (H*0.55)));
    $nc.classList.add('dragging');
    $nc.style.transform = `translateY(${(progress-1)*100}%)`;
  } else if(g.type==='back'){
    const progress = Math.max(0, Math.min(1, dx / (g.W*0.5)));
    if(S.currentApp){
      $appView.style.transition='none';
      $appView.style.transform = `translateX(${progress*30}%)`;
      $appView.style.opacity = String(1 - progress*0.3);
    }
  }
}
function handleGestureEnd(g){
  const dx = g.curX - g.startX;
  const dy = g.curY - g.startY;
  const H = g.H, W = g.W;
  if(g.type==='home'){
    const progress = Math.max(0, Math.min(1, -dy / (H*0.35)));
    if(progress > 0.28){ if(S.currentApp){ $appView.style.transition=''; closeApp(); } }
    else if(S.currentApp){ $appView.style.transition=''; $appView.style.transform='';
      $appView.style.borderRadius=''; $appView.style.opacity=''; }
  } else if(g.type==='cc'){
    const progress = Math.max(0, Math.min(1, dy / (H*0.55)));
    $cc.classList.remove('dragging'); $cc.style.transform='';
    if(progress > 0.35) openCC(); else closeCC();
  } else if(g.type==='nc'){
    const progress = Math.max(0, Math.min(1, dy / (H*0.55)));
    $nc.classList.remove('dragging'); $nc.style.transform='';
    if(progress > 0.35) openNC(); else closeNC();
  } else if(g.type==='back'){
    const progress = Math.max(0, Math.min(1, dx / (W*0.5)));
    if(progress > 0.35){ if(S.currentApp){ $appView.style.transition=''; closeApp(); } }
    else if(S.currentApp){ $appView.style.transition=''; $appView.style.transform=''; $appView.style.opacity=''; }
  }
}
function handleGestureTap(g){
  const dt = Date.now() - g.startTime;
  if(dt > 500) return;
  if(g.type==='home'){
    if(S.currentApp) closeApp();
    else if(S.locked) unlock();
  }
}

makeGesture(document.getElementById('gzB'), 'home');
makeGesture(document.getElementById('gzTL'), 'nc');
makeGesture(document.getElementById('gzTR'), 'cc');
makeGesture($gzL, 'back');

/* =========================================================
   LOCK SWIPE
   ========================================================= */
let lockDrag = null;
$lock.addEventListener('pointerdown', e=>{
  if(e.target.closest('.lock-btn')) return;
  $lock.setPointerCapture(e.pointerId);
  const rect = $screen.getBoundingClientRect();
  lockDrag = { startY:e.clientY-rect.top, curY:e.clientY-rect.top,
               startTime:Date.now(), H:rect.height, active:false };
  $lock.style.transition='none';
});
$lock.addEventListener('pointermove', e=>{
  if(!lockDrag) return;
  const rect = $screen.getBoundingClientRect();
  lockDrag.curY = e.clientY - rect.top;
  let dy = lockDrag.curY - lockDrag.startY;
  if(dy > 0) dy = dy * 0.25;
  if(Math.abs(dy) > 6) lockDrag.active = true;
  $lock.style.transform = `translateY(${dy}px)`;
  $lock.style.opacity = String(Math.max(0, 1 + dy/500));
  if(-dy > 60) $hi.classList.add('grab');
});
$lock.addEventListener('pointerup', ()=>{
  if(!lockDrag) return;
  const g = lockDrag; lockDrag = null;
  $lock.style.transition='';
  $hi.classList.remove('grab');
  const dy = g.curY - g.startY;
  const dt = Date.now() - g.startTime;
  if(dy < -80 || (dy < -35 && dt < 260)){
    $lock.style.transform = 'translateY(-110%)';
    $lock.style.opacity = '0';
    setTimeout(()=>{ $lock.classList.add('gone');
      $lock.style.transform=''; $lock.style.opacity=''; }, 480);
    S.locked = false;
  } else { $lock.style.transform=''; $lock.style.opacity=''; }
});

/* =========================================================
   OVERLAY DISMISS
   ========================================================= */
function attachOverlayDismiss(el, closeFn){
  let startY = 0, dragging = false;
  el.addEventListener('pointerdown', e=>{
    if(e.target.closest('.cc-tile, .cc-slider, .notif')) return;
    dragging = true; startY = e.clientY;
    el.style.transition='none';
  });
  el.addEventListener('pointermove', e=>{
    if(!dragging) return;
    const dy = Math.min(0, e.clientY - startY);
    el.style.transform = `translateY(${dy}px)`;
    el.style.opacity = String(1 + dy/400);
  });
  el.addEventListener('pointerup', e=>{
    if(!dragging) return;
    dragging = false;
    el.style.transition=''; el.style.transform=''; el.style.opacity='';
    const dy = e.clientY - startY;
    if(dy < -50) closeFn();
    else if(Math.abs(dy) < 6){
      if(!e.target.closest('.cc-tile, .cc-slider, .notif')) closeFn();
    }
  });
}
attachOverlayDismiss($cc, ()=>closeCC());
attachOverlayDismiss($nc, ()=>closeNC());

/* =========================================================
   POWER BUTTON / HOME INDICATOR
   ========================================================= */
document.getElementById('powerBtn').addEventListener('click', ()=>{
  if(S.locked) unlock(); else lockPhone();
});
$hi.addEventListener('click', ()=>{
  if(S.currentApp) closeApp();
  else if(S.locked) unlock();
});

/* =========================================================
   KEYBOARD
   ========================================================= */
window.addEventListener('keydown', e=>{
  if(e.key==='Escape'){
    if(S.ccOpen) closeCC();
    else if(S.ncOpen) closeNC();
    else if(S.currentApp) closeApp();
  }
});

/* =========================================================
   FIT STAGE
   ========================================================= */
function fit(){
  const stage = document.getElementById('stage');
  const s = Math.min(window.innerWidth/440, window.innerHeight/900, 1.15);
  stage.style.transform = `scale(${s})`;
}
fit();
window.addEventListener('resize', fit);

/* =========================================================
   HINT ANIMATION
   ========================================================= */
setTimeout(()=>{ if(S.locked) $hi.classList.add('grab');
  setTimeout(()=>$hi.classList.remove('grab'), 600); }, 1500);