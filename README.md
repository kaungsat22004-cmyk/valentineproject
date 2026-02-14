# 💕 Valentine's Day Special Puzzle Project 💕

ဒီ Project လေးဟာ ချစ်သူများနေ့မှာ မိမိရဲ့ Partner ကို Digital လက်ဆောင်အနေနဲ့ Surprise တိုက်ဖို့ ဖန်တီးထားတဲ့ Interactive Puzzle Game လေးဖြစ်ပါတယ်။ ဓာတ်ပုံကို ပဟေဠိဆက်ရမှာဖြစ်ပြီး အောင်မြင်သွားတဲ့အခါ Ed Sheeran ရဲ့ "Perfect" သီချင်းနဲ့အတူ အမှတ်တရစကားလုံးလေးတွေ ပေါ်လာမှာပါ။

---

## ✨ Features (ထူးခြားချက်များ)

* **Custom Image Puzzle:** မိမိတို့ရဲ့ Couple Photo ကို 4x4 Grid (၁၆ ပိုင်း) ဖြင့် ကစားနိုင်ခြင်း။
* **Horizontal Scroll UI:** ဖုန်းဖြင့်ကစားရာတွင် လွယ်ကူစေရန် ပဟေဠိအပိုင်းအစများကို အောက်ခြေတွင် ဘေးတိုက် Scroll ဆွဲနိုင်သော Box ဖြင့် ပြုလုပ်ထားခြင်း။
* **Square Snapping:** အပိုင်းအစများကို နေရာမှန်သို့ ထည့်လိုက်ပါက ထောင့်ဝိုင်းခြင်းမရှိဘဲ လေးထောင့်ကွက်တိ (Rectangle) ကျသွားအောင် ဖန်တီးထားခြင်း။
* **Ed Sheeran - Perfect:** ဂိမ်းအောင်မြင်သွားပါက Ed Sheeran ရဲ့ နာမည်ကြီးသီချင်းဖြင့် အထူး Surprise ပြုလုပ်ပေးခြင်း။
* **Responsive Letter:** မည်သည့် Screen Size တွင်မဆို ကြည့်ကောင်းမည့် Valentine Letter Card ပါဝင်ခြင်း။

---

## 📂 Project Structure

```text
├── index.html            # ပင်မစာမျက်နှာ (Puzzle Game)
├── next.html             # Surprise Letter & Music စာမျက်နှာ
├── Perfect-Ed-Sheeran.mp3 # နောက်ခံတေးဂီတဖိုင်
├── images/
│   └── couples.png       # ပဟေဠိလုပ်မည့် ဓာတ်ပုံ
├── js/
│   ├── puzzle.js         # Core Game Logic
│   ├── constants.js      # Configuration များ
│   └── utils.js          # Helper Functions
└── css/
    ├── base.css          # Global Styles
    ├── game.css          # Puzzle Layout & Horizontal Scroll
    ├── surprise.css      # Surprise Card Styles
    └── animation.css     # Win Animations
