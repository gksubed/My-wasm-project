(module
 (type $0 (func (param i32)))
 (memory $0 0)
 (export "applyGrayscale" (func $assembly/index/applyGrayscale))
 (export "memory" (memory $0))
 (func $assembly/index/applyGrayscale (param $0 i32)
  (local $1 i32)
  (local $2 i32)
  loop $for-loop|0
   local.get $0
   local.get $1
   i32.gt_s
   if
    local.get $1
    local.get $1
    i32.const 2
    i32.add
    i32.load8_u
    local.get $1
    i32.load8_u
    local.get $1
    i32.const 1
    i32.add
    i32.load8_u
    i32.add
    i32.add
    i32.const 3
    i32.div_u
    local.tee $2
    i32.store8
    local.get $1
    local.get $2
    i32.store8 offset=1
    local.get $1
    local.get $2
    i32.store8 offset=2
    local.get $1
    i32.const 4
    i32.add
    local.set $1
    br $for-loop|0
   end
  end
 )
)
