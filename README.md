# React + TypeScript + Vite

This is a template for small React TS Vite projects. To be used in order to make kickstarting a project easier.

# Requirements

- Node 18+
- Docker
- pnpm

# Commands: 
To run dev version `pnpm run dev`
To build a new image `docker build -t <image_name> .`
To run the image `docker run -d --rm -p 8000:8000 <image_name>` (note that 8000 is just a suggested port).

# structure:
This repo is built with inspiration from atomic project strucutre, fit for small projects.  
- assets : contains static assets as fonts, images, etc...
- components : contains components grouped by order where atoms are the smallest, molcules are a group of atoms etc.
- lib : for reuseable code assets such as hooks, constans, types and helper function.
- pages : for app pages.
- routes : contains routing logic.