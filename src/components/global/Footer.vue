<template>
  <footer class="footer" id="footer">
    <div class="content-footer d-flex">
      <div class="content-footer-left">
        <span class="d-block top">
          Operaciones de cambio inmediatas a través de:
        </span>
        <div class="banks d-flex">
          <div class="bank bcp">
            <img alt="Tkambio" src="../../assets/bcp.png" class="footer-img" />
            <span class="d-block time">
              Todos los días
            </span>
          </div>
          <div class="bank bcp">
            <img
              alt="Tkambio"
              src="../../assets/interbank.png"
              class="footer-img"
            />
            <span class="d-block time">
              de Lunes a Sábados
            </span>
          </div>
        </div>
      </div>
      <div class="content-footer-right">
        <span>
          Operaciones interbancarias a <br />
          todos los bancos de Lima
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style lang="scss">
.footer {
  width: 55%;
  @media (max-width: 768px) {
    width: 100%;
  }
  .content {
    &-footer {
      @media (max-width: 768px) {
        justify-content: center;
      }
      @media (max-width: 460px) {
        flex-wrap: wrap;
      }
      &-left {
        margin-right: 10px;
        @media (max-width: 460px) {
          margin-right: 0;
          margin-bottom: 18px;
        }
        .top {
          font-style: normal;
          font-weight: 300;
          font-size: 13px;
          line-height: 13px;
          display: flex;
          align-items: center;
          text-align: center;
          color: #000000;
          margin-bottom: 9px;
          @media (max-width: 768px) {
            font-size: 12px;
            line-height: 12px;
          }
        }
        .bank {
          .time {
            font-size: 13px;
            line-height: 13px;
            display: flex;
            align-items: center;
            text-align: center;
            color: #a0a0a0;
          }
        }
      }
      &-right {
        border-left: 1px solid #c4c4c4;
        display: flex;
        align-items: center;
        @media (max-width: 460px) {
          border-left: none;
        }
        span {
          font-style: normal;
          font-weight: 300;
          font-size: 16px;
          line-height: 22px;
          display: flex;
          align-items: center;
          color: #000000;
          padding-left: 10px;
          @media (max-width: 768px) {
            font-size: 13px;
            line-height: 20px;
          }
          @media (max-width: 460px) {
            font-weight: 300;
            font-size: 14px;
            line-height: 20px;
          }
        }
      }
    }
  }
  &-img {
    height: 50px;
  }
}
</style>
