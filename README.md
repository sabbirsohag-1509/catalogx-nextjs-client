# CatalogX

## Short Project Description
**CatalogX** is a modern, responsive e-commerce platform built using **Next.js**. It provides users with a seamless shopping experience to explore curated products, view detailed item information, and interact with a professional catalog interface. The project leverages modern React technologies and libraries to deliver high performance, interactivity, and a visually appealing design.

The platform features:
- Product listings with discounts
- Detailed product view with image gallery
- Infinite scroll for products
- Blog section for tech and product information

It is fully responsive and optimized for both desktop and mobile devices.

---

## Route Summary

| Route | Description | Protected? |
|-------|------------|------------|
| `/` | Landing page with hero slider and featured products | No |
| `/items` | Catalog listing page with grid layout, discounts, and infinite scroll | No |
| `/items/[id]` | Product detail page with gallery, modal, discount calculation, and Add to Cart button | No |
| `/blogs` | Blog page with informational articles
| `/login` | Login page (mock authentication)
| `/add-items` | Add new products (protected route) |

---

## List of Implemented Features

- **Responsive Landing Page**  
  Hero slider with coverflow effect, autoplay, and overlay text. Call-to-action buttons link users to the catalog.

- **Product Listing Page**  
  Displays all products in a responsive grid layout with discount ribbons, price calculation, and Add to Cart buttons.

- **Product Detail Page**  
  Detailed product info including:
  - Main image with thumbnail gallery
  - Modal image preview on click
  - Discount price calculation and line-through original price
  - Add to Cart functionality

- **Infinite Scroll**  
  Products load dynamically as the user scrolls down. Implemented using **React Query** and backend pagination.

- **Blog Page**  
  Informational static content enhanced with **React Icons** for headings and improved readability.

- **Authentication**  
  Mock login system with hardcoded credentials. Protected routes handled via cookies in Next.js.

- **Responsive & Interactive UI**  
  Smooth hover effects, buttons, badges, and responsive layout using **Tailwind CSS** and **DaisyUI**.

---

## Brief Explanation of Features

1. **Hero Slider**  
   Implemented using **Swiper.js** with coverflow effect, autoplay, and pagination. Each slide has overlay text and a "Shop Now" button.

2. **Product Listing & Filtering**  
   Uses **React Query** for fetching product data from the backend API. Supports infinite scrolling and displays discount ribbons, price badges, and responsive grids.

3. **View Details Page**  
   Provides detailed view of a product, including main image, thumbnails, modal image viewer, discount calculations, description, and Add to Cart functionality.

4. **Infinite Scroll**  
   Backend supports pagination via `page` and `limit` query parameters. Frontend fetches additional pages automatically as the user scrolls.

5. **Blog Page**  
   Scrollable content with multiple articles. Each blog heading uses **React Icons** for enhanced styling.

6. **Authentication & Protected Routes**  
   Login implemented with **react-hook-form** and protected dashboard routes are handled via cookies and conditional rendering.

---

## Libraries & Tools Used

- **Next.js** – React framework for server-side rendering and routing  
- **Axios** – For making API requests  
- **@tanstack/react-query** – Efficient data fetching, caching, and infinite scroll handling  
- **react-hook-form** – Easy-to-use form handling for login and other forms  
- **SweetAlert2** – Beautiful alerts and confirmation dialogs  
- **React Icons** – Vector icons for buttons, badges, and headings  
- **Tailwind CSS & DaisyUI** – Utility-first CSS framework with prebuilt UI components for responsive design  

---
Live Link:
GitHub Repository: 

- **Login Credentials**
Admin: 
Pass:

All Credits Reserved Sabbir Hossain Sohag (2026)
