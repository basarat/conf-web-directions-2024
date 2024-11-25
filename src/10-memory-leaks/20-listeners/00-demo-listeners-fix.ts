import { handlers, Handler } from "./utils";

const listeners: Handler[] = [];
function addEventListener(callback: Handler) {
  listeners.push(callback);
  console.log("listener added");
  return callback;
}

function removeEventListener(callback: Handler) {
  const index = listeners.indexOf(callback);
  if (index > -1) {
    listeners.splice(index, 1);
    console.log("listener removed");
  }
}

let fn;

// onPaintToolClick
if (fn) removeEventListener(fn);
fn = addEventListener(handlers.onMove);

// onPaintToolClick
if (fn) removeEventListener(fn);
fn = addEventListener(handlers.onMove);

// onPaintToolClick
if (fn) removeEventListener(fn);
fn = addEventListener(handlers.onMove);

// onPaintToolClick
if (fn) removeEventListener(fn);
fn = addEventListener(handlers.onMove);
