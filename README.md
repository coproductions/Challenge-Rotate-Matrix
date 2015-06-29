Matrix Rotator
===========

Write the **rotate** method of the **MatrixRotator** class that accepts one argument, **direction**.
**rotate** must set the object's **matrix** property with a new, rotated matrix.

Rotating a matrix clockwise will rotate every element to it's clockwise position.

example matrix rotation:
original
```
a b c
d e f
g h i
```

rotated clockwise (_CW_)
```
g d a
h e b
i f c
```

rotated clockwise (_CW_) once more
```
i h g
f e d
c b a
```

## Advanced Implementation

`MatrixRotator.rotate` will accept an optional second argument.

The default (omitting the second argument) is to maintain the original rotating behavior (rotate all layers).

The second argument will determine which 'layer' will be rotated.

A layer is the set of elements belonging to the same distance from the center.

Example, the values are what 'layer' that position belongs to:

```
3 3 3 3 3 3
3 2 2 2 2 3
3 2 1 1 2 3
3 2 1 1 2 3
3 2 2 2 2 3
3 3 3 3 3 3
```

If the second argument is set, only that layer should be rotated.

If the second argument is a value below `1` or greater than `'radius' + 1` throw a RangeError


## Install dependencies

```
npm i
```

## Run tests

There are **2** tests, make the tests pass.

```
mocha -w
```