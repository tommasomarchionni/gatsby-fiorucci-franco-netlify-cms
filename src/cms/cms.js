import CMS from 'netlify-cms'

import GenericPagePreview from './preview-templates/GenericPagePreview'

// import my homemade widget
import { CustomPathImageControl, CustomPathImagePreview } from "./customPathImage.js";

// register it to be able tu use it in NetlifyCMS
CMS.registerWidget("custompathimage", CustomPathImageControl, CustomPathImagePreview);

CMS.registerPreviewStyle('/styles.css');
CMS.registerPreviewTemplate('pages', GenericPagePreview);
