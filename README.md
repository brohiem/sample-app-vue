# Kontent.ai sample Vue.js single-page application

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb6d3394-1ee9-491d-949f-8e9d4740ff36/deploy-status)](https://app.netlify.com/sites/kontent-sample-app-vue/deploys)
[![Live Demo](https://img.shields.io/badge/live-demo-brightgreen.svg)](https://kontent-sample-app-vue.netlify.app/)
[![Stack Overflow](https://img.shields.io/badge/Stack%20Overflow-ASK%20NOW-FE7A16.svg?logo=stackoverflow&logoColor=white)](https://stackoverflow.com/tags/kontent-ai)
[![Discord](https://img.shields.io/discord/821885171984891914?label=Discord&logo=Discord&logoColor=white)](https://discord.gg/SKCxwPtevJ)

This is a sample website written in JavaScript utilizing the Kontent.ai Delivery API to retrieve content. You can register your account for free at <https://app.kontent.ai>.

## Application setup

1. Install the latest version of NodeJS and npm. You can download both at <https://nodejs.org/en/download/>.
2. Clone the sample application repository.
3. Navigate to the root folder of the application in the command line.
4. Type `npm install` to install required npm packages.
5. Type `npm run serve` to start a development server.
6. The application opens in your browser at <http://localhost:8080>.

### Data origin

This sample wants to showcase either loading content from Kontent.ai as well as loading some part of the site from static JSON resources.

> Basically, the content that you can't find in the [`Localization`](https://github.com/kontent-ai/sample-app-vue/tree/master/src/Localization) folder is loaded from Kontent.ai.

* The data provided from [`Localization`](https://github.com/kontent-ai/kontent-sample-app-vue/tree/master/src/Localization) are using the `vue-i18n` plugin, so every call in components using `$t('KEYWORD')` in components is loading data from these JSONs as "Banner" section" ([component here](https://github.com/kontent-ai/kontent-sample-app-vue/blob/master/src/components/Banner.vue#L6))

### Data fetching

This solution fetches data using the [Delivery client](https://github.com/kontent-ai/delivery-sdk-js). For more implementation detail on how to set up the client see [src/Client.js](https://github.com/kontent-ai/sample-app-vue/blob/master/src/Client.js). After your client is set up, you are able to deliver your content to your project. The following example showcases how to use a Kontent.ai delivery client to fetch data.

```js
fetchBrewer: function () {
  var query = Client.items()
    .type('brewer')
    .equalsFilter('url_pattern', this.$route.params.brewerSlug)

  if(this.language) {
    query.languageParameter(this.language)
  }

  query
    .toPromise()
    .then(response => {
      // store data to the state variable of your component.
      this.brewer = response.data.items[0]
    }
}
```

### Language fallbacks

To deal with content that is not available in the current language, this project uses a method called language fallbacks. It will fetch the content in the language set as a fallback language in the Kontent.ai project and redirect the website to the URL with a prefix of the given language. However, it is possible to disable language fallbacks by adding a filter of `system.language` to your query. For more information about getting localized content check this [`link.`](https://kontent.ai/learn/tutorials/develop-apps/get-content/localized-content-items/?tech=javascript)

```js
var query = Client.items().type('about_us');

if (this.language) {
    query
    .languageParameter(this.language)
    .equalsFilter('system.language', 'es-ES');
}
```

## Connecting to your sample project

On the first run of the app, you'll be presented with a configuration page. It will allow you to connect the app to your Kontent.ai sample project or create a new one. You'll also be able to start a trial and convert to a developer plan when the trial expires.

> If you want to open the configuration page after the project is already connected to the app. Just open the URL <http://localhost:8080/Admin/Configuration>.

Alternatively, you can connect your project manually as per the chapter below.

### Connecting to your project manually

If you want to change the source Kontent.ai project, follow these steps:

1. In Kontent.ai, choose Project settings from the app menu.
2. Under Production environment settings, choose API keys.
3. Copy your Project ID.
4. Create and open a `.env.local` file in the sample application folder.
5. On the first line, add your Project ID constant using the format `VUE_APP_PROJECT_ID=00000000-0000-0000-0000-000000000000`.
6. Save the file.

When you now run the application, it will retrieve the content from your sample project. This setup has a higher priority than [setting your sample project via the Configuration page](#connecting-to-your-sample-project).

### Previewing content from your project

To preview unpublished content in the sample application, follow these steps:

1. In Kontent.ai, choose Project settings from the app menu.
2. Under Production environment settings, choose API keys.
3. Copy your Project ID and Preview API key.
4. Create and open a `.env.local` file in the sample application folder.
5. On the first line, add your Project ID constant using the format `VUE_APP_PROJECT_ID=00000000-0000-0000-0000-000000000000`.
6. On the next line, add your Preview API key using the format `VUE_APP_PREVIEW_API_KEY=00000000-0000-0000-0000-000000000000`.
7. Save the file.

When you now run the application, you will see all project content including the unpublished version of content items.

## Content administration

1. Navigate to <https://app.kontent.ai> in your browser.
2. Sign in with your credentials.
3. Manage content in the content administration interface of your sample project.

You can learn [more about content editing](https://kontent.ai/learn/tutorials/write-and-collaborate/create-content/introducing-content-items) at Kontent.ai Learn.

## Content delivery

You can retrieve content either through the Kontent.ai Delivery SDKs or the Kontent.ai Delivery API:

* For published content, use `https://deliver.kontent.ai/PROJECT_ID/items`.
* For unpublished content, use `https://preview-deliver.kontent.ai/PROJECT_ID/items`.

For more info about the API, see the [API reference](hhttps://kontent.ai/learn/reference/kontent-apis-overview/).

You can find the Delivery and other SDKs at <https://github.com/kontent-ai>.

## Deployment

You can use, for example, [surge](http://surge.sh/) to deploy your app live. Check out the step-by-step guide on our [blog](https://kontent.ai/blog/3-steps-to-rapidly-deploy-headless-single-page-app).

## Lessons Learned

1. __How would a customer implement 3rd party search capabilities to a Kontent by Kentico project?__<br>
    
    One example would be Algolia<br>
    - Algolia (https://kontent.ai/blog/searching-content-kentico-kontent-algolia-integration/)
    
    Steps: 
      1) Need the data to be indexed in JSON format
      2) Import & Index data in Algolia
      3) Add SDK to client  
      4) Call the index with the app id and search bar parameters

2. __How would a customer implement personalization/analytics (tracking) capabilities?__
    
    One example would be Google Analytics<br>
    - GA (https://kontent.ai/learn/tutorials/develop-apps/integrate/google-analytics/)

3. __What is JAMstack, and what are the pros and cons of SSG?__<br>
  
    The JAMstack = JavaScript, API's, Markup<br>
    SSG = Static Site Generators

    **Pros**:
          
          • Limiting the number of moving pieces required to deliver that app
          • Exposing fewer attack surfaces for bad actors
          • Providing an app that will infinitely scale, suffering from less downtime
          • Delivering the website fast as its mostly static files
          • Spending less money on hosting
          
    **Cons**:
      
          • You need multiple tools and services to accomplish the same result you would get with a coupled solution (e.g. WP, Drupal)
          • You’ll also need to think about your frontend and your backend separately since those are decoupled.

4. __What is a "headless CMS" and what are some of its advantages and disadvantages?__

    **Pros**:
      
        • Omnichannel Architecture  - Headless CMS provides the capabilities to deliver engaging content with consistency at all touch points.
        • Higher Flexibility        - Headless CMS offers the freedom to build your frontend with whatever language, framework, or tool you want. As Headless CMS is API-driven, it lets you choose what fits your business.
        • Cost-Effective            - Users can directly access CMS and start building mini-sites or pages when required. Thus it reduces the overall costs for development.
        • Enhanced Security         - The presentation layer is not connected to the database, users do not have to worry about the security issues of one layer affecting the other. (e.g. WP)
        • Easily Scalable           - The hosting options and deployment environment in Headless CMS are infinite.
        • Focus on Business         - You don't have to manage the web sites and plugins anymore.  You can focus on delivering quality content to your consumers.
        
    **Cons**:
      
        * Same as with SSG
        • You need multiple tools and services to accomplish the same result you would get with a coupled solution (e.g. WP, Drupal)
        • You’ll also need to think about your frontend and your backend separately since those are decoupled.

5. __Explain the differences between a Content Type, Content Item, and Content Item Variant...__<br>
    Content Type: This would be the type of content such as an Article or Blog post.<br>
    Content Item: This would be the article itself, composed of parts such as the title, summary, body, slug, etc.<br>
    Content Item Variant: Variants are localized versions of content items.

6. __What is the difference between a Linked Item and a Component in Kontent by Kentico?__<br>
    A linked item lets you define relationships between your content.  Where as a Component is a single-use piece of content added to a rich text element.<br>
    From the manual... For content that doesn't need to be reused in multiple places, we recommend you use content components.

7. __What is the difference between the Delivery API and Management API and how would you use them in a real project?__<br>
    These are two different API's designed and built for 2 different purposes. The names self explanitory.  One is for adding and editing content the other is purely for reading the content.

8. __What is the Preview Delivery API and when would you use it?__<br>
    It provides access to un-published content. This is valuable to access during the editing and approval cycle.
