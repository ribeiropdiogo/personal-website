[uminho]: https://uminho.pt
[anem]: http://anem.pt
[cesium]: https://www.cesium.di.uminho.pt
[contributing]: CONTRIBUTING.md
[code_of_conduct]: CODE_OF_CONDUCT.md
[license]: LICENSE.txt

<h1 align="center">
  <a href="http://heartbits.pt" target="_blank">
    <img src="_assets/images/banner-grey.png" alt="HeartBits" width="350">
  </a>
  <br>
</h1>

The HeartBits Hackathon of 2020 is an event organized jointly by the [National
Association of Medical Students](anem) (ANEM) and [Software Engineer Student
Group](cesium) from [University of Minho](uminho) (CeSIUM).

_A Hackathon HeartBits de 2020 é um evento de organização conjunta da
[Associação Nacional de Estudantes de Medicina](anem) (ANEM) e do [Centro de
Estudantes de Informática](cesium) da [Universidade do Minho](uminho)
(CeSIUM)._

_O evento tem por finalidade promover a interdisciplinaridade e a inovação na
Saúde através da criação de produtos de MedTech que solucionem problemas atuais
na área de Saúde. Pretende-se, por conseguinte, incentivar a criatividade e
trabalho de jovens estudantes nesta área._

## :rocket: Getting Started

This project is powered by [Jekyll](https://jekyllrb.com/docs/quickstart/), a
static site generator. These instructions will get you a copy of the project
up and running on your local machine for development purposes.

### :inbox_tray: Prerequisites

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [RubyGems](https://rubygems.org/pages/download)

Install all dependencies using `bundle install`.

### :hammer: Development

Starting the development server and navigate to <http://localhost:4000>.

```
rake serve
```

Clean the project directory.

```
rake clean
```

### :package: Deployment

Bundling the site into static files for production.

```
rake build
```

## :handshake: Contributing

Please read [CONTRIBUTING][contributing] and [CODE_OF_CONDUCT][code_of_conduct]
for details on our code of conduct and the process for submitting pull requests
to us.

## :memo: License

This project is licensed under the MIT License - see [LICENSE][license] for
details.
