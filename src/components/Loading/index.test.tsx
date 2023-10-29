import { Loading } from "./index";
import { render, screen } from "@testing-library/react";
import { RecoilRoot } from "recoil";
import { LoadingState } from "../../store/loading";
import '@testing-library/jest-dom'

describe('Loadingに関するテスト', () => {
  test('初期状態ではLoadingコンポーネントは表示されない。', () => {
    render(
      <RecoilRoot >
        <Loading />
      </RecoilRoot>
    );

    expect(screen.queryByAltText('Loading')).toBeNull();
  });

  it('Loadingコンポーネントが表示され、一緒にメッセージも表示される', () => {
    const loadingState = {
      isLoading: true,
      message: 'Loading...',
    };
    render(
      <RecoilRoot initializeState={({ set }) => set(LoadingState, loadingState)}>
        <Loading />
      </RecoilRoot>
    );
    expect(screen.getByAltText('Loading')).not.toBeNull();
    expect(screen.getByText(loadingState.message)).toBeInTheDocument();
  });

  it('Loadingコンポーネントのみ表示される', () => {
    const loadingState = {
      isLoading: true,
      message: null,
    };
    render(
      <RecoilRoot initializeState={({ set }) => set(LoadingState, loadingState)}>
        <Loading />
      </RecoilRoot>
    )
    expect(screen.getAllByAltText('Loading')).not.toBeNull();
    expect(screen.getByText).toBeNull();
  })
});

