import { type IContentItem, type Elements } from '@kontent-ai/delivery-sdk';
import { type GuidelinesForContentCreators } from '../content-type-snippets/guidelines_for_content_creators';
import { type Metadata } from '../content-type-snippets/metadata';
import { type Sitemap } from '../taxonomies/sitemap_538125f';

/**
 * Generated by '@kontent-ai/model-generator@5.8.0'
 *
 * Home
 * Id: a29399c3-5281-47ab-9916-acd4a6f887b7
 * Codename: home
 */
export type Home = IContentItem<{
  /**
   * Articles (modular_content)
   * Required: false
   * Id: 222f3a69-a54f-3e92-83ac-05f8a08e667f
   * Codename: articles
   *
   * Assign all articles which should be displayed on the home page.
   */
  articles: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Cafes (modular_content)
   * Required: false
   * Id: 6356c948-0fd6-00d0-8fc1-e2484180ae7c
   * Codename: cafes
   *
   * Assign 4 Cafes which will be displayed on the home page.
   */
  cafes: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Contact (rich_text)
   * Required: false
   * Id: ee854076-236b-5312-0ed5-8c3cd55ca9e0
   * Codename: contact
   *
   * Add Contact us information to be displayed on the home page.
   */
  contact: Elements.RichTextElement;

  /**
   * Hero unit (modular_content)
   * Required: false
   * Id: 2b15a8f3-2e5f-7d01-4d8e-5b22e222aa76
   * Codename: hero_unit
   *
   * Assign 1 Hero unit that has been prepared for a home page.
   */
  heroUnit: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Our story (modular_content)
   * Required: false
   * Id: 617bccc0-4844-4beb-4ede-6247e954633a
   * Codename: our_story
   *
   * Assign 1 Fact about us which will be displayed on the home page.
   */
  ourStory: Elements.LinkedItemsElement<IContentItem>;

  /**
   * Sitemap (taxonomy)
   * Required: false
   * Id: ea3bf3c2-7eb7-4c91-aff3-09f89c743710
   * Codename: sitemap
   */
  sitemap: Elements.TaxonomyElement<Sitemap>;

  /**
   * URL pattern (url_slug)
   * Required: false
   * Id: dd70db4b-ee97-5ab4-b752-4f9d70389426
   * Codename: url_pattern
   *
   * Provide a SEO-friendly URL.
   */
  urlPattern: Elements.UrlSlugElement;
}> &
  GuidelinesForContentCreators &
  Metadata;
