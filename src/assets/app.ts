import TimeAgo from 'javascript-time-ago'

import {
  canonical, // '1 second ago', '2 minutes ago', …
} from 'javascript-time-ago/gradation'

 
// Load locale-specific relative date/time formatting rules.
import en from 'javascript-time-ago/locale/en'
 
// Add locale-specific relative date/time formatting rules.
TimeAgo.addLocale(en)
 
// Create relative date/time formatter.
const timeAgo = new TimeAgo('en-US')

const date = new Date();

setInterval(() => {
    const footerText = `You loaded this page: ${timeAgo.format(date, { gradation: canonical })}`
    document.getElementById('footer').innerText = footerText;
}, 1000)
 