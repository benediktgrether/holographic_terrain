// vite.config.js
import glsl from 'vite-plugin-glsl';
import glslify from 'vite-plugin-glslify'
import { defineConfig } from 'vite';
import vitePluginString from 'vite-plugin-string'

export default defineConfig({
  plugins: [
    glsl(
      exclude = undefined,                         // RegExp | RegExp[] of file paths/extentions to ignore
      include = /\.(glsl|wgsl|vert|frag|vs|fs)$/i, // RegExp | RegExp[] of file paths/extentions to import
      defaultExtension = 'glsl'                    // Shader import suffix when no extension is specified
    ),
    // glslify()
  ]
});