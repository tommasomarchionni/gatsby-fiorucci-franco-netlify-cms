import CMS from 'netlify-cms'

import GenericPagePreview from './preview-templates/GenericPagePreview'

// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from './customPathImage.js';

import ThemePagePreview from './preview-templates/ThemePagePreview';
import NotFoundPagePreview from './preview-templates/NotFoundPagePreview';

// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);

// set production style
CMS.registerPreviewStyle('/styles.css');

CMS.registerPreviewTemplate('pages', GenericPagePreview);
CMS.registerPreviewTemplate('themes', ThemePagePreview);
CMS.registerPreviewTemplate('notfound', NotFoundPagePreview);
