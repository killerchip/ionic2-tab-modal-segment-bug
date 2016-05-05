This code demonstrates an issue with 'Tabs' template, modal window and segments.

Issue description: When you pop-up a modal from a 'tab' and close it, then the ion-segment does not work.

App description:
- Typical Tabs template with 3 pages
- The 'Tab 1' page has a ion-segment component.
- Tab 2 from the 'tabs' is not navigating to page, but pops up a modal.

How to replicate the issue:
- Navigate to 'Tab 1'
- Play around with the ion-segments
- Click on 'Tab 2'. Modal opens.
- Close the modal with 'Close' button
- The ion-segments do not work. The ion-segments contents do not update


