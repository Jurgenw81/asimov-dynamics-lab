# Asimov Dynamics Lab

An interactive, browser-based MuJoCo workbench for the open-source Asimov v0 biped from Menlo Research. The simulation runs entirely in the browser through MuJoCo WebAssembly; no Python installation or backend server is required.

## Live demo

The GitHub Pages deployment is available at:

https://jurgenw81.github.io/asimov-dynamics-lab/

## What you can test

- Command all 12 powered leg joints with live sliders.
- Select any of the 15 robot bodies by clicking the model or using the body selector.
- Inspect a body's mass, parent, and live position through the page API or WebMCP.
- Apply directional force pulses to any selected body and see delivered impulse.
- Change ground friction from ice-like to high-grip conditions.
- Monitor pelvis height, tilt, contacts, simulation time, and fall detection.
- Orbit and zoom the live 3D MuJoCo model.

## ChatGPT / WebMCP

Open the live page in ChatGPT's built-in browser. The page registers these site tools:

- `asimov_get_state`
- `asimov_list_bodies`
- `asimov_get_body_info`
- `asimov_select_body`
- `asimov_reset`
- `asimov_set_joint`
- `asimov_set_friction`
- `asimov_push`

For example, ask: “Select the left knee, bend it to 0.5 radians, set friction to 0.25, push the pelvis with 60 N in +X for 0.2 seconds, and report whether it fell.”

WebMCP support depends on the browser/client exposing `document.modelContext` or `navigator.modelContext`. The normal on-page controls work in current desktop browsers without WebMCP.

## Run locally

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open the local address printed by Vite. To test the production build:

```bash
npm run build
npm run preview
```

## Deploy

Push to the `main` branch. The workflow in `.github/workflows/pages.yml` builds the Vite app and deploys `dist/` to GitHub Pages automatically.

## Attribution and license

The Asimov v0 MJCF and mesh assets originate from [Menlo Research / Asimov](https://github.com/asimovinc/asimov-v0) and are licensed under CERN Open Hardware Licence Version 2 – Strongly Reciprocal (CERN-OHL-S-2.0). See `LICENSE.txt` and `NOTICE.md`.

The browser adaptation modifies the simulation source by changing the MJCF mesh directory for static hosting and adds a MuJoCo WASM UI and WebMCP interface. These modifications are made available in this repository under the same CERN-OHL-S-2.0 terms.
