# Deploying Your Angular Application

Now that we've built our A10Dance app, it's time to share it with the world! In this chapter, we'll deploy our application to Netlify, a popular hosting platform that offers an excellent free tier and seamless Angular support.

## Preparing for Production

Before we deploy, let's prepare our application:

1. Update `environment.prod.ts` with any production-specific settings
2. Run tests to ensure everything works: `ng test`
3. Check that all features work in development: `ng serve`

## Building for Production

Angular CLI makes it easy to create a production build:

```bash
ng build --configuration production
```

This command:
- Compiles your TypeScript code
- Minifies and bundles your JavaScript
- Optimizes your CSS
- Processes your assets
- Creates a `dist/a10dance` folder with deployment-ready files

## Deploying to Netlify

You have two options for deploying to Netlify:

### Option 1: Drag and Drop (Quick Start)

1. Create a free account at [netlify.com](https://www.netlify.com)
2. Navigate to the Netlify dashboard
3. Drag and drop your `dist/a10dance` folder onto the dashboard
4. Netlify will deploy your site and provide a URL

### Option 2: Netlify CLI (Recommended)

1. Install the Netlify CLI:
   ```bash
   npm install netlify-cli -g
   ```

2. Log in to your Netlify account:
   ```bash
   netlify login
   ```

3. Initialize your site:
   ```bash
   netlify init
   ```

4. Deploy your site:
   ```bash
   netlify deploy --prod
   ```

## Configuring Your Deployment

### Handling Angular Routes

Create a `_redirects` file in your `src` folder:

```
/* /index.html 200
```

Add this to `angular.json` under `architect.build.options.assets`:

```json
{
  "glob": "_redirects",
  "input": "src",
  "output": "/"
}
```

This ensures your Angular routes work correctly when users refresh or share links.

### Custom Domain (Optional)

1. In the Netlify dashboard, go to Site Settings > Domain Management
2. Click "Add custom domain"
3. Follow the instructions to configure your domain's DNS settings

## Updating Your Deployed App

When you make changes to your app:

1. Create a new production build:
   ```bash
   ng build --configuration production
   ```

2. If using the CLI:
   ```bash
   netlify deploy --prod
   ```
   
   Or drag and drop the new `dist/a10dance` folder to Netlify.

## Best Practices

1. Always test your production build locally before deploying
2. Use environment files for configuration
3. Check your console for errors after deployment
4. Test all routes and features on the deployed site
5. Consider setting up continuous deployment from your Git repository

## Troubleshooting

Common issues and solutions:

1. **Blank page after deployment**
   - Check that the `_redirects` file is properly configured
   - Verify your base href in `index.html`

2. **Assets not loading**
   - Ensure paths are relative
   - Check asset includes in `angular.json`

3. **Environment variables not working**
   - Rebuild with correct configuration
   - Verify environment file is included in build

## Next Steps

Now that your app is deployed, you might want to:
- Set up continuous deployment from GitHub
- Add a custom domain
- Configure SSL
- Set up form handling
- Add analytics

Congratulations! Your A10Dance app is now live and accessible to users worldwide!
