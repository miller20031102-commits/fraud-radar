const scamTypes = [
{
    type: "假客服詐騙",
    keywords: [
        "客服","客服專員","真人客服","線上客服","LINE客服","官方客服",
"解除分期","取消分期","解除設定","重複扣款","重複付款","扣款失敗",
"帳戶異常","帳號異常","異常登入","帳戶停用","帳號停用","凍結帳戶",
"網路銀行","網銀","銀行通知","金融機構","重新驗證","身份驗證",
"安全驗證","驗證帳號","驗證身份","驗證碼","OTP","簡訊驗證碼",
"帳單","電子帳單","eTag","etag","停車費","高速公路","過路費",
"自動扣款","帳單自動扣款","更新帳戶","更新資料","更新付款方式",
"重新啟用","重新登入","重新設定密碼","立即更新","24小時內",
"48小時內","限時處理","立即處理","立即點擊","儘速完成",

"點擊連結","立即點擊","陌生連結","網址驗證","短網址",
"bit.ly","reurl.cc","tinyurl","lihi","s.id","ppt.cc",
"cutt.ly","shorturl","goo.gl","tiny.cc","t.ly",

"保證獲利","穩賺不賠","高報酬","低風險","零風險",
"保本","保證收益","固定收益","老師帶單","分析師",
"投資老師","名師帶單","專家帶單","VIP群組","VIP會員",
"內線消息","飆股","報牌","明牌","跟單","跟單操作",
"AI投資","智能投資","量化交易","自動交易","套利",
"穩定收益","日收益","日報酬","月報酬","翻倍",
"翻倉","倍數收益","出金","入金","充值","儲值",
"小額試單","體驗金","帶你賺","一對一帶單",

"虛擬貨幣","加密貨幣","USDT","BTC","ETH","TRC20",
"ERC20","BEP20","冷錢包","熱錢包","私鑰","助記詞",
"錢包地址","鏈上","Gas Fee","礦工費","解凍金",
"保證金","手續費","解鎖資金","解凍資金","智能合約",
"DEX","CEX","質押","流動性挖礦","搬磚套利",

"高薪兼職","高薪工作","在家工作","在家兼職","家庭代工",
"免經驗","不限學歷","學生可","日領","週領","現領",
"工作輕鬆","時間自由","快速賺錢","輕鬆月入",
"刷單","代購","代收款","代付款","代操作",
"提供帳戶","提供銀行帳戶","提供提款卡","提供存摺",
"代轉帳","收款員","協助收款","博弈","刷流水",
"保證金","押金","加盟金","註冊費","教育費",

"包裹","物流","宅配","超商取貨","重新配送","重新投遞",
"配送失敗","配送異常","貨態異常","補繳運費","補運費",
"海關","關稅","報關費","清關費","地址錯誤","收件失敗",
"貨件滯留","待領取","物流通知","物流中心",

"警察局","刑警","地檢署","檢察官","法院","法官",
"洗錢防制","監管帳戶","資金監管","司法調查",
"涉嫌犯罪","涉嫌洗錢","配合調查","偵查不公開",
"安全帳戶","資金保全","監控帳戶","資產清查",
"專案調查","調查局","刑事局",

"我是你朋友","換手機","這是我的新號碼","借我錢",
"先借我","急用","急需用錢","不要跟別人說",
"先幫我轉","先救我","幫我收款","幫我轉帳",
"家人住院","朋友住院","臨時需要","幫個忙",

"交友","交友軟體","美女投資","戀愛投資","殺豬盤",
"認識一下","交個朋友","陪聊","戀愛","網戀",
"帶你投資","帶你賺錢","感情投資","一起規劃未來",

"中獎","抽獎","幸運得主","免費領取","免費贈送",
"領獎","獎金","現金回饋","紅包","政府補助",
"紓困補助","退稅","退費","退款","補貼","津貼",

"Apple ID","Google帳號","Facebook帳號","IG帳號",
"LINE帳號","帳號被盜","異地登入","登入異常",
"安全警示","設備異常","登入通知","停權","封鎖"
       , "客服","解除分期","訂單異常","重複扣款","誤設","會員升級",
        "取消設定","line客服","驗證碼","扣款失敗","24小時內完成",
        "更新帳戶","帳戶異常","重新驗證","銀行通知","網路銀行",
        "網銀","帳單","自動扣款","帳單自動扣款","帳戶停用",
        "重新啟用","帳戶詳情","確認身份","身份驗證","安全驗證",
        "立即更新","點擊連結","短網址","客服專員"
    ],
    advice: "請直接透過官方 App 或官網查詢，不要加入陌生 LINE 客服。"
},

{
    type: "投資詐騙",
    keywords: [
        "保證獲利","穩賺不賠","老師帶單","投資群","高報酬",
        "內線消息","虛擬貨幣","入金","vip群組","跟單",
        "飆股","飆漲","翻倍","報牌","明牌","分析師",
        "免費帶單","低風險高報酬","保本","翻倉","資金翻倍",
        "短期獲利","月報酬","日報酬","配資","量化交易",
        "AI投資","智能交易","穩定收益","出金","充值"
    ],
    advice: "合法投資不存在保證獲利，高報酬低風險通常是詐騙。"
},

{
    type: "求職詐騙",
    keywords: [
        "高薪兼職","在家工作","日領","週領","免經驗",
        "代收款","提供帳戶","博弈","刷流水","保證金",
        "押金","代購","刷單","打字員","家庭代工",
        "工作輕鬆","時間自由","無需面試","快速賺錢",
        "收款員","代操作","協助收款","代轉帳"
    ],
    advice: "要求提供帳戶、代收款或先繳費的工作幾乎都是詐騙。"
},

{
    type: "包裹物流詐騙",
    keywords: [
        "包裹","物流","補繳運費","地址錯誤","配送失敗",
        "海關","關稅","重新配送","宅配","超商取貨",
        "物流通知","貨件異常","重新投遞","收件失敗",
        "配送中心","貨態異常","待領取","包裹滯留"
    ],
    advice: "請直接至物流公司官網查詢，不要點擊簡訊連結。"
},

{
    type: "釣魚連結",
    keywords: [
        "點擊連結","驗證帳號","重新登入","帳戶異常",
        "安全驗證","身份驗證","登入失敗","更新資料",
        "確認資料","確認身份","系統通知","重新設定密碼",
        "s.id","bit.ly","reurl.cc","tinyurl","lihi"
    ],
    advice: "不要點擊陌生連結，請自行輸入官方網址查詢。"
},

{
    type: "假冒親友詐騙",
    keywords: [
        "我是你朋友","換手機","借我錢","急用","不要跟別人說",
        "先幫我轉","先救我","幫忙匯款","臨時需要",
        "家人住院","急需用錢","帳號借我","幫我收款"
    ],
    advice: "請直接撥電話確認，不要只依靠文字訊息判斷。"
},

{
    type: "假檢警詐騙",
    keywords: [
        "警察局","刑警","地檢署","法院","偵查不公開",
        "監管帳戶","洗錢防制","涉嫌犯罪","資金調查",
        "凍結帳戶","司法調查","金融監管","檢察官"
    ],
    advice: "警察、檢察官不會要求轉帳或監管帳戶。"
},

{
    type: "虛擬貨幣詐騙",
    keywords: [
        "USDT","錢包","助記詞","私鑰","冷錢包","熱錢包",
        "鏈上","充值","出金","Gas Fee","礦工費",
        "解凍金","保證金","合約","套利","搬磚",
        "DEX","CEX","空投","質押","流動性挖礦"
    ],
    advice: "不要提供助記詞或私鑰，任何要求解凍金的都是高風險。"
}
];

async function analyzeScam() {
    let rawText = document.getElementById("inputText").value;
let text = rawText.toLowerCase();

if (text.trim() === "") {
    const preview = document.getElementById("preview");

    if (preview && preview.style.display === "block") {
        document.getElementById("result").innerHTML = `
            <div class="result-card">
                🔍 圖片正在辨識中，請稍等幾秒，完成後會自動分析。
            </div>
        `;
        return;
    }

    document.getElementById("result").innerHTML = `
        <div class="result-card">
            請先貼上可疑訊息，或上傳詐騙截圖。
        </div>
    `;
    return;
}

    let detectedLinks = text.match(/https?:\/\/[^\s]+|www\.[^\s]+|\b\S+\.(vip|top|xyz|shop|cc)\b/gi) || [];
    let detectedPhones = text.match(/09\d{8}|(\+886)?9\d{8}/g) || [];
    let detectedLineIds = text.match(/line\s*id[:：]?\s*[a-zA-Z0-9._-]+|line[:：]?\s*[a-zA-Z0-9._-]+/gi) || [];
    let detectedMoney = text.match(/\d+\s*(元|萬|塊|台幣|ntd|twd)/g) || [];
    let detectedBank = text.match(/\d{10,16}/g) || [];

    let totalScore = 0;
    let matchedTypes = [];
    let matchedKeywords = [];
let aiReasoning = [];
const dangerWords = {
    "保證獲利": 50,
    "穩賺不賠": 50,
    "解除分期": 45,
    "監管帳戶": 60,
    "助記詞": 80,
    "私鑰": 80,
    "驗證碼": 40,
    "刷流水": 50,
    "提供帳戶": 50,
    "代收款": 50,
    "先匯款": 50,
    "保證金": 45,
    "解凍金": 60,
    "VIP群組": 40,
    "老師帶單": 45,
    "內線消息": 40
};

   if (detectedLinks.length > 0) {
    totalScore += 20;
    aiReasoning.push("偵測到網址連結，詐騙訊息常引導點擊不明網站。");
}

const suspiciousDomains = [
    "bit.ly", "reurl.cc", "s.id", "tinyurl", "ppt.cc",
    "lihi", "cutt.ly", "shorturl", "t.ly"
];
suspiciousDomains.forEach(domain => {
    if (text.includes(domain)) {
        totalScore += 35;
        matchedKeywords.push("可疑短網址：" + domain);
        aiReasoning.push(`⚠️ 偵測到短網址 ${domain}，詐騙常用短網址隱藏真實網站。`);
    }
});

// 組合判斷：多個關鍵字同時出現時，提高風險分數
if (text.includes("保證獲利") && text.includes("vip群組")) {
    totalScore += 50;
    matchedKeywords.push("保證獲利 + VIP群組");
    aiReasoning.push("🚨 偵測到『保證獲利 + VIP群組』，符合投資詐騙常見組合。");
}

if (text.includes("老師帶單") && text.includes("入金")) {
    totalScore += 50;
    matchedKeywords.push("老師帶單 + 入金");
    aiReasoning.push("🚨 偵測到『老師帶單 + 入金』，常見於投資詐騙。");
}

if (text.includes("解除分期") && text.includes("驗證碼")) {
    totalScore += 60;
    matchedKeywords.push("解除分期 + 驗證碼");
    aiReasoning.push("🚨 偵測到『解除分期 + 驗證碼』，符合假客服詐騙特徵。");
}

if (text.includes("提供帳戶") && text.includes("日領")) {
    totalScore += 70;
    matchedKeywords.push("提供帳戶 + 日領");
    aiReasoning.push("🚨 偵測到『提供帳戶 + 日領』，符合求職詐騙特徵。");
}

if (text.includes("檢察官") && text.includes("監管帳戶")) {
    totalScore += 80;
    matchedKeywords.push("檢察官 + 監管帳戶");
    aiReasoning.push("🚨 偵測到『檢察官 + 監管帳戶』，符合假檢警詐騙特徵。");
}

if (text.includes("usdt") && text.includes("解凍金")) {
    totalScore += 80;
    matchedKeywords.push("USDT + 解凍金");
    aiReasoning.push("🚨 偵測到『USDT + 解凍金』，符合虛擬貨幣詐騙特徵。");
}

suspiciousDomains.forEach(domain => {
    if (text.includes(domain)) {
        totalScore += 35;
        matchedKeywords.push("可疑短網址：" + domain);
        aiReasoning.push(`⚠️ 偵測到短網址 ${domain}，詐騙常用短網址隱藏真實網站。`);
    }
});
const urgencyWords = [
    "立即",
    "馬上",
    "24小時",
    "48小時",
    "最後通知",
    "否則",
    "逾期",
    "儘速",
    "立即處理",
    "盡快",
    "今天內",
    "限時",
    "避免停權",
    "避免停用",
    "避免凍結",
    "避免扣款",
    "將被停用",
    "將被凍結",
    "即將失效",
    "立即驗證"
];

let urgencyCount = 0;

urgencyWords.forEach(word => {
    if (text.includes(word)) {
        urgencyCount++;
        matchedKeywords.push(`緊急詞：${word}`);
    }
});

if (urgencyCount >= 2) {
    totalScore += urgencyCount * 10;
    aiReasoning.push(
        `⚠️ 偵測到 ${urgencyCount} 個緊急性詞語，詐騙訊息常利用時間壓力促使受害者快速行動。`
    );
}
const fakeBrandWords = [
    "etag", "shopee", "蝦皮", "銀行", "中華郵政", "郵局",
    "宅配", "黑貓", "7-11", "全家", "國稅局", "健保署"
];

fakeBrandWords.forEach(word => {
    if (text.includes(word.toLowerCase()) && detectedLinks.length > 0) {
        totalScore += 20;
        matchedKeywords.push("疑似冒用品牌：" + word);
        aiReasoning.push(`⚠️ 訊息提到「${word}」且包含連結，需確認是否為官方網站。`);
    }
});
if (text.includes("扣款失敗")) {
    totalScore += 25;
    matchedKeywords.push("扣款失敗");
}

if (text.includes("網銀")) {
    totalScore += 20;
    matchedKeywords.push("網銀");
}

if (text.includes("24小時")) {
    totalScore += 15;
    matchedKeywords.push("24小時");
}

if (text.includes("帳單")) {
    totalScore += 10;
    matchedKeywords.push("帳單");
}

if (text.includes("etag") || text.includes("elag") || text.includes("e-tag")) {
    totalScore += 15;
    matchedKeywords.push("eTag");
}
if (
    text.includes("s.id") ||
    text.includes("bit.ly") ||
    text.includes("reurl.cc")
) {
    totalScore += 30;
    matchedKeywords.push("短網址");
    aiReasoning.push("偵測到短網址，詐騙簡訊常利用短網址隱藏真實網站。");
}
if (text.includes("自動") && text.includes("更新")) {
    totalScore += 20;
    matchedKeywords.push("自動扣款/更新");
}

if (text.includes("詳細") || text.includes("信息") || text.includes("訪問")) {
    totalScore += 15;
    matchedKeywords.push("詳細信息/訪問連結");
}

if (text.includes("銀行") || text.includes("網銀") || text.includes("帳戶")) {
    totalScore += 20;
    matchedKeywords.push("銀行/帳戶");
}

if (text.includes("165") && detectedLinks.length > 0) {
    totalScore += 10;
    matchedKeywords.push("165反詐騙圖片來源");
}
    if (detectedPhones.length > 0) totalScore += 10;
    if (detectedLineIds.length > 0) totalScore += 15;
    if (detectedMoney.length > 0) totalScore += 10;
    if (detectedBank.length > 0) totalScore += 15;

    scamTypes.forEach(item => {
        let count = 0;

        item.keywords.forEach(keyword => {
            if (text.includes(keyword.toLowerCase())) {
                count++;
                matchedKeywords.push(keyword);
                if(keyword.includes("解除分期")){
    aiReasoning.push("① 偵測到「解除分期」→ 常見於假客服詐騙。");
}

if(keyword.includes("保證獲利")){
    aiReasoning.push("① 偵測到「保證獲利」→ 合法投資無法保證獲利。");
}

if(keyword.includes("驗證碼")){
    aiReasoning.push("① 偵測到「驗證碼」→ 詐騙常利用驗證碼取得帳戶控制權。");
}

if(keyword.includes("line")){
    aiReasoning.push("① 偵測到「LINE」→ 官方客服通常不會要求轉移到私人LINE。");
}
            }
        });

        if (count > 0) {
            totalScore += count * 18;
            matchedTypes.push({
                type: item.type,
                count: count,
                advice: item.advice
            });
        }
        Object.entries(dangerWords).forEach(([word, score]) => {
    if (text.includes(word.toLowerCase())) {
        totalScore += score;
        matchedKeywords.push(`高風險詞：${word}`);
    }
});
    });

    totalScore = Math.min(totalScore, 100);

    let level = "";
    let levelClass = "";

    if (totalScore >= 70) {
        level = "高風險";
        levelClass = "risk-high";
    } else if (totalScore >= 35) {
        level = "中風險";
        levelClass = "risk-medium";
    } else {
        level = "低風險";
        levelClass = "risk-low";
    }

    let mainType = matchedTypes.length > 0
        ? [...matchedTypes].sort((a, b) => b.count - a.count)[0]
        : null;

    let typePercentHTML = "";

    if (matchedTypes.length > 0) {
        let totalMatches = matchedTypes.reduce((sum, item) => sum + item.count, 0);

        typePercentHTML = [...matchedTypes]
            .sort((a, b) => b.count - a.count)
            .map(item => {
                let percent = Math.round((item.count / totalMatches) * 100);
                return `
                    <div class="type-row">
                        <span>${item.type}</span>
                        <strong>${percent}%</strong>
                    </div>
                `;
            })
            .join("");
    } else {
        typePercentHTML = "尚未偵測到足夠特徵。";
    }

    let riskExplanation = "";

    if (totalScore >= 70) {
        riskExplanation = `
            AI 發現此訊息同時包含多項高風險特徵，例如：
            ${matchedKeywords.slice(0,5).join("、")}。
            此類組合經常出現在假客服、投資詐騙與釣魚網站案例中。
        `;
    } else if (totalScore >= 35) {
        riskExplanation = `
            AI 發現部分可疑特徵：
            ${matchedKeywords.slice(0,3).join("、")}。
            建議先向官方客服、親友或 165 反詐騙專線查證。
        `;
    } else {
        riskExplanation = "目前未發現明顯詐騙模式，但仍建議不要提供帳號、密碼或驗證碼。";
    }

    document.getElementById("result").innerHTML = `
        <div class="result-card">
            <h2 class="${levelClass}">🚨 詐騙風險：${level}</h2>

            <h3>風險分數：${totalScore} / 100</h3>

            <div class="risk-bar">
                <div class="risk-fill" style="width:${totalScore}%"></div>
            </div>

            <div class="reason">
                <strong>可能詐騙類型：</strong><br><br>
                ${mainType ? `⚠️ ${mainType.type}` : "尚未偵測到明顯詐騙類型"}
            </div>

            <div class="reason">
                <strong>詐騙類型機率：</strong><br><br>
                ${typePercentHTML}
                ${aiReasoning.length > 0 ? `
    <div class="reason">
        <strong>🧠 AI 判斷原因：</strong><br><br>
        ${aiReasoning.map(reason => `・${reason}`).join("<br>")}
    </div>
` : ""}
            </div>

            <div class="reason">
                <strong>分析結果說明：</strong><br><br>
                ${riskExplanation}
            </div>

            <div class="reason">
                <strong>偵測到的網址：</strong><br><br>
                ${detectedLinks.length > 0
                    ? detectedLinks.map(x => `🌐 ${x}`).join("<br>")
                    : "未發現可疑網址"}
            </div>

            <div class="reason">
                <strong>偵測到的聯絡與金流資訊：</strong><br><br>

                ${detectedPhones.length > 0 ? `📞 電話：${detectedPhones.join("、")}<br>` : ""}
                ${detectedLineIds.length > 0 ? `💬 LINE ID：${detectedLineIds.join("、")}<br>` : ""}
                ${detectedMoney.length > 0 ? `💰 金額：${detectedMoney.join("、")}<br>` : ""}
                ${detectedBank.length > 0 ? `🏦 疑似帳號：${detectedBank.join("、")}<br>` : ""}

                ${detectedPhones.length === 0 &&
                  detectedLineIds.length === 0 &&
                  detectedMoney.length === 0 &&
                  detectedBank.length === 0
                    ? "未偵測到明顯電話、LINE ID、金額或帳號"
                    : ""}
            </div>

            <div class="reason">
                <strong>命中的可疑關鍵字：</strong><br><br>
                ${matchedKeywords.length > 0
                    ? [...new Set(matchedKeywords)].map(x => `⚠️ ${x}`).join("<br>")
                    : "未發現明顯詐騙關鍵字"}
            </div>

            <div class="advice">
                💡 建議：<br>
                ${mainType ? mainType.advice + "<br><br>" : ""}
                不要提供帳號、密碼、驗證碼。<br>
                不要點陌生連結或加入陌生 LINE。<br>
                如有疑慮，請撥打 165 反詐騙專線確認。
            </div>
            <button onclick="copyReport()">
    📋 複製分析報告
</button>
        </div>
    `;
}
function copyReport() {

    const report = `
防詐騙雷達分析結果

風險等級：${document.querySelector("h2").innerText}
風險分數：${document.querySelector("h3").innerText}

分析時間：${new Date().toLocaleString()}

建議：
不要匯款
不要提供驗證碼
不要點擊陌生連結
如有疑慮請撥打165反詐騙專線
`;

    navigator.clipboard.writeText(report);

    alert("分析報告已複製！");
}
function clearAll() {
    document.getElementById("inputText").value = "";
    document.getElementById("result").innerHTML = "";
}
function fillExample(type) {
    const examples = {
        investment: "老師帶單保證獲利，每天穩賺不賠，請先入金加入VIP群組。",
        service: "您好，我是客服，您的訂單異常誤設分期，請加入LINE客服並提供驗證碼解除。",
        job: "高薪兼職在家工作，日領3000元，需先提供帳戶協助代收款。"
    };

    document.getElementById("inputText").value = examples[type];
}
function shareSite() {
    const text = `🛡️ 防詐騙雷達 AI

貼上可疑訊息、網址、LINE ID，
立即分析是否有詐騙風險。

快傳給家人朋友一起防詐騙：
${window.location.href}`;

    navigator.clipboard.writeText(text);
    alert("網站分享文字已複製！");
}

async function previewImage(event) {
    const file = event.target.files[0];

    if (!file) return;

    const preview = document.getElementById("preview");

    preview.src = URL.createObjectURL(file);
    preview.style.display = "block";
    document.getElementById("removeImageBtn").style.display = "block";
document.getElementById("result").innerHTML = `
    <div class="result-card">
        🔍 AI 正在讀取圖片文字...
    </div>
`;
    
const img = new Image();
img.src = URL.createObjectURL(file);

await img.decode();

const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

canvas.width = img.width * 2;
canvas.height = img.height * 2;

ctx.drawImage(
    img,
    0,
    0,
    canvas.width,
    canvas.height
);

const {
    data: { text }
} = await Tesseract.recognize(
    canvas,
    "chi_tra+eng"
);

  let fixedText = text
    .replace(/c0m/g, "com")
    .replace(/corn/g, "com")
    .replace(/vvww/g, "www")
    .replace(/rn/g, "m")
    .replace(/l0gin/g, "login")
    .replace(/0rg/g, "org");

/* 新增這一行 */
document.getElementById("inputText").value = fixedText;

/* 把這行改掉 */
console.log(fixedText);

/* 保持不變 */
document.querySelector("button").click();
}

function removeImage() {
    const preview = document.getElementById("preview");
    const upload = document.getElementById("imageUpload");

    preview.src = "";
    preview.style.display = "none";

    upload.value = "";

    document.getElementById("removeImageBtn").style.display = "none";

    document.getElementById("result").innerHTML = "";

    }
