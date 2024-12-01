# Material Tailwind with Blazor

Learn how to setup and install @material-tailwind/html with Blazor Web App.

## Installation

First, create a new Blazor Web App project using the .NET CLI:

```bash
dotnet new blazor -n BlazorMaterial
cd BlazorMaterial
```

## Project Structure

The Blazor Web App will have the following structure:

```
BlazorMaterial/
├── Components/
│   ├── App.razor
│   ├── Layout/
│   │   └── MainLayout.razor
│   └── Pages/
│       └── Home.razor
├── wwwroot/
│   ├── css/
│   │   └── input.css
│   └── ...
└── Program.cs
└── ...
```

## Setting up Tailwind CSS

ensure that you’re still in the BlazorMaterial Directory then run this command in your terminal:

1. Initialize your project as an npm package:

```bash
npm init -y
```

2. Install Tailwind CSS and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

3. Create a `postcss.config.js` file:

```javascript
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

4. Update your `tailwind.config.js`:

```javascript
import withMT from "@material-tailwind/html/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
    content: ["./**/*.{razor,html,cshtml}"],
    theme: {
        extend: {},
    },
    plugins: [],
});
```

5. Create a new CSS file at `wwwroot/css/input.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

## Installing Material Tailwind

Install @material-tailwind/html using your preferred package manager:

### NPM
```bash
npm i @material-tailwind/html
```

### Yarn
```bash
yarn add @material-tailwind/html
```

### PNPM
```bash
pnpm i @material-tailwind/html
```

## Ripple Effect

Add the ripple effect script to your `App.razor`:

```html
<!-- from node_modules -->
<script async src="node_modules/@@material-tailwind/html/scripts/ripple.js"></script>
<!-- from cdn -->
<script async src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
```

## Example Usage

Here's an example of using Material Tailwind components in your Blazor components:

```razor
<button type="button"
        data-ripple-light="true"
        class="align-middle select-none font-sans font-bold text-center uppercase transition-all 
               disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 
               px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 
               hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] 
               focus:shadow-none active:opacity-[0.85] active:shadow-none">
    Button
</button>
```

## Running the Application

To run your Blazor application with Material Tailwind:

1. Start the Tailwind CSS build process:
```bash
npx tailwindcss -i ./wwwroot/css/input.css -o ./wwwroot/css/output.css --watch
```

2. Run the Blazor application:
```bash
dotnet watch run
```

Your Blazor Web App with Material Tailwind is now ready to use!
