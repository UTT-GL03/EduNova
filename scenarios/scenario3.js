const visit = async (page) => {
    await page.goto('https://openclassrooms.com/fr/courses/6204541-initiez-vous-a-python-pour-lanalyse-de-donnees', {
        waitUntil: 'networkidle',
    });
    await page.waitForTimeout(10000);
    await page.scrollToEnd();
    await page.waitForNetworkIdle();
    await page.waitForTimeout(7000);
  };
  
  module.exports = visit;