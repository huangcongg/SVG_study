# SVG_study
学习SVG动画

## 一.概述

svg是一种基于xml语法的图像格式,全称是可缩放矢量图(Scalable Vector Graphics).

### 1.使用svg的多种方式

* svg标签形式

  * ```html
    <svg></svg>
    ```

* img标签形式:  

  * ```shell
    <img src="img/杯子蛋糕.svg" alt="">
    ```

* iframe标签形式: 

  * ```shell
    <iframe src="img/杯子蛋糕.svg" scrolling="no" width="200" height="200" frameborder="0"></iframe>
    ```

* object标签形式:

  * ```shell
    <object data="img/杯子蛋糕.svg" type="image/svg+xml"></object>
    ```

* embed标签:

  * ```shell
    <embed src="img/杯子蛋糕.svg" type="image/svg+xml">
    ```

* css也可以使用svg文件.

  * ```xml
    .logo{
    	background:url(icon.svg)
    }
    ```

* svg文件还可以转换为BASE64编码,然后作为Data URL写入网页.

  * ```html
    <img src="data:image/svg+xml;base64,[data]">
    ```

## 二.语法

### 2.1`<svg>`标签

SVG代码都放在顶层标签<svg>之中.下面是一个例子.

```xml
<svg width="100%" height="100%">
<circle id="myCircle" cx="50" cy="50" r="50"/>
</svg>
```

* **width**和**height**属性,制定了SVG图像在HTML元素中所占据的宽度和高度.除了相对单位,也可以采用绝对单位(单位:像素).如果不指定这两个属性,**svg图像默认大小是300像素(宽)*150像素(高).**

* 如果只想展示SVG图像的一部分,就要指定**viewBox**属性.

  * 

    ```xml
    <svg width="100" height="100" viewBox="50 50 50 50">
    <circle cx="50" cy="50" r="50"/>
    </svg>
    ```

  * viewBox属性的值有四个数字,分别是**左上角的横坐标和纵坐标**,**视口的宽度和高度**

  * 如果svg不指定width和height属性,只指定viewBox属性,则相当于只给定svg图像的长宽比.这时,svg图像的默认大小将等于svg元素的父元素可容纳的最大大小.

### 2.2.`<circle>`标签

`<circle>`标签代表圆形.

```xml
<svg width="200" height="200">
    <circle cx="100" cy="100" r="25" fill="pink"/>
    <circle cx="170" cy="170" r="5" class="bgred"/>
    <circle cx="50" cy="50" r="10" class="bgblue"/>
</svg>
```



* cx,cy,r属性分别为横坐标,纵坐标,和半径,单位为像素.

* class属性用来指定对应的css类.

  * ```css
    .bgred{
    	fill: mediumpurple;
    }
    .bgblue{
        fill: deepskyblue;
        stroke: red;
        stroke-width: 3px;
    }
    ```

  * svg的css属性与网页元素有所不同.

    * fill: 填充色
    * stroke: 秒变色
    * stroke-width: 边框宽度

