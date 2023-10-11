import {Given,When,Then, setDefaultTimeout} from "@cucumber/cucumber";
import {expect} from "@playwright/test";
import { pageFixture } from "../../hooks/pageFixture";

setDefaultTimeout(2*60*1000);


      Given('Launch the url of fingress',async function () {
        await pageFixture.page.goto('http://192.168.1.49:8086');
      });
      Given('Click the menu option', async function () {
        await pageFixture.page.locator("text='view_comfy'").waitFor({state:"visible"});
        await pageFixture.page.locator("text='view_comfy'").click();
      });
      Given('Click the fingress explorer',async function () {
        await pageFixture.page.locator("text='Fingress Explorer'").waitFor({state:"visible"});
        await pageFixture.page.locator("text='Fingress Explorer'").click();
      });
      Given('Click the List pages option',async function () {
        await pageFixture.page.locator("text='   List Pages   '").click();
      });
      When('Click on the tabular option',async function () {
        await pageFixture.page.locator("text='Tabular'").click();
      });
      Then('It should contain the valid url',async function () {
       await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/02d3c622-00d9-4c90-a1ac-82dbed96c655/44b4eb67-f5b8-482b-934f-a03d7f8796be");       
      });
      When('Click on the list view option', async function () {
        await pageFixture.page.locator("text='List View'").click();
      });
      Then('List view page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/7618c0a1-9446-4c04-a00e-6634352f6111/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the Calendar option', async function () {
        await pageFixture.page.locator("text='Calendar View'").click();
      });
      Then('Calendar page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/63e26856-1183-40ac-b143-cf1d7b68f53f/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the Master Details option', async function () {
        await pageFixture.page.locator("text='Master Detail'").click();
      });
      Then('Master Details page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/1c87e5c3-9e88-4e5b-87e8-2c7f63c28169/44b4eb67-f5b8-482b-934f-a03d7f8796be/detail/be760656-b999-4a42-bd20-5276c0f9f9e6");        
      });
      When('Click on the Kanban option', async function () {
        await pageFixture.page.locator("text='Kanban'").click();
      });
      Then('Kanban page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/7c33373a-c651-4579-a1f6-8d0bc948261c/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the Card View option', async function () {
        await pageFixture.page.locator("text='Card View'").click();
      });
      Then('Card View page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/d5433e86-bf3b-4b99-aa56-4384556af004/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the All List view option', async function () {
        await pageFixture.page.locator("text='All List Views'").click();
      });
      Then('All List view page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/31417bfe-415e-4e24-9652-cd0dbce567b3/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the Time line view option', async function () {
        await pageFixture.page.locator("text='Timeline View'").click();
      });
      Then('Time line view page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgPage/573577fd-31e0-48b0-b704-51c1438536e8/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });
      When('Click on the Tree view option', async function () {
        await pageFixture.page.locator("text='Tree View'").click();
      });
      Then('Tree view page should contain the valid url', async function () {
        await expect(pageFixture.page).toHaveURL("http://192.168.1.49:8086/fgRequestList/d0132b1b-6f00-4227-8b84-2f7a1c0d9d35/44b4eb67-f5b8-482b-934f-a03d7f8796be");        
      });



