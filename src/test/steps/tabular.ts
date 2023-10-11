import {Given,Then,When} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";


let count: number,count1: number;
  Given('Click on the reference filter', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(0).click();
  });
  
  Given('Enter the valid the input', async function () {
    await pageFixture.page.locator('input[name="REFERENCE_ID"]').fill("INV20231009550683");
  });
  When('Click on the Search box', async function () {
    await pageFixture.page.locator('text="Search"').click();
  });
  Then('The required row should be displayed', async function () {
     await pageFixture.page.waitForLoadState('networkidle');
     expect((await pageFixture.page.locator('tr[mat-row]').all()).length).toBe(1);
  });
  When('Click on the clear', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(0).click();
    await pageFixture.page.locator("text='Clear'").click();
  });
  Then('The page should be normal', async function () {
    await pageFixture.page.waitForLoadState('networkidle');
    expect((await pageFixture.page.locator('tr[mat-row]').all()).length).not.toBe(1);
  });

  Given('Click on the customer reference filter', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(1).click();
  });
  Given('Enter the valid the customer reference', async function () {
    await pageFixture.page.locator('input[name="CUSTOMER_REFERENCE"]').fill("CRN1000265");
  });
  When('Click on the clear of customer reference', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(1).click();
    await pageFixture.page.locator("text='Clear'").click();
  });
  Given('Click on the stage filter', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(2).click();
  });
  Given('Enter the valid the stage state', async function () {
    await pageFixture.page.locator('input[name="STAGE_CODE"]').fill("INITIATION");
  });
  Then('Get the count of displayed rows', async function () {
    await pageFixture.page.locator('tr[mat-row]').nth(0).waitFor({state:"visible"});
    const rows = await pageFixture.page.locator('tr[mat-row]').all();
    count = rows.length;
    console.log(count);
  });
  When('Click on the clear of stage', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(2).click();
    await pageFixture.page.locator("text='Clear'").click();
  });
  Then('get the count of normal page', async function () {
    await pageFixture.page.locator('tr[mat-row]').nth(0).waitFor({state:"visible"});
    const rows = await pageFixture.page.locator('tr[mat-row]').all();
    count1 = rows.length;
    console.log(count1);
    expect(count1).not.toBe(count);
  });
  Given('Click on the status filter', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(3).click();
  });
  Given('Enter the valid the status', async function () {
    await pageFixture.page.locator('input[name="STATUS_CODE"]').fill("PENDING");
  });
  When('Click on the clear of status', async function () {
    await pageFixture.page.locator("span[class*='filter']").nth(3).click();
    await pageFixture.page.locator("text='Clear'").click();
  });
