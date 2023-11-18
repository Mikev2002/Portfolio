const { test, expect } = require('@playwright/test');

test('Check Page Title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const title = await page.title();
  expect(title).toBe('Mike Villagomez | Web Developer');
});

test('Check Meta Description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const description = await page.locator('meta[name="description"]').getAttribute('content');
  expect(description).toBe('This is a meta description for my resume.');
});

// Add similar tests for other meta tags

// 1. Hero Section
test('Check Hero Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.hero')).toBeVisible();
});

test('Check Hero Section Heading', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.hero h1')).toHaveText('Web Developer bridging designs with functionality');
});

test('Check Hero Section Paragraph', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.hero p')).toHaveText('Crafting responsive and accessible web experiences');
});

test('Check Hero Section CTA Button', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.hero .cta-button')).toHaveText('View My Work');
});

// 2. About Me Section
test('Check About Me Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.about-me')).toBeVisible();
});

test('Check Profile Picture', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.about-me #profile-pic')).toHaveAttribute('alt', 'Mike Villagomez');
});

test('Check About Me Paragraph', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.about-me p')).toContainText('I am a proud Ecuadorian-American');
});

// 3. Portfolio Section
test('Check Portfolio Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#portfolio')).toBeVisible();
});

test('Check Portfolio Project Title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#portfolio .project h3')).toHaveText('Building a Webpage');
});

test('Check Portfolio Project Description', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#portfolio .project p')).toContainText('Be able to build a webpage using Bootstrap');
});

// 4. Testimonials Section
test('Check Testimonials Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.testimonials')).toBeVisible();
});

test('Check First Testimonial Text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const firstTestimonial = page.locator('.testimonials .testimonial-card').first();
  await expect(firstTestimonial).toContainText("Mike's ability to turn my vision");
});

test('Check Second Testimonial Text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const secondTestimonial = page.locator('.testimonials .testimonial-card').nth(1);
  await expect(secondTestimonial).toContainText('Working with Mike was a breeze');
});

// 5. Technical Skills Section
test('Check Skills Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.skills')).toBeVisible();
});

test('Check HTML Skill', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.skills .skill:has-text("HTML")')).toBeVisible();
});

test('Check CSS Skill', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('.skills .skill:has-text("CSS")')).toBeVisible();
});

// 6. Articles Section
test('Check Articles Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#articles')).toBeVisible();
});

test('Check First Article Title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const firstArticle = page.locator('#articles li').first();
  await expect(firstArticle.locator('h3')).toHaveText('The Evolution of Web Development');
});

test('Check Second Article Title', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const secondArticle = page.locator('#articles li').nth(1);
  await expect(secondArticle.locator('h3')).toHaveText('CSS Grid vs. Flexbox: When to Use Which');
});

// 7. Contact Section
test('Check Contact Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#contact')).toBeVisible();
});

test('Check Contact Email', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#contact a:has-text("villagomezmike5@gmail.com")')).toBeVisible();
});

test('Check Contact LinkedIn', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#contact a:has-text("Connect on LinkedIn")')).toBeVisible();
});

// 8. Subscription Section
test('Check Subscription Section Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#subscription')).toBeVisible();
});

test('Check Subscription Form', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('#subscription form')).toBeVisible();
});

// 9. Footer Section
test('Check Footer Visibility', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('footer')).toBeVisible();
});

test('Check Footer Content', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('footer')).toContainText('© 2023 Mike Villagomez | Designed with love by The Creator');
});
