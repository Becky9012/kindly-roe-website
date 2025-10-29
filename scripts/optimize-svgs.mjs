#!/usr/bin/env node

import { optimize } from 'svgo'
import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'

const svgoConfig = {
  plugins: [
    'preset-default',
    'removeDimensions',
    'removeViewBox',
    {
      name: 'addViewBox',
      type: 'visitor',
      params: {},
      fn() {
        return {
          element: {
            enter: (node, parentNode) => {
              if (node.name === 'svg' && !node.attributes.viewBox) {
                node.attributes.viewBox = '0 0 24 24'
              }
            }
          }
        }
      }
    }
  ]
}

function optimizeSvg(filePath) {
  try {
    const content = readFileSync(filePath, 'utf8')
    const result = optimize(content, { path: filePath, ...svgoConfig })
    
    if (result.data) {
      writeFileSync(filePath, result.data)
      console.log(`✓ Optimized: ${filePath}`)
      return true
    }
  } catch (error) {
    console.error(`✗ Error optimizing ${filePath}:`, error.message)
  }
  return false
}

function processDirectory(dirPath) {
  const items = readdirSync(dirPath)
  let optimizedCount = 0
  
  for (const item of items) {
    const fullPath = join(dirPath, item)
    const stat = statSync(fullPath)
    
    if (stat.isDirectory()) {
      optimizedCount += processDirectory(fullPath)
    } else if (extname(item) === '.svg') {
      if (optimizeSvg(fullPath)) {
        optimizedCount++
      }
    }
  }
  
  return optimizedCount
}

console.log('🎨 Optimizing SVG files...')
const optimizedCount = processDirectory('./src/assets')
console.log(`✨ Optimized ${optimizedCount} SVG files`)
