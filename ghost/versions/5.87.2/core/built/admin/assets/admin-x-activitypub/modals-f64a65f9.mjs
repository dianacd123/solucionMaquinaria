import { u as ce, a as de, c as s, j as e, H as J, b as ue, d as se, e as me, f as I, g as D, B as K, h as xe, N as M, i as X, k as te, l as pe, m as fe, s as be, n as we, L as oe, o as le, A as ae, p as ge, q as he } from "./index-b4a353e7.mjs";
const ye = ({
  type: t = "text",
  inputRef: l,
  title: o,
  hideTitle: r,
  value: a,
  error: m,
  placeholder: k,
  rightPlaceholder: c,
  hint: u,
  onChange: f,
  onFocus: b,
  onBlur: p,
  clearBg: w = !1,
  className: x = "",
  maxLength: F,
  containerClassName: $ = "",
  hintClassName: v = "",
  unstyled: g = !1,
  disabled: z,
  ...C
}) => {
  const U = ce(), { setFocusState: A } = de(), O = (L) => {
    b == null || b(L), A(!0);
  }, T = (L) => {
    p == null || p(L), A(!1);
  }, V = s(
    "relative order-2 flex w-full items-center",
    o && !r && "mt-1.5"
  ), H = !g && s(
    "absolute inset-0 rounded-lg border text-grey-300 transition-colors peer-hover:bg-grey-100 peer-focus:border-green peer-focus:bg-white peer-focus:shadow-[0_0_0_2px_rgba(48,207,67,.25)] dark:peer-hover:bg-grey-925 dark:peer-focus:bg-grey-950",
    m ? "border-red bg-white dark:bg-grey-925" : "border-transparent bg-grey-150 dark:bg-grey-900",
    z && "bg-grey-50 peer-hover:bg-grey-50 dark:bg-grey-950 dark:peer-hover:bg-grey-950"
  ), N = !g && s(
    "peer z-[1] order-2 h-9 w-full bg-transparent px-3 py-1.5 text-sm placeholder:text-grey-500 dark:placeholder:text-grey-700 md:h-[38px] md:py-2 md:text-md",
    z ? "cursor-not-allowed text-grey-600 opacity-60 dark:text-grey-800" : "dark:text-white",
    c ? "w-0 grow rounded-l-lg" : "rounded-lg",
    x
  ), q = !g && s(
    "z-[1] order-3 rounded-r-lg",
    c ? typeof c == "string" ? "flex h-8 items-center py-1 pr-3 text-right text-sm text-grey-500 md:h-9 md:text-base" : "h-9 pr-1" : "pr-2"
  );
  let j = /* @__PURE__ */ e.jsx(e.Fragment, {});
  const Q = /* @__PURE__ */ e.jsx(
    "input",
    {
      ref: l,
      className: N || x,
      disabled: z,
      id: U,
      maxLength: F,
      placeholder: k,
      type: t,
      value: a,
      onBlur: T,
      onChange: f,
      onFocus: O,
      ...C
    }
  );
  return j = /* @__PURE__ */ e.jsxs("div", { className: V, children: [
    Q,
    !g && !w && /* @__PURE__ */ e.jsx("div", { className: H || "" }),
    c && /* @__PURE__ */ e.jsx("span", { className: q || "", children: c })
  ] }), v = s(
    "order-3",
    v
  ), $ = s(
    "flex flex-col",
    $
  ), o || u ? /* @__PURE__ */ e.jsxs("div", { className: $, children: [
    j,
    o && /* @__PURE__ */ e.jsx(J, { className: r ? "sr-only" : "order-1", htmlFor: U, useLabelTag: !0, children: o }),
    u && /* @__PURE__ */ e.jsx(ue, { className: v, color: m ? "red" : "default", children: u })
  ] }) : j;
}, ke = ({
  shiftY: t,
  footerBgColorClass: l = "bg-white dark:bg-black",
  contentBgColorClass: o = "bg-white dark:bg-black",
  height: r = 96,
  children: a
}) => {
  const m = s(
    "w-100 sticky bottom-[-24px] z-[297] m-0 box-border p-0"
  ), k = t ? `calc(${t} - 24px)` : "-24px", c = `${r + 24}px`, u = s(
    "sticky z-[298] block h-[24px]",
    o
  ), f = "0", b = s(
    "sticky z-[299] mb-[-24px] flex items-center justify-between",
    "h-[96px]",
    l
  ), p = "0", w = `${r}px`, x = "sticky mx-2 block h-[24px] rounded-full shadow-[0_0_0_1px_rgba(0,0,0,.025),0_-8px_16px_-3px_rgba(0,0,0,.08)]", F = t ? `calc(${t} + ${r - 24}px)` : `${r - 24}px`;
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      className: m,
      style: {
        bottom: k,
        height: c
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: u,
            style: {
              bottom: f
            }
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: b,
            style: {
              bottom: p,
              height: w
            },
            children: a
          }
        ),
        /* @__PURE__ */ e.jsx(
          "div",
          {
            className: x,
            style: {
              bottom: F
            }
          }
        )
      ]
    }
  );
};
function ee(t, l, o = {}) {
  t ? M.show(Fe, {
    title: "Are you sure you want to leave this page?",
    prompt: /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
      /* @__PURE__ */ e.jsx("p", { children: "Hey there! It looks like you didn't save the changes you made." }),
      /* @__PURE__ */ e.jsx("p", { children: "Save before you go!" })
    ] }),
    okLabel: "Leave",
    cancelLabel: "Stay",
    okColor: "red",
    onOk: (r) => {
      l(), r == null || r.remove();
    },
    ...o
  }) : l();
}
const ve = "bg-[rgba(98,109,121,0.2)] backdrop-blur-[3px]", G = ({
  size: t = "md",
  width: l,
  height: o,
  testId: r,
  title: a,
  okLabel: m = "OK",
  okLoading: k = !1,
  cancelLabel: c = "Cancel",
  footer: u,
  header: f,
  leftButtonProps: b,
  buttonsDisabled: p,
  okDisabled: w,
  padding: x = !0,
  onOk: F,
  okColor: $ = "black",
  onCancel: v,
  topRightContent: g,
  hideXOnMobile: z = !1,
  afterClose: C,
  children: U,
  backDrop: A = !0,
  backDropClick: O = !0,
  stickyFooter: T = !1,
  stickyHeader: V = !1,
  scrolling: H = !0,
  dirty: N = !1,
  animate: q = !0,
  formSheet: j = !1,
  enableCMDS: Q = !0
}) => {
  const L = se(), { setGlobalDirtyState: Z } = me(), [Y, re] = I(!1);
  D(() => {
    Z(N);
  }, [N, Z]), D(() => {
    const y = (B) => {
      B.key === "Escape" && (document.activeElement && document.activeElement instanceof HTMLElement && document.activeElement.blur(), setTimeout(() => {
        v ? v() : ee(N, () => {
          L.remove(), C == null || C();
        });
      }), B.stopPropagation());
    };
    return document.addEventListener("keydown", y), () => {
      document.removeEventListener("keydown", y);
    };
  }, [L, N, C, v]), D(() => {
    const y = setTimeout(() => {
      re(!0);
    }, 250);
    return () => clearTimeout(y);
  }, []), D(() => {
    if (F) {
      const y = (B) => {
        (B.metaKey || B.ctrlKey) && B.key === "s" && (B.preventDefault(), F());
      };
      if (Q)
        return window.addEventListener("keydown", y), () => {
          window.removeEventListener("keydown", y);
        };
    }
  });
  const P = [];
  let _;
  const W = () => {
    ee(N, () => {
      L.remove(), C == null || C();
    });
  };
  u || (c && P.push({
    key: "cancel-modal",
    label: c,
    color: "outline",
    onClick: v || (() => {
      W();
    }),
    disabled: p
  }), m && P.push({
    key: "ok-modal",
    label: m,
    color: $,
    className: "min-w-[80px]",
    onClick: F,
    disabled: p || w,
    loading: k
  }));
  let i = s(
    "relative z-50 mx-auto flex max-h-[100%] w-full flex-col justify-between overflow-x-hidden bg-white dark:bg-black",
    t !== "bleed" && "rounded",
    j ? "shadow-md" : "shadow-xl",
    q && !j && !Y && "animate-modal-in",
    j && !Y && "animate-modal-in-reverse",
    H ? "overflow-y-auto" : "overflow-y-hidden"
  ), d = s(
    "fixed inset-0 z-[1000] h-[100vh] w-[100vw]"
  ), h = "", n = s(
    !g || g === "close" ? "" : "flex items-center justify-between gap-5"
  );
  switch (V && (n = s(
    n,
    "sticky top-0 z-[200] -mb-4 bg-white !pb-4 dark:bg-black"
  )), t) {
    case "sm":
      i = s(
        i,
        "max-w-[480px]"
      ), d = s(
        d,
        "p-4 md:p-[8vmin]"
      ), h = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "md":
      i = s(
        i,
        "max-w-[720px]"
      ), d = s(
        d,
        "p-4 md:p-[8vmin]"
      ), h = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "lg":
      i = s(
        i,
        "max-w-[1020px]"
      ), d = s(
        d,
        "p-4 md:p-[4vmin]"
      ), h = "p-7", n = s(
        n,
        "-inset-x-8"
      );
      break;
    case "xl":
      i = s(
        i,
        "max-w-[1240px]0"
      ), d = s(
        d,
        "p-4 md:p-[3vmin]"
      ), h = "p-10", n = s(
        n,
        "-inset-x-10 -top-10"
      );
      break;
    case "full":
      i = s(
        i,
        "h-full"
      ), d = s(
        d,
        "p-4 md:p-[3vmin]"
      ), h = "p-10", n = s(
        n,
        "-inset-x-10"
      );
      break;
    case "bleed":
      i = s(
        i,
        "h-full"
      ), h = "p-10", n = s(
        n,
        "-inset-x-10"
      );
      break;
    default:
      d = s(
        d,
        "p-4 md:p-[8vmin]"
      ), h = "p-8", n = s(
        n,
        "-inset-x-8"
      );
      break;
  }
  x || (h = "p-0"), i = s(
    i
  ), n = s(
    n,
    h,
    "pb-0"
  ), _ = s(
    h,
    "py-0"
  ), d = s(
    d,
    "max-[800px]:!pb-20"
  );
  const ne = s(
    `${h} ${T ? "py-6" : ""}`,
    "flex w-full items-center justify-between"
  );
  _ = s(
    _,
    (t === "full" || t === "bleed" || o === "full" || typeof o == "number") && "grow"
  );
  const ie = (y) => {
    y.target === y.currentTarget && O && W();
  }, S = {};
  typeof l == "number" ? (S.width = "100%", S.maxWidth = l + "px") : l === "full" && (i = s(
    i,
    "w-full"
  )), typeof o == "number" ? (S.height = "100%", S.maxHeight = o + "px") : o === "full" && (i = s(
    i,
    "h-full"
  ));
  let E;
  return u ? E = u : u === !1 ? _ += " pb-0 " : E = /* @__PURE__ */ e.jsxs("div", { className: ne, children: [
    /* @__PURE__ */ e.jsx("div", { children: b && /* @__PURE__ */ e.jsx(K, { ...b }) }),
    /* @__PURE__ */ e.jsx("div", { className: "flex gap-3", children: /* @__PURE__ */ e.jsx(xe, { buttons: P }) })
  ] }), E = T ? /* @__PURE__ */ e.jsx(ke, { height: 84, children: E }) : /* @__PURE__ */ e.jsx(e.Fragment, { children: E }), /* @__PURE__ */ e.jsxs("div", { className: d, id: "modal-backdrop", onMouseDown: ie, children: [
    /* @__PURE__ */ e.jsx("div", { className: s(
      "pointer-events-none fixed inset-0 z-0",
      A && !j && ve,
      j && "bg-[rgba(98,109,121,0.08)]"
    ) }),
    /* @__PURE__ */ e.jsxs("section", { className: i, "data-testid": r, style: S, children: [
      f === !1 ? "" : !g || g === "close" ? /* @__PURE__ */ e.jsxs("header", { className: n, children: [
        a && /* @__PURE__ */ e.jsx(J, { level: 3, children: a }),
        /* @__PURE__ */ e.jsx("div", { className: `${g !== "close" && "md:!invisible md:!hidden"} ${z && "hidden"} absolute right-6 top-6`, children: /* @__PURE__ */ e.jsx(K, { className: "-m-2 cursor-pointer p-2 opacity-50 hover:opacity-100", icon: "close", iconColorClass: "text-black dark:text-white", size: "sm", testId: "close-modal", unstyled: !0, onClick: W }) })
      ] }) : /* @__PURE__ */ e.jsxs("header", { className: n, children: [
        a && /* @__PURE__ */ e.jsx(J, { level: 3, children: a }),
        g
      ] }),
      /* @__PURE__ */ e.jsx("div", { className: _, children: U }),
      E
    ] })
  ] });
}, je = ({
  title: t = "Are you sure?",
  prompt: l,
  cancelLabel: o = "Cancel",
  okLabel: r = "OK",
  okRunningLabel: a = "...",
  okColor: m = "black",
  onCancel: k,
  onOk: c,
  customFooter: u,
  formSheet: f = !0
}) => {
  const b = se(), [p, w] = I("");
  return /* @__PURE__ */ e.jsx(
    G,
    {
      backDropClick: !1,
      buttonsDisabled: p === "running",
      cancelLabel: o,
      footer: u,
      formSheet: f,
      okColor: m,
      okLabel: p === "running" ? a : r,
      testId: "confirmation-modal",
      title: t,
      width: 540,
      onCancel: k,
      onOk: async () => {
        w("running");
        try {
          await (c == null ? void 0 : c(b));
        } catch (x) {
          console.error("Unhandled Promise Rejection. Make sure you catch errors in your onOk handler.", x);
        }
        w("");
      },
      children: /* @__PURE__ */ e.jsx("div", { className: "py-4 leading-9", children: l })
    }
  );
}, Fe = M.create(je), Ce = M.create(() => {
  var w;
  const { updateRoute: t } = X(), l = M.useModal(), o = te(), r = pe(), m = (w = fe().data) == null ? void 0 : w.site, k = (m == null ? void 0 : m.url) ?? window.location.origin, [c, u] = I(""), [f, b] = I(null), p = async () => {
    try {
      const x = new URL(`.ghost/activitypub/actions/follow/${c}`, k);
      await fetch(x, {
        method: "POST"
      }), be({
        message: "Site followed",
        type: "success"
      }), l.remove(), await r.refetchQueries({ queryKey: ["FollowingResponseData"], type: "active" }), t("");
    } catch {
      b(f);
    }
  };
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        o.reset(), t("");
      },
      cancelLabel: "Cancel",
      okLabel: "Follow",
      size: "sm",
      title: "Follow a Ghost site",
      onOk: p,
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4", children: /* @__PURE__ */ e.jsx(
        ye,
        {
          autoFocus: !0,
          error: !!f,
          hint: f,
          placeholder: "@username@hostname",
          title: "Profile name",
          value: c,
          "data-test-new-follower": !0,
          onChange: (x) => u(x.target.value)
        }
      ) })
    }
  );
});
function R(t) {
  if (!t.preferredUsername || !t.id)
    return "@unknown@unknown";
  try {
    return `@${t.preferredUsername}@${new URL(t.id).hostname}`;
  } catch {
    return "@unknown@unknown";
  }
}
const Ne = ({}) => {
  const { updateRoute: t } = X(), l = te(), { data: { items: o = [] } = {} } = we("inbox"), r = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        l.reset(), t("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Followers",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(oe, { children: r.map((a) => /* @__PURE__ */ e.jsx(le, { action: /* @__PURE__ */ e.jsx(K, { color: "grey", label: "Follow back", link: !0, onClick: () => l.mutate({ username: R(a) }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: a.icon, size: "sm" }), detail: R(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Le = M.create(Ne), Be = ({}) => {
  const { updateRoute: t } = X(), l = ge(), { data: { items: o = [] } = {} } = he("inbox"), r = Array.isArray(o) ? o : [o];
  return /* @__PURE__ */ e.jsx(
    G,
    {
      afterClose: () => {
        l.reset(), t("");
      },
      cancelLabel: "",
      footer: !1,
      okLabel: "",
      size: "md",
      title: "Following",
      topRightContent: "close",
      children: /* @__PURE__ */ e.jsx("div", { className: "mt-3 flex flex-col gap-4 pb-12", children: /* @__PURE__ */ e.jsx(oe, { children: r.map((a) => /* @__PURE__ */ e.jsx(le, { action: /* @__PURE__ */ e.jsx(K, { color: "grey", label: "Unfollow", link: !0, onClick: () => l.mutate({ username: R(a) }) }), avatar: /* @__PURE__ */ e.jsx(ae, { image: a.icon, size: "sm" }), detail: R(a), id: "list-item", title: a.name })) }) })
    }
  );
}, Ee = M.create(Be), $e = { FollowSite: Ce, ViewFollowing: Ee, ViewFollowers: Le };
export {
  $e as default
};
//# sourceMappingURL=modals-f64a65f9.mjs.map
