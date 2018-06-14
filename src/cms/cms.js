import CMS from 'netlify-cms';

// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from './customPathImage.js';

import GenericPagePreview from './preview-templates/GenericPagePreview';
import ThemePagePreview from './preview-templates/ThemePagePreview';
import NotFoundPagePreview from './preview-templates/NotFoundPagePreview';
import ThankYouPagePreview from './preview-templates/ThankYouPagePreview';

// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);

// set production style
CMS.registerPreviewStyle('/styles.css');

CMS.registerPreviewTemplate('pages', GenericPagePreview);
CMS.registerPreviewTemplate('themes', ThemePagePreview);
CMS.registerPreviewTemplate('notfound', NotFoundPagePreview);
CMS.registerPreviewTemplate('thankyou', ThankYouPagePreview);
