Lab transfer instructions

1) Copy this ZIP to the lab PC (USB or file share):
   - BOHOLST-APP-DEV.zip (created from the repo root)

2) On the lab PC, install Node.js 24.x
   - Recommended: nvm-windows or official installer: https://nodejs.org/
   - If using nvm-windows:
     - `nvm install 24`
     - `nvm use 24`

3) Unzip and run:
```powershell
Expand-Archive -Path BOHOLST-APP-DEV.zip -DestinationPath .\BOHOLST-APP-DEV
cd BOHOLST-APP-DEV
npm install
npm run build
npm start
# open http://localhost:3000 in the browser
```

4) Notes
- The deployed site is available at: https://boholst-portfolio.vercel.app
- If you need to deploy from the lab, create a NEW token in Vercel (https://vercel.com/account/tokens) from the lab machine. Do NOT reuse the token you exposed earlier.
- If you created a persistent `VERCEL_TOKEN` on this laptop, remove it before handing off:
  - `setx VERCEL_TOKEN ""` (Windows) and close terminals.

5) If you prefer to demo from Vercel (no setup required), just open the production URL above.
