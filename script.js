* { margin: 0; padding: 0; box-sizing: border-box; }

/* 3D वॉलपेपर बैकग्राउंड (पूरी साइट पर) */
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(45deg, #0f0c29, #302b63, #24243e);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
    color: white;
    min-height: 100vh;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

/* हैडर */
header {
    background: rgba(0,0,0,0.7);
    backdrop-filter: blur(10px);
    display: flex; justify-content: space-between;
    align-items: center; padding: 15px 50px;
    position: sticky; top: 0; z-index: 100;
}
.logo { font-size: 24px; font-weight: bold; text-shadow: 0 0 10px #00ffff; }
nav a {
    color: white; text-decoration: none;
    margin-left: 20px; cursor: pointer;
    transition: 0.3s;
}
nav a:hover { color: #00ffff; text-shadow: 0 0 10px #00ffff; }

/* सेक्शन */
.section { display: none; padding: 40px 50px; animation: fadeIn 0.5s; }
.section.active { display: block; }
@keyframes fadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }

/* हीरो */
.hero {
    text-align: center; padding: 100px 20px;
    background: rgba(255,255,255,0.1); backdrop-filter: blur(15px);
    border-radius: 20px; border: 1px solid rgba(255,255,255,0.2);
    box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
}
.hero h1 { font-size: 40px; margin-bottom: 20px; text-shadow: 0 0 20px #ff00ff; }
.hero button {
    padding: 12px 30px; font-size: 18px;
    background: linear-gradient(135deg, #00ffff, #ff00ff);
    color: white; border: none; border-radius: 30px;
    cursor: pointer; transition: 0.3s; box-shadow: 0 0 20px #00ffff;
}
.hero button:hover { transform: scale(1.1); }

/* प्रोडक्ट ग्रिड */
.product-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px; margin-top: 30px;
}
.product-card {
    background: rgba(255,255,255,0.1); backdrop-filter: blur(10px);
    border-radius: 15px; padding: 20px; text-align: center;
    border: 1px solid rgba(255,255,255,0.2);
    transition: transform 0.3s;
}
.product-card:hover { transform: translateY(-10px); }
.product-card img {
    width: 150px; height: 150px; object-fit: cover;
    border-radius: 10px; border: 2px solid #00ffff;
}
.product-card h3 { margin: 10px 0; }
.product-card .price { color: #ff00ff; font-size: 20px; font-weight: bold; }
.product-card button {
    padding: 8px 20px; background: linear-gradient(135deg, #00ffff, #ff00ff);
    color: white; border: none; border-radius: 20px; cursor: pointer;
    margin-top: 10px; transition: 0.3s;
}
.product-card button:hover { box-shadow: 0 0 15px #00ffff; }

/* कार्ट */
#cart-items { margin: 20px 0; }
.cart-item {
    display: flex; justify-content: space-between;
    align-items: center; background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px); padding: 15px; margin-bottom: 10px;
    border-radius: 10px; border: 1px solid rgba(255,255,255,0.2);
}
.cart-item button {
    background: #ff00ff; color: white;
    border: none; padding: 5px 10px; cursor: pointer; border-radius: 5px;
}
#cart-total { font-size: 22px; font-weight: bold; text-align: right; margin: 20px 0; }
#checkout-btn {
    padding: 12px 30px; background: linear-gradient(135deg, #00ffff, #ff00ff);
    color: white; border: none; border-radius: 30px; cursor: pointer; font-size: 18px;
    transition: 0.3s;
}
#checkout-btn:hover { box-shadow: 0 0 20px #ff00ff; }

/* मोडल */
.modal {
    display: none; position: fixed; top: 0; left: 0;
    width: 100%; height: 100%; background: rgba(0,0,0,0.5);
    backdrop-filter: blur(5px); z-index: 1000;
}
.modal-content {
    background: rgba(255,255,255,0.1); backdrop-filter: blur(15px);
    padding: 30px; width: 400px; margin: 100px auto;
    border-radius: 15px; position: relative; border: 1px solid rgba(255,255,255,0.2);
    color: white;
}
.modal-content input {
    width: 100%; padding: 10px; margin: 10px 0;
    border: none; border-radius: 8px; background: rgba(255,255,255,0.2);
    color: white;
}
.modal-content button {
    width: 100%; padding: 12px; background: linear-gradient(135deg, #00ffff, #ff00ff);
    color: white; border: none; border-radius: 30px; cursor: pointer;
}
.close { position: absolute; top: 10px; right: 15px; font-size: 24px; cursor: pointer; }
