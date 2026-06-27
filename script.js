const scamTypes = [
    {
        type: "假客服詐騙",
        keywords: ["客服", "解除分期", "訂單異常", "重複扣款", "誤設", "會員升級", "取消設定", "line客服", "驗證碼"],
        advice: "請直接到官方 App 或官方網站查詢，不要加入陌生 LINE 客服。"
    },
    {
        type: "投資詐騙",
        keywords: ["保證獲利", "穩賺不賠", "老師帶單", "投資群", "高報酬", "內線消息", "虛擬貨幣", "入金", "vip群組"],
        advice: "保證獲利、高報酬低風險通常是詐騙警訊，請勿匯款或入金。"
    },
    {
        type: "求職詐騙",
        keywords: ["高薪兼職", "在家工作", "日領", "代收款", "提供帳戶", "博弈", "刷流水", "保證金"],
        advice: "要求提供帳戶、代收款或先繳錢的工作邀約風險很高。"
    },
    {
        type: "釣魚連結",
        keywords: ["點擊連結", "驗證帳號", "重新登入", "帳戶異常", "安全驗證", ".vip", ".top", ".xyz", ".shop", ".cc"],
        advice: "不要點陌生連結，請手動輸入官方網址查詢。"
    },
    {
        type: "包裹簡訊詐騙",
        keywords: ["包裹", "物流", "補繳運費", "地址錯誤", "配送失敗", "海關", "關稅"],
        advice: "請到官方物流平台查詢，不要透過簡訊連結付款。"
    },
    {
        type: "假冒親友詐騙",
        keywords: ["我是你朋友", "換手機", "借我錢", "急用", "不要跟別人說", "先幫我轉"],
        advice: "請直接打電話給本人確認，不要只靠文字訊息判斷。"
    }
];

function analyzeScam() {
    const text = document.getElementById("inputText").value.toLowerCase();

    if (text.trim() === "") {
        document.getElementById("result").innerHTML = `
            <div class="result-card">請先貼上可疑訊息。</div>
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
    if (detectedLinks.length > 0) totalScore += 10;
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

    const {
        data: { text }
    } = await Tesseract.recognize(
        file,
        "chi_tra+eng"
    );

    document.getElementById("inputText").value = text;

    analyzeScam();
}
function removeImage() {
    const preview = document.getElementById("preview");
    const upload = document.getElementById("imageUpload");

    preview.src = "";
    preview.style.display = "none";

    upload.value = "";

    document.getElementById("removeImageBtn").style.display = "none";
}