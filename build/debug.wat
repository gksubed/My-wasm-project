(module
 (type $0 (func (param i32)))
 (global $~lib/memory/__data_end i32 (i32.const 8))
 (global $~lib/memory/__stack_pointer (mut i32) (i32.const 32776))
 (global $~lib/memory/__heap_base i32 (i32.const 32776))
 (memory $0 0)
 (table $0 1 1 funcref)
 (elem $0 (i32.const 1))
 (export "applyGrayscale" (func $assembly/index/applyGrayscale))
 (export "memory" (memory $0))
 (func $assembly/index/applyGrayscale (param $length i32)
  (local $i i32)
  (local $r i32)
  (local $g i32)
  (local $b i32)
  (local $avg i32)
  i32.const 0
  local.set $i
  loop $for-loop|0
   local.get $i
   local.get $length
   i32.lt_s
   if
    local.get $i
    i32.load8_u
    local.set $r
    local.get $i
    i32.const 1
    i32.add
    i32.load8_u
    local.set $g
    local.get $i
    i32.const 2
    i32.add
    i32.load8_u
    local.set $b
    local.get $r
    local.get $g
    i32.add
    local.get $b
    i32.add
    i32.const 3
    i32.div_u
    local.set $avg
    local.get $i
    local.get $avg
    i32.store8
    local.get $i
    i32.const 1
    i32.add
    local.get $avg
    i32.store8
    local.get $i
    i32.const 2
    i32.add
    local.get $avg
    i32.store8
    local.get $i
    i32.const 4
    i32.add
    local.set $i
    br $for-loop|0
   end
  end
 )
)
